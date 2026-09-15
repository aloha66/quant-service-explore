from __future__ import annotations

import asyncio
import importlib
import os
from pathlib import Path
from logging.config import fileConfig

from alembic import context
from sqlalchemy import engine_from_config, pool
from sqlalchemy.ext.asyncio import async_engine_from_config

from internal.data.base import Base


def _load_model_modules() -> None:
    modules_root = Path(__file__).resolve().parent.parent / "internal" / "modules"
    for model_file in modules_root.glob("*/data/repo/models.py"):
        module_path = ".".join(model_file.relative_to(modules_root.parent.parent).with_suffix("").parts)
        importlib.import_module(module_path)

config = context.config
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

_load_model_modules()
target_metadata = Base.metadata


def _get_runtime_url() -> str:
    x_args = context.get_x_argument(as_dictionary=True)
    url = x_args.get("dsn") or os.getenv("POSTGRES_DSN", "") or config.get_main_option("sqlalchemy.url")
    if not url:
        raise RuntimeError(
            "Database DSN is required for Alembic migrations. "
            "Pass -x dsn=<postgresql+...> or set sqlalchemy.url in alembic.ini."
        )
    return url


def run_migrations_offline() -> None:
    url = _get_runtime_url()
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    section = config.get_section(config.config_ini_section, {})
    url = _get_runtime_url()
    section["sqlalchemy.url"] = url

    if url.startswith("postgresql+asyncpg://"):
        asyncio.run(_run_migrations_online_async(section))
        return

    connectable = engine_from_config(section, prefix="sqlalchemy.", poolclass=pool.NullPool)
    with connectable.connect() as connection:
        context.configure(connection=connection, target_metadata=target_metadata)

        with context.begin_transaction():
            context.run_migrations()


async def _run_migrations_online_async(section: dict[str, str]) -> None:
    connectable = async_engine_from_config(section, prefix="sqlalchemy.", poolclass=pool.NullPool)
    async with connectable.connect() as connection:
        await connection.run_sync(_do_run_migrations)
    await connectable.dispose()


def _do_run_migrations(connection: object) -> None:
    context.configure(connection=connection, target_metadata=target_metadata)
    with context.begin_transaction():
        context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
