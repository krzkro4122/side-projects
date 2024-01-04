from sqlalchemy.ext.asyncio import AsyncSession

from models.todo import Todo


async def get_all_todos(db_session):
    return await Todo.find_all(db_session)


async def change_content(todo_id: str, content: str, db_session: AsyncSession):
    todo = await Todo.find_by_id(
        db_session=db_session,
        id=todo_id,
    )
    todo.content = content
    await Todo.save(todo, db_session=db_session)
    return todo
