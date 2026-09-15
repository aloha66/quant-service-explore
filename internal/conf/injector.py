from __future__ import annotations

from dataclasses import dataclass
from sqlalchemy.ext.asyncio import AsyncEngine, AsyncSession, async_sessionmaker, create_async_engine

from internal.conf.settings import Settings
from internal.modules.hello.biz.usecase.hello_usecase import HelloUsecase
from internal.modules.hello.service import HelloService, create_hello_handler


@dataclass(slots=True)
class RuntimeContainer:
    settings: Settings
    engine: AsyncEngine | None
    session_factory: async_sessionmaker[AsyncSession] | None
    hello_service: HelloService


class AppRuntime:
    def __init__(self, settings: Settings) -> None:
        self._settings = settings
        self._container: RuntimeContainer | None = None

    def startup(self) -> RuntimeContainer:
        if self._container is not None:
            return self._container

        dsn = self._settings.postgres.dsn
        engine = None
        session_maker = None
        if dsn:
            engine = create_async_engine(
                dsn,
                pool_size=self._settings.postgres.pool_size,
                max_overflow=self._settings.postgres.max_overflow,
                pool_pre_ping=True,
            )
            session_maker = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

        # Hello module injection
        hello_usecase = HelloUsecase()
        hello_service = create_hello_handler(hello_usecase)

        self._container = RuntimeContainer(
            settings=self._settings,
            engine=engine,
            session_factory=session_maker,
            hello_service=hello_service,
        )
        return self._container

    async def shutdown(self) -> None:
        if self._container is None:
            return
        if self._container.engine:
            await self._container.engine.dispose()
        self._container = None
