import datetime
from pydantic import BaseModel, ConfigDict


class TodoBase(BaseModel):
    content: str
    model_config = ConfigDict(from_attributes=True)


class TodoEdit(TodoBase):
    ...


class TodoCreate(TodoBase):
    ...


class TodoResponse(TodoBase):
    id: str
    created_at: datetime.datetime
