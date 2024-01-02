import logging

from fastapi import APIRouter
from fastapi.params import Depends
from sqlalchemy.ext.asyncio import AsyncSession

from config.db import get_db
from models.todo import Todo
from shemas.todo import TodoCreate, TodoEdit, TodoResponse
from utils.todo import change_content


logger = logging.getLogger("todo")

router = APIRouter()


@router.get("", response_model=list[TodoResponse])
async def get_todos(db_session: AsyncSession = Depends(get_db)): # type: ignore
	return await Todo.find_all(db_session)


@router.get("{todo_id}", response_model=TodoResponse)
async def get_todo(
	todo_id: str,
	db_session: AsyncSession = Depends(get_db), # type: ignore
):
	return await Todo.find_by_id(
		id=todo_id,
		db_session=db_session,
	)


@router.post("", response_model=TodoResponse)
async def post_todo(
	payload: TodoCreate,
	db_session: AsyncSession = Depends(get_db), # type: ignore
):
	new_todo: Todo = Todo(**payload.dict())
	await new_todo.save(db_session)
	return new_todo


@router.delete("{todo_id}", response_model=TodoResponse)
async def delete_todo(
	todo_id: str,
	db_session: AsyncSession = Depends(get_db), # type: ignore
):
	todo = await Todo.find_by_id(
		id=todo_id,
		db_session=db_session,
	)
	await Todo.delete(todo, db_session)
	return todo


@router.patch("{todo_id}", response_model=TodoResponse)
async def edit_todo(
	todo_id: str,
	payload: TodoEdit,
	db_session: AsyncSession = Depends(get_db), # type: ignore
):
	return await change_content(
		todo_id,
		payload.content,
		db_session
	)
