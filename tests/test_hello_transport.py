"""Run the real project entry point and exercise HTTP -> gateway -> gRPC."""

from __future__ import annotations

import concurrent.futures
import json
import os
import signal
import socket
import subprocess
import sys
import tempfile
import time
import unittest
import urllib.error
import urllib.parse
import urllib.request

import grpc

from bootstrap import configure_import_paths

ROOT = configure_import_paths(__file__)

from internal import _GENERATED_PYTHON_ROOT  # noqa: F401
from hello.v1 import hello_pb2, hello_pb2_grpc


@unittest.skipUnless(os.name == "posix", "process-group integration tests require macOS/Linux")
class TestHelloTransport(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        # Keep both ports reserved until immediately before launching the project.
        with socket.socket() as grpc_socket, socket.socket() as http_socket:
            grpc_socket.bind(("127.0.0.1", 0))
            http_socket.bind(("127.0.0.1", 0))
            grpc_port = grpc_socket.getsockname()[1]
            http_port = http_socket.getsockname()[1]

        cls.http_url = f"http://127.0.0.1:{http_port}"
        cls.grpc_address = f"127.0.0.1:{grpc_port}"
        env = os.environ.copy()
        env.update(
            POSTGRES_DSN="",
            SKIP_AUTO_MIGRATION="1",
            GRPC_HOST="127.0.0.1",
            GRPC_PORT=str(grpc_port),
            GRPC_PORT_CHECK_HOST="127.0.0.1",
            GATEWAY_HTTP_ADDR=f"127.0.0.1:{http_port}",
            GATEWAY_GRPC_BACKEND_ADDR=f"127.0.0.1:{grpc_port}",
        )
        cls.log = tempfile.TemporaryFile(mode="w+t")
        cls.addClassCleanup(cls.log.close)
        cls.process = subprocess.Popen(
            [sys.executable, str(ROOT / "cmd" / "main.py")],
            cwd=ROOT,
            env=env,
            stdout=cls.log,
            stderr=subprocess.STDOUT,
            start_new_session=True,
        )
        cls.addClassCleanup(cls._stop_project)
        cls.channel = grpc.insecure_channel(cls.grpc_address)
        cls.addClassCleanup(cls.channel.close)
        cls.stub = hello_pb2_grpc.HelloServiceStub(cls.channel)

        deadline = time.monotonic() + 90
        while time.monotonic() < deadline and cls.process.poll() is None:
            try:
                with urllib.request.urlopen(cls.http_url + "/v1/hello", timeout=1) as response:
                    if response.status == 200:
                        grpc.channel_ready_future(cls.channel).result(timeout=5)
                        return
            except (urllib.error.URLError, TimeoutError):
                time.sleep(0.1)
        cls.log.seek(0)
        raise RuntimeError("Project failed to start:\n" + cls.log.read())

    @classmethod
    def _stop_project(cls) -> None:
        try:
            os.killpg(cls.process.pid, signal.SIGINT)
            cls.process.wait(timeout=10)
        except subprocess.TimeoutExpired:
            os.killpg(cls.process.pid, signal.SIGKILL)
            cls.process.wait(timeout=5)
        except ProcessLookupError:
            cls.process.wait(timeout=5)
        finally:
            # go run has its own child; clean up if the launcher exited early.
            try:
                os.killpg(cls.process.pid, signal.SIGKILL)
            except ProcessLookupError:
                pass

    def test_direct_grpc(self) -> None:
        for name in ("", "Codex", "你好 & gRPC"):
            with self.subTest(name=name):
                response = self.stub.SayHello(hello_pb2.SayHelloRequest(name=name), timeout=5)
                self.assertEqual(response.message, f"Hello, {name or 'World'}!")

    def test_http_through_gateway(self) -> None:
        for name in (None, "", "Codex", "你好 & HTTP"):
            with self.subTest(name=name):
                query = "" if name is None else "?" + urllib.parse.urlencode({"name": name})
                with urllib.request.urlopen(self.http_url + "/v1/hello" + query, timeout=5) as response:
                    self.assertEqual(response.status, 200)
                    payload = json.load(response)
                    self.assertEqual(payload["message"], f"Hello, {name or 'World'}!")
                    self.assertTrue(payload["request_id"])

    def test_concurrent_http_requests(self) -> None:
        def request(index: int) -> dict[str, str]:
            with urllib.request.urlopen(self.http_url + f"/v1/hello?name=user_{index}", timeout=5) as response:
                return json.load(response)

        with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
            responses = list(executor.map(request, range(10)))
        self.assertEqual([response["message"] for response in responses], [f"Hello, user_{i}!" for i in range(10)])
        self.assertEqual(len({response["request_id"] for response in responses}), 10)

    def test_unknown_http_route(self) -> None:
        with self.assertRaises(urllib.error.HTTPError) as error:
            urllib.request.urlopen(self.http_url + "/not-found", timeout=5)
        self.assertEqual(error.exception.code, 404)
        error.exception.close()

    def test_unknown_grpc_method(self) -> None:
        with self.assertRaises(grpc.RpcError) as error:
            self.channel.unary_unary("/hello.v1.HelloService/Unknown")(b"", timeout=5)
        self.assertEqual(error.exception.code(), grpc.StatusCode.UNIMPLEMENTED)

    def test_trace_id_is_forwarded_and_uses_snake_case_json(self) -> None:
        trace_id = "http-known-trace"
        request = urllib.request.Request(
            self.http_url + "/v1/hello?name=Trace",
            headers={"X-Trace-Id": trace_id},
        )
        with urllib.request.urlopen(request, timeout=5) as response:
            self.assertEqual(
                json.load(response),
                {"message": "Hello, Trace!", "request_id": trace_id},
            )

    def test_z_parent_sigterm_releases_both_listeners(self) -> None:
        self.process.send_signal(signal.SIGTERM)
        self.process.wait(timeout=15)

        for address in (
            self.grpc_address,
            self.http_url.removeprefix("http://"),
        ):
            host, port = address.rsplit(":", 1)
            with self.subTest(address=address), socket.socket() as sock:
                sock.settimeout(1)
                self.assertNotEqual(sock.connect_ex((host, int(port))), 0)


if __name__ == "__main__":
    unittest.main()
