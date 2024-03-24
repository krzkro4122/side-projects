from typing import Optional

from fastapi.templating import Jinja2Templates

from models.todo import Todo
from sqlalchemy.ext.asyncio.session import AsyncSession

from schemas.todo import TodoCreate


async def get_todo_by_id(todo_id: str, db_session: AsyncSession) -> Optional[Todo]:
    return await Todo.find_by_id(db_session, todo_id)


async def get_all_todos(db_session: AsyncSession) -> list[Todo]:
    return await Todo.find_all(db_session)


async def create_todo(body: TodoCreate, db_session: AsyncSession):
    new_todo: Todo = Todo(**body.dict())
    await new_todo.save(db_session)
    return new_todo


async def delete_todo(todo_id: str, db_session: AsyncSession) -> Todo:
    todo = await Todo.find_by_id(
        id=todo_id,
        db_session=db_session,
    )
    await Todo.delete(todo, db_session)
    return todo


async def update_todo(todo_id: str, content: str, db_session: AsyncSession):
    todo = await Todo.find_by_id(
        db_session=db_session,
        id=todo_id,
    )
    todo.content = content
    await Todo.save(todo, db_session=db_session)
    return todo


templates = Jinja2Templates(directory="templates")