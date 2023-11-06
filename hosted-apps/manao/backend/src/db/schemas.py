import datetime
from pydantic import BaseModel


class TodoBase(BaseModel):
    title: str
    
    class Config:
        orm_mode = True

class TodoEdit(TodoBase):
    ...

class TodoCreate(TodoBase):
    ...

class TodoResponse(TodoBase):
    id: str
    created_at: datetime.datetime
