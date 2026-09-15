import logging
from internal.pkg.context.trace import get_trace_id

class TraceIDFilter(logging.Filter):
    """
    一个日志过滤器，它的作用是将 contextvars 中的 trace_id 添加到 LogRecord 中，
    以便 Formatter 可以输出它。
    """
    def filter(self, record: logging.LogRecord) -> bool:
        record.trace_id = get_trace_id() or "-"
        return True

def setup_logging(level: int = logging.INFO) -> None:
    """
    统一配置应用的日志打印格式，包含 trace_id
    """
    formatter = logging.Formatter(
        "%(asctime)s - [%(trace_id)s] - %(name)s - %(levelname)s - %(message)s"
    )
    
    handler = logging.StreamHandler()
    handler.setFormatter(formatter)
    
    # 将 Filter 绑定到 Handler 或者全局 RootLogger。
    # 这里我们绑定到 Handler，确保所有经过这个 Handler 的日志都有 trace_id
    handler.addFilter(TraceIDFilter())
    
    root_logger = logging.getLogger()
    root_logger.setLevel(level)
    
    # 移除已有的 handlers 避免重复输出
    for h in root_logger.handlers[:]:
        root_logger.removeHandler(h)
        
    root_logger.addHandler(handler)
