from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    """The single SQLAlchemy metadata registry for all application models."""

