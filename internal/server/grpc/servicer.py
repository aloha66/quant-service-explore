from __future__ import annotations

import logging
import grpc

from hello.v1 import hello_pb2_grpc
from internal.modules.hello.service import HelloService

logger = logging.getLogger(__name__)

REGISTERED_GRPC_SERVICE_FULL_NAMES: tuple[str, ...] = (
    "hello.v1.HelloService",
)

def register_hello_service(server: grpc.aio.Server, service: HelloService) -> None:
    hello_pb2_grpc.add_HelloServiceServicer_to_server(service, server)

def register_all_grpc_services(
    server: grpc.aio.Server,
    *,
    hello_service: HelloService,
) -> tuple[str, ...]:
    register_hello_service(server, hello_service)
    return REGISTERED_GRPC_SERVICE_FULL_NAMES
