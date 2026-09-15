from __future__ import annotations

import os
import signal
import socket
import subprocess
import sys
import time
from collections.abc import Callable
from pathlib import Path

_PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(_PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(_PROJECT_ROOT))
from bootstrap import configure_import_paths

ROOT = configure_import_paths(__file__)
_GATEWAY_BINARY = ROOT / ".build" / "grpc_gateway"


def _preflight_env() -> None:
    pass


def _run_local_auto_migration() -> None:
    if os.getenv("SKIP_AUTO_MIGRATION", "0").strip() in {"1", "true", "TRUE", "yes", "YES"}:
        return

    app_env = os.getenv("APP_ENV", "").strip().lower()
    if app_env != "local":
        return

    runtime_dsn = os.getenv("POSTGRES_DSN", "")
    if not runtime_dsn:
        return

    result = subprocess.run(
        [
            sys.executable,
            "-m",
            "alembic",
            "-c",
            str(ROOT / "alembic.ini"),
            "-x",
            f"dsn={runtime_dsn}",
            "upgrade",
            "head",
        ],
        check=False,
        capture_output=True,
        text=True,
        cwd=str(ROOT),
    )
    if result.returncode == 0:
        return

    details = (result.stderr or result.stdout or "migration command failed").strip()
    raise SystemExit(f"Auto migration failed; refusing to start services: {details}")


def _start_grpc_process() -> subprocess.Popen[bytes]:
    return subprocess.Popen([sys.executable, str(ROOT / "cmd" / "grpc_main.py")], start_new_session=True)


def _wait_grpc_ready(process: subprocess.Popen[bytes], host: str = "127.0.0.1", port: int = 50051) -> None:
    deadline = time.monotonic() + 15
    while time.monotonic() < deadline:
        if process.poll() is not None:
            raise RuntimeError("gRPC process exited before becoming ready; check cmd/grpc_main.py startup logs.")
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.settimeout(0.5)
            try:
                sock.connect((host, port))
                return
            except OSError:
                time.sleep(0.2)
    raise RuntimeError(f"gRPC not ready on {host}:{port} within timeout.")


def _build_gateway_binary() -> None:
    env = os.environ.copy()
    env.pop("GOROOT", None)
    subprocess.run(
        ["make", "gateway-build"],
        check=True,
        cwd=str(ROOT),
        env=env,
    )


def _start_gateway_process() -> subprocess.Popen[bytes]:
    _build_gateway_binary()
    env = os.environ.copy()
    env.setdefault("GATEWAY_GRPC_BACKEND_ADDR", f"127.0.0.1:{env.get('GRPC_PORT', '50051')}")
    return subprocess.Popen(
        [str(_GATEWAY_BINARY)],
        cwd=str(ROOT),
        env=env,
        start_new_session=True,
    )


def _stop_process(process: subprocess.Popen[bytes]) -> None:
    if process.poll() is not None:
        return
    try:
        if os.name == "posix":
            os.killpg(process.pid, signal.SIGTERM)
        else:
            process.terminate()
        process.wait(timeout=10)
    except subprocess.TimeoutExpired:
        if os.name == "posix":
            os.killpg(process.pid, signal.SIGKILL)
        else:
            process.kill()
        process.wait(timeout=5)
    except ProcessLookupError:
        return


def _install_stop_handlers(stop: Callable[[], None]) -> None:
    for sig in (signal.SIGINT, signal.SIGTERM):
        signal.signal(sig, lambda *_: stop())


def main() -> None:
    _preflight_env()
    _run_local_auto_migration()

    processes: list[subprocess.Popen[bytes]] = []
    stop_requested = False

    def request_stop() -> None:
        nonlocal stop_requested
        stop_requested = True

    _install_stop_handlers(request_stop)
    try:
        grpc_process = _start_grpc_process()
        processes.append(grpc_process)
        grpc_host = os.getenv("GRPC_PORT_CHECK_HOST", "127.0.0.1")
        grpc_port = int(os.getenv("GRPC_PORT", "50051"))
        _wait_grpc_ready(grpc_process, host=grpc_host, port=grpc_port)
        gateway_process = _start_gateway_process()
        processes.append(gateway_process)
        while not stop_requested:
            if grpc_process.poll() is not None:
                raise RuntimeError("gRPC process exited unexpectedly.")
            if gateway_process.poll() is not None:
                raise RuntimeError("Gateway process exited unexpectedly.")
            time.sleep(0.2)
    finally:
        for process in reversed(processes):
            _stop_process(process)


if __name__ == "__main__":
    main()
