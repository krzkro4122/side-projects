import json
import logging

from fastapi import APIRouter
from fastapi.params import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from config.db import get_db
from lib.todo import (
    create_todo,
    delete_todo,
    get_all_todos,
    get_todo_by_id,
    update_todo,
)
from schemas.todo import TodoCreate, TodoEdit, TodoResponse


logger = logging.getLogger("todo")

router = APIRouter(prefix="/api")


@router.get("", response_model=list[TodoResponse])
async def read_all_todos(db_session: AsyncSession = Depends(get_db)):  # type: ignore
    todos = await get_all_todos(db_session)
    todo_response = [TodoResponse(**(todo.as_dict())) for todo in todos]
    return todo_response


@router.get("/{todo_id}", response_model=TodoResponse)
async def read_todo(
    todo_id: str,
    db_session: AsyncSession = Depends(get_db),  # type: ignore
):
    return TodoResponse(**(await get_todo_by_id(todo_id, db_session)).as_dict())


@router.post("", response_model=TodoResponse)
async def _create_todo(
    payload: TodoCreate,
    db_session: AsyncSession = Depends(get_db),  # type: ignore
):
    return TodoResponse(**(await create_todo(payload, db_session)).as_dict())


@router.delete("/{todo_id}", response_model=TodoResponse)
async def _delete_todo(
    todo_id: str,
    db_session: AsyncSession = Depends(get_db),  # type: ignore
):
    return TodoResponse(**(await delete_todo(todo_id, db_session)).as_dict())


@router.patch("/{todo_id}", response_model=TodoResponse)
async def _update_todo(
    todo_id: str,
    payload: TodoEdit,
    db_session: AsyncSession = Depends(get_db),  # type: ignore
):
    return TodoResponse(**(await update_todo(todo_id, payload.content, db_session)).as_dict())
