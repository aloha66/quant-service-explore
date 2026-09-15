"""Exercise error handling through a real local asynchronous gRPC server."""

from __future__ import annotations

from collections.abc import AsyncIterator, Awaitable, Callable
from contextlib import asynccontextmanager
import unittest

import grpc

from internal.pkg.errors.errors import AppError, ErrorReason
from internal.server.grpc.interceptors.error import ErrorInterceptor


class TestErrorInterceptor(unittest.IsolatedAsyncioTestCase):
    @asynccontextmanager
    async def rpc_server(
        self,
        behavior: Callable[[bytes, grpc.aio.ServicerContext], Awaitable[bytes]],
    ) -> AsyncIterator[grpc.aio.UnaryUnaryMultiCallable]:
        server = grpc.aio.server(interceptors=[ErrorInterceptor()])
        server.add_generic_rpc_handlers((
            grpc.method_handlers_generic_handler(
                "test.ErrorContract",
                {"Call": grpc.unary_unary_rpc_method_handler(behavior)},
            ),
        ))
        try:
            port = server.add_insecure_port("127.0.0.1:0")
            await server.start()
            async with grpc.aio.insecure_channel(f"127.0.0.1:{port}") as channel:
                yield channel.unary_unary("/test.ErrorContract/Call")
        finally:
            await server.stop(0)

    async def test_successful_response_is_preserved(self) -> None:
        async def echo(request, context):
            return request

        with self.assertNoLogs(level="ERROR"):
            async with self.rpc_server(echo) as call:
                self.assertEqual(await call(b"hello", timeout=5), b"hello")

    async def test_explicit_abort_preserves_status_without_unhandled_error_logs(self) -> None:
        async def abort(request, context):
            await context.abort(grpc.StatusCode.INVALID_ARGUMENT, "bad name")

        with self.assertNoLogs(level="ERROR"):
            async with self.rpc_server(abort) as call:
                with self.assertRaises(grpc.aio.AioRpcError) as error:
                    await call(b"", timeout=5)
                self.assertEqual(error.exception.code(), grpc.StatusCode.INVALID_ARGUMENT)
                self.assertEqual(error.exception.details(), "bad name")

    async def test_business_errors_map_to_grpc_status(self) -> None:
        cases = (
            (ErrorReason.INTERNAL, grpc.StatusCode.INTERNAL),
            (ErrorReason.NOT_FOUND, grpc.StatusCode.NOT_FOUND),
            (ErrorReason.INVALID_ARGUMENT, grpc.StatusCode.INVALID_ARGUMENT),
            (ErrorReason.PERMISSION_DENIED, grpc.StatusCode.PERMISSION_DENIED),
            (ErrorReason.UNAUTHENTICATED, grpc.StatusCode.UNAUTHENTICATED),
        )
        for reason, expected_status in cases:
            with self.subTest(reason=reason):
                async def business_error(request, context):
                    raise AppError("business failure", reason=reason)

                with self.assertLogs("internal.server.grpc.interceptors.error", level="WARNING") as logs:
                    async with self.rpc_server(business_error) as call:
                        with self.assertRaises(grpc.aio.AioRpcError) as error:
                            await call(b"", timeout=5)
                        self.assertEqual(error.exception.code(), expected_status)
                        self.assertEqual(error.exception.details(), "business failure")
                self.assertEqual([record.levelname for record in logs.records], ["WARNING"])
                self.assertIsNone(logs.records[0].exc_info)

    async def test_unexpected_error_hides_details_from_client(self) -> None:
        async def unexpected_error(request, context):
            raise RuntimeError("private infrastructure detail")

        with self.assertLogs("internal.server.grpc.interceptors.error", level="ERROR") as logs:
            async with self.rpc_server(unexpected_error) as call:
                with self.assertRaises(grpc.aio.AioRpcError) as error:
                    await call(b"", timeout=5)
                self.assertEqual(error.exception.code(), grpc.StatusCode.INTERNAL)
                self.assertEqual(error.exception.details(), "Internal Server Error")
                self.assertNotIn("private infrastructure detail", error.exception.details())
        self.assertEqual(len(logs.records), 1)
        self.assertIsNotNone(logs.records[0].exc_info)


if __name__ == "__main__":
    unittest.main()
