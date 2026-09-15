from __future__ import annotations

import asyncio
import logging
import os
import signal
import sys
from pathlib import Path

import grpc

_PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(_PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(_PROJECT_ROOT))
from bootstrap import configure_import_paths

ROOT = configure_import_paths(__file__, include_generated=True)

from internal.conf.injector import AppRuntime
from internal.conf.settings import Settings
from internal.server.grpc.servicer import register_all_grpc_services

from internal.pkg.log.config import setup_logging
from internal.server.grpc.interceptors import TraceInterceptor, ErrorInterceptor

# Set up custom logging
setup_logging(level=logging.INFO)
logger = logging.getLogger(__name__)

def _preflight_env() -> None:
    # No longer strictly require POSTGRES_DSN for the Hello World scaffold
    pass


async def main() -> None:
    _preflight_env()
    settings = Settings.from_env()
    runtime = AppRuntime(settings)
    server = None
    try:
        container = await runtime.startup()

        server = grpc.aio.server(interceptors=[
            TraceInterceptor(),
            ErrorInterceptor(),
        ])
        register_all_grpc_services(
            server,
            hello_service=container.hello_service,
        )

        host = settings.grpc.host
        port = settings.grpc.port
        server.add_insecure_port(f"{host}:{port}")
        await server.start()
        logger.info("gRPC server listening on %s:%s", host, port)

        stop_event = asyncio.Event()

        def _stop(*_: object) -> None:
            stop_event.set()

        loop = asyncio.get_running_loop()
        for sig in (signal.SIGINT, signal.SIGTERM):
            if os.name == "nt":
                signal.signal(sig, _stop)
            else:
                loop.add_signal_handler(sig, _stop)

        await stop_event.wait()
    finally:
        try:
            if server is not None:
                await server.stop(grace=5)
        finally:
            await runtime.shutdown()


if __name__ == "__main__":
    asyncio.run(main())
