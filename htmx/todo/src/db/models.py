import uuid
import datetime
from pydantic import BaseModel

from sqlalchemy import UUID, Column, DateTime, String

from .engine import Base


class Todo(Base):
    __tablename__ = "todos"

    id: Column[String] | str = Column(
        'id',
        String(length=36),
        default=lambda: str(uuid.uuid4()),
        primary_key=True
    )
    created_at: Column[DateTime] | datetime.datetime = Column(
        DateTime,
        nullable=False,
    )
    title: Column[String] | str = Column(
        String,
        nullable=False,
    )

    def __init__(self, title):
        self.id = str(uuid.uuid4())
        self.created_at = datetime.datetime.now()
        self.title = title
