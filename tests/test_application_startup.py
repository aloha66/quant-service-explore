"""Application-startup behavior that must not leave partial services running."""

from __future__ import annotations

import importlib.util
import asyncio
from pathlib import Path
from types import SimpleNamespace
from unittest import IsolatedAsyncioTestCase, TestCase
from unittest.mock import AsyncMock, MagicMock, patch

from internal.conf import injector
from internal.conf.settings import GrpcSettings, PostgreSQLSettings, Settings

_MAIN_PATH = Path(__file__).resolve().parent.parent / "cmd" / "main.py"
_SPEC = importlib.util.spec_from_file_location("scaffold_main", _MAIN_PATH)
assert _SPEC and _SPEC.loader
main = importlib.util.module_from_spec(_SPEC)
_SPEC.loader.exec_module(main)

_GRPC_SPEC = importlib.util.spec_from_file_location("scaffold_grpc_main", _MAIN_PATH.with_name("grpc_main.py"))
assert _GRPC_SPEC and _GRPC_SPEC.loader
grpc_main = importlib.util.module_from_spec(_GRPC_SPEC)
_GRPC_SPEC.loader.exec_module(grpc_main)


class TestAutoMigration(TestCase):
    def test_failed_migration_stops_startup_without_stamping_schema(self) -> None:
        for stderr in ("relation required_item does not exist", "DuplicateTableError: existing_item"):
            with self.subTest(stderr=stderr):
                failed_migration = SimpleNamespace(returncode=1, stdout="", stderr=stderr)
                with (
                    patch.dict(main.os.environ, {"APP_ENV": "local", "POSTGRES_DSN": "postgresql://test"}, clear=True),
                    patch.object(main.subprocess, "run", return_value=failed_migration) as run,
                    self.assertRaisesRegex(SystemExit, "Auto migration failed"),
                ):
                    main._run_local_auto_migration()

                self.assertEqual(run.call_count, 1)
                self.assertIn("upgrade", run.call_args.args[0])
                self.assertNotIn("stamp", run.call_args.args[0])


class TestGrpcStartupCleanup(IsolatedAsyncioTestCase):
    async def asyncSetUp(self) -> None:
        settings = Settings(PostgreSQLSettings("postgresql+asyncpg://test"), GrpcSettings())
        self.enterContext(patch.object(grpc_main.Settings, "from_env", return_value=settings))
        # Replace external resources, while exercising the real injector and entrypoint.
        self.engine = MagicMock(spec=injector.AsyncEngine)
        self.engine.dispose = AsyncMock()
        self.enterContext(patch.object(injector, "create_async_engine", return_value=self.engine))
        self.server = MagicMock(spec=grpc_main.grpc.aio.Server)
        self.server.start = AsyncMock()
        self.server.stop = AsyncMock()
        self.server_factory = self.enterContext(patch.object(grpc_main.grpc.aio, "server", return_value=self.server))
        self.register = self.enterContext(patch.object(grpc_main, "register_all_grpc_services"))
        self.enterContext(patch.object(grpc_main.os, "name", "posix"))
        self.install_signal = self.enterContext(patch.object(asyncio.get_running_loop(), "add_signal_handler"))

    async def test_bind_failure_releases_server_and_runtime(self) -> None:
        self.server.add_insecure_port.side_effect = RuntimeError("bind failed")
        with self.assertRaisesRegex(RuntimeError, "bind failed"):
            await grpc_main.main()
        self.server.stop.assert_awaited_once()
        self.engine.dispose.assert_awaited_once()

    async def test_start_failure_releases_server_and_runtime(self) -> None:
        self.server.start.side_effect = RuntimeError("start failed")
        with self.assertRaisesRegex(RuntimeError, "start failed"):
            await grpc_main.main()
        self.server.stop.assert_awaited_once()
        self.engine.dispose.assert_awaited_once()

    async def test_registration_failure_releases_server_and_runtime(self) -> None:
        self.register.side_effect = RuntimeError("registration failed")
        with self.assertRaisesRegex(RuntimeError, "registration failed"):
            await grpc_main.main()
        self.server.stop.assert_awaited_once()
        self.engine.dispose.assert_awaited_once()

    async def test_server_creation_failure_releases_runtime(self) -> None:
        self.server_factory.side_effect = RuntimeError("server creation failed")
        with self.assertRaisesRegex(RuntimeError, "server creation failed"):
            await grpc_main.main()
        self.engine.dispose.assert_awaited_once()

    async def test_signal_installation_failure_releases_server_and_runtime(self) -> None:
        self.install_signal.side_effect = RuntimeError("signal installation failed")
        with self.assertRaisesRegex(RuntimeError, "signal installation failed"):
            await grpc_main.main()
        self.server.stop.assert_awaited_once()
        self.engine.dispose.assert_awaited_once()

    async def test_server_stop_failure_still_releases_runtime(self) -> None:
        self.install_signal.side_effect = lambda sig, callback: callback()
        self.server.stop.side_effect = RuntimeError("stop failed")
        with self.assertRaisesRegex(RuntimeError, "stop failed"):
            await grpc_main.main()
        self.engine.dispose.assert_awaited_once()

    async def test_partial_runtime_assembly_failure_releases_engine(self) -> None:
        with (
            patch.object(injector, "create_hello_handler", side_effect=RuntimeError("assembly failed")),
            self.assertRaisesRegex(RuntimeError, "assembly failed"),
        ):
            await grpc_main.main()
        self.engine.dispose.assert_awaited_once()
        self.server_factory.assert_not_called()


if __name__ == "__main__":
    import unittest

    unittest.main()
