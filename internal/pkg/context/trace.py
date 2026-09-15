import uuid
from contextvars import ContextVar

# 使用 Python 的 contextvars 来存储每个 asyncio task（即每个 gRPC 请求）独立的 trace_id
_trace_id_ctx_var: ContextVar[str] = ContextVar("trace_id", default="")

def get_trace_id() -> str:
    """获取当前请求的 trace_id，如果没有则返回空字符串。"""
    return _trace_id_ctx_var.get()

def set_trace_id(trace_id: str | None = None) -> str:
    """
    设置当前请求的 trace_id。
    如果不提供，则自动生成一个 UUID。
    返回所设置的 trace_id。
    """
    if not trace_id:
        trace_id = uuid.uuid4().hex
    _trace_id_ctx_var.set(trace_id)
    return trace_id
