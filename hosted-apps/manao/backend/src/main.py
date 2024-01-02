import os
import logging

from typing import Annotated
from logging.config import dictConfig

from fastapi import FastAPI, Form, Request, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from fastapi.params import Depends
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi.templating import Jinja2Templates

from .log_config import LogConfig
from src.db.engine import (
	DATABASE_FILE_NAME,
	DATABASE_FILE_PATH,
	get_db,
	init_models
)
from src.db.models import Todo
from src.db.schemas import TodoCreate, TodoEdit, TodoResponse

dictConfig(LogConfig().dict())
logger = logging.getLogger("todo")

app = FastAPI(debug=True)

origins = [
	"http://localhost",
	"http://127.0.0.1",
	"http://localhost:8000",
	"http://localhost:8080",
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

app.mount("/static", StaticFiles(directory="src/templates/static"), name="static")

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
async def root(request: Request):
	return templates.TemplateResponse("index.html", {"request": request})


@app.get("/todo", response_model=list[TodoResponse])
async def get_todos(
	db_session: AsyncSession = Depends(get_db),
):
	return await Todo.find_all(
		db_session=db_session
	)


@app.get("/todo/{todo_id}", response_model=TodoResponse)
async def get_todo(
	todo_id: str,
	db_session: AsyncSession = Depends(get_db),
):
	return await Todo.find_by_id(
		db_session=db_session,
		id=todo_id,
	)


@app.post("/todo", response_model=TodoResponse)
async def post_todo(
	payload: TodoCreate,
	db_session: AsyncSession = Depends(get_db),
):
	new_todo: Todo = Todo(**payload.dict())
	await new_todo.save(db_session)
	await db_session.refresh(new_todo)
	return new_todo


@app.delete("/todo/{todo_id}", response_model=TodoResponse)
async def delete_todo(
	todo_id: str,
	db_session: AsyncSession = Depends(get_db),
):
	todo = await Todo.find_by_id(
		db_session=db_session,
		id=todo_id,
	)
	await Todo.delete(
		todo,
		db_session=db_session
	)
	return todo


@app.patch("/todo/{todo_id}", response_model=TodoResponse)
async def edit_todo(
	todo_id: str,
	payload: TodoEdit,
	db_session: AsyncSession = Depends(get_db),
):
	todo = await Todo.find_by_id(
		db_session=db_session,
		id=todo_id,
	)
	todo.title = payload.title
	await Todo.save(
		todo,
		db_session=db_session
	)
	await db_session.refresh(todo)
	return todo


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text was: {data}")
