import logging
import inspect
import time
from collections.abc import Awaitable, Callable
from typing import Any

import grpc

from internal.pkg.context.trace import set_trace_id

logger = logging.getLogger(__name__)

class TraceInterceptor(grpc.aio.ServerInterceptor):
    """
    gRPC Server 拦截器：
    1. 从 metadata 提取 x-trace-id，如果没有则生成并保存。
    2. 记录请求关键路径的可观测性指标（如耗时、基本状态）。
    """
    async def intercept_service(
        self,
        continuation: Callable[[grpc.HandlerCallDetails], Awaitable[grpc.RpcMethodHandler]],
        handler_call_details: grpc.HandlerCallDetails,
    ) -> grpc.RpcMethodHandler | None:
        trace_id = None
        if handler_call_details.invocation_metadata:
            for key, value in handler_call_details.invocation_metadata:
                if key.lower() == "x-trace-id":
                    trace_id = value
                    break
        
        method_name = handler_call_details.method
        handler = await continuation(handler_call_details)
        if handler is None or handler.request_streaming or handler.response_streaming:
            return handler

        original_behavior = handler.unary_unary

        async def wrap_unary_unary(request: Any, context: grpc.aio.ServicerContext) -> Any:
            request_trace_id = set_trace_id(trace_id)
            start_time = time.perf_counter()
            logger.info("gRPC Call Started: %s", method_name)
            try:
                result = original_behavior(request, context)
                if inspect.isawaitable(result):
                    return await result
                return result
            finally:
                cost_ms = (time.perf_counter() - start_time) * 1000
                status = context.code() or grpc.StatusCode.OK
                logger.info(
                    "gRPC Call Completed: %s trace_id=%s status=%s cost_ms=%.2f",
                    method_name,
                    request_trace_id,
                    status.name,
                    cost_ms,
                )

        return grpc.unary_unary_rpc_method_handler(
            wrap_unary_unary,
            request_deserializer=handler.request_deserializer,
            response_serializer=handler.response_serializer,
        )
