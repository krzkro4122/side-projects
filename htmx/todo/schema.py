import datetime
from pydantic import BaseModel


class Todo(BaseModel):
    title: str

class TodoCreate(Todo):
    pass

class TodoResponse(Todo):
    created_at: datetime.datetime
