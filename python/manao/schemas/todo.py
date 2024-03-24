import datetime
from pydantic import BaseModel, ConfigDict


class TodoBase(BaseModel):
    content: str


class TodoEdit(TodoBase):
    ...


class TodoCreate(TodoBase):
    ...


class TodoResponse(TodoBase):
    id: str
    created_at: datetime.datetime
