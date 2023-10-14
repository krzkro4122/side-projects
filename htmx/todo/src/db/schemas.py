from pydantic import BaseModel


class TodoBase(BaseModel):
    title: str

class TodoEdit(TodoBase):
    ...
