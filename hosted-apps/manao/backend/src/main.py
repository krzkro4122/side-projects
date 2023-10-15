import os
import logging

from typing import Annotated
from logging.config import dictConfig

from fastapi import FastAPI, Request, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.params import Depends
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from sqlalchemy.ext.asyncio import AsyncSession

from .log_config import LogConfig
from src.db.engine import (
	DATABASE_FILE_NAME,
	DATABASE_FILE_PATH,
	get_db,
	init_models
)
from src.db.models import Todo
from src.db.schemas import TodoEdit, TodoResponse

dictConfig(LogConfig().dict())
logger = logging.getLogger("todo")

app = FastAPI(debug=True)

origins = [
	"http://localhost",
	"http://localhost:8000",
	"http://localhost:5500",
	"http://localhost:5173",
]
app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="src/static"), name="static")

templates = Jinja2Templates(directory="src/templates")


@app.on_event("startup")
async def startup():
	if not os.path.exists(DATABASE_FILE_PATH + DATABASE_FILE_NAME):
		logger.debug("Initializing the db...")
		if not os.path.exists(DATABASE_FILE_PATH):
			os.mkdir(DATABASE_FILE_PATH)
		await init_models()
	else:
		logger.debug("Db already exists. Connecting...")


@app.get("/", response_class=HTMLResponse)
async def root(request: Request, db_session: AsyncSession = Depends(get_db)):
	with open('src/static/index.html') as file:
		content = file.read()
		return HTMLResponse(content=content)


@app.get("/todo", response_model=TodoResponse)
async def get_todos(
	db_session: AsyncSession = Depends(get_db),
):
	return await Todo.find_all(db_session=db_session)


@app.post("/todo", response_model=TodoResponse)
async def post_todo(
	request: Request,
	todo_title: Annotated[str, Form()],
	db_session: AsyncSession = Depends(get_db),
):
	new_todo = Todo(title=todo_title)
	await new_todo.save(db_session)
	return new_todo


@app.delete("/todo/{todo_id}", response_class=HTMLResponse)
async def delete_todo(
	request: Request,
	todo_id: str,
	db_session: AsyncSession = Depends(get_db),
):
	todo_to_delete = await Todo.find_by_id(
		db_session=db_session,
		id=todo_id,
	)
	await Todo.delete(todo_to_delete, db_session=db_session)
	# return await ok(request, db_session)


@app.patch("/todo/{todo_id}", response_class=HTMLResponse)
async def edit_todo(
	request: Request,
	todo_id: str,
	payload: TodoEdit,
	db_session: AsyncSession = Depends(get_db),
):
	todo_to_delete = await Todo.find_by_id(
		db_session=db_session,
		id=todo_id,
	)
	todo_to_delete.title = payload.title
	# return await ok(request, db_session)
