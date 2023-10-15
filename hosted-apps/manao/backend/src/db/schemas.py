from pydantic import BaseModel


class TodoBase(BaseModel):
    title: str

class TodoEdit(TodoBase):
    ...

class TodoResponse(TodoBase):
    id: str