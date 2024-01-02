import uuid
import datetime

from sqlalchemy import Column, DateTime, String

from config.db import Base


class Todo(Base):
	__tablename__ = "todos" # type: ignore

	id: Column[str] | str = Column(
		'id',
		String(length=36),
		default=lambda: str(uuid.uuid4()),
		primary_key=True
	)
	created_at: Column[datetime.datetime] | datetime.datetime = Column(
		DateTime,
		nullable=False,
	)
	content: Column[str] | str = Column(
		String,
		nullable=False,
	)

	def __init__(self, content):
		self.id = str(uuid.uuid4())
		self.created_at = datetime.datetime.now()
		self.content = content
