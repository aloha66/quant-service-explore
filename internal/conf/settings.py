from __future__ import annotations

import os
from dataclasses import dataclass


@dataclass(slots=True)
class PostgreSQLSettings:
    dsn: str
    pool_size: int = 10
    max_overflow: int = 20


@dataclass(slots=True)
class GrpcSettings:
    host: str = "0.0.0.0"
    port: int = 50051


@dataclass(slots=True)
class Settings:
    postgres: PostgreSQLSettings
    grpc: GrpcSettings

    @classmethod
    def from_env(cls) -> "Settings":
        dsn = os.getenv("POSTGRES_DSN", "")
        pool_size = int(os.getenv("POSTGRES_POOL_SIZE", "10"))
        max_overflow = int(os.getenv("POSTGRES_MAX_OVERFLOW", "20"))

        return cls(
            postgres=PostgreSQLSettings(
                dsn=dsn,
                pool_size=pool_size,
                max_overflow=max_overflow,
            ),
            grpc=GrpcSettings(
                host=os.getenv("GRPC_HOST", "0.0.0.0"),
                port=int(os.getenv("GRPC_PORT", "50051")),
            ),
        )
