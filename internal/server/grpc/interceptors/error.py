import logging
import asyncio
from collections.abc import Awaitable, Callable

import grpc

from internal.pkg.errors.errors import AppError, ErrorReason

logger = logging.getLogger(__name__)

_GRPC_STATUS_BY_REASON = {
    ErrorReason.INTERNAL: grpc.StatusCode.INTERNAL,
    ErrorReason.NOT_FOUND: grpc.StatusCode.NOT_FOUND,
    ErrorReason.INVALID_ARGUMENT: grpc.StatusCode.INVALID_ARGUMENT,
    ErrorReason.PERMISSION_DENIED: grpc.StatusCode.PERMISSION_DENIED,
    ErrorReason.UNAUTHENTICATED: grpc.StatusCode.UNAUTHENTICATED,
}

class ErrorInterceptor(grpc.aio.ServerInterceptor):
    """
    gRPC Server 拦截器：
    统一拦截并在响应链上捕获异常。
    - 若为 AppError，将 code/message 映射至协议层 context.abort()
    - 若为未知异常，统一抛出 INTERNAL 错误（保护敏感信息防止泄露），并打出详细的 traceback。
    """
    async def intercept_service(
        self,
        continuation: Callable[[grpc.HandlerCallDetails], Awaitable[grpc.RpcMethodHandler]],
        handler_call_details: grpc.HandlerCallDetails,
    ) -> grpc.RpcMethodHandler:
        handler = await continuation(handler_call_details)
        if handler is None:
            return handler
            
        # 仅针对 unary_unary 请求进行拦截包装（最常使用）
        if handler.request_streaming or handler.response_streaming:
            return handler
            
        # 包装原有的 unary_unary
        original_behavior = handler.unary_unary

        async def wrap_unary_unary(request, context: grpc.aio.ServicerContext):
            try:
                if asyncio.iscoroutinefunction(original_behavior):
                    return await original_behavior(request, context)
                else:
                    return original_behavior(request, context)
            except grpc.aio.AbortError:
                # context.abort() 已完成协议终止，保留 gRPC 的控制流。
                raise
            except AppError as e:
                # 预期的业务错误，记录日志但不抛出完整 traceback
                logger.warning("AppError [%s]: %s", e.reason, e.message)
                await context.abort(_GRPC_STATUS_BY_REASON[e.reason], e.message)
            except Exception as e:
                # 未预期异常，记录详细日志并对客户端隐藏敏感信息
                logger.exception("An unhandled exception occurred during RPC execute")
                await context.abort(grpc.StatusCode.INTERNAL, "Internal Server Error")

        # 构造并返回新的 handler
        return grpc.unary_unary_rpc_method_handler(
            wrap_unary_unary,
            request_deserializer=handler.request_deserializer,
            response_serializer=handler.response_serializer,
        )
