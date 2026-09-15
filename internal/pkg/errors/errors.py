from enum import StrEnum


class ErrorReason(StrEnum):
    INTERNAL = "internal"
    NOT_FOUND = "not_found"
    INVALID_ARGUMENT = "invalid_argument"
    PERMISSION_DENIED = "permission_denied"
    UNAUTHENTICATED = "unauthenticated"

class AppError(Exception):
    """
    业务层抛出的基础异常类。
    包含了向协议层映射的必要信息。
    """
    def __init__(
        self,
        message: str,
        reason: ErrorReason = ErrorReason.INTERNAL,
        meta: dict[str, str] | None = None,
    ) -> None:
        super().__init__(message)
        self.message = message
        self.reason = reason
        self.meta = meta or {}

class NotFoundError(AppError):
    def __init__(self, message: str) -> None:
        super().__init__(message, reason=ErrorReason.NOT_FOUND)

class ValidationError(AppError):
    def __init__(self, message: str) -> None:
        super().__init__(message, reason=ErrorReason.INVALID_ARGUMENT)

class PermissionError(AppError):
    def __init__(self, message: str) -> None:
        super().__init__(message, reason=ErrorReason.PERMISSION_DENIED)

class UnauthenticatedError(AppError):
    def __init__(self, message: str) -> None:
        super().__init__(message, reason=ErrorReason.UNAUTHENTICATED)
