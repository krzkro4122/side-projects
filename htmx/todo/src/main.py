import os

from typing import Annotated
import uuid

from fastapi import FastAPI, Request, Form
from fastapi.params import Depends
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession

from src.db.engine import (
	DATABASE_FILE_NAME,
	DATABASE_FILE_PATH,
	get_db,
	init_models
)
from src.db.models import Todo
from src.db.schemas import TodoEdit


app = FastAPI()

origins = [
	"http://localhost",
	"http://localhost:8000",
	"http://localhost:5500",
]
app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

app.mount("/assets", StaticFiles(directory="src/assets"), name="assets")

templates = Jinja2Templates(directory="src/templates")


async def ok(request: Request, db_session: AsyncSession):
	return templates.TemplateResponse(
		"todo.html",
		{
			"request": request,
			"todos": await Todo.find_all(db_session=db_session),
		}
	)


@app.on_event("startup")
async def startup():
	if not os.path.exists(DATABASE_FILE_PATH + DATABASE_FILE_NAME):
		print("Initializing the db...")
		if not os.path.exists(DATABASE_FILE_PATH):
			os.mkdir(DATABASE_FILE_PATH)
		await init_models()
	else:
		print("Db already exists. Connecting...")


@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
	return templates.TemplateResponse(
		"input.html",
		{
			"request": request
		}
	)


@app.get("/todo", response_class=HTMLResponse)
async def get_todos(
	request: Request,
	db_session: AsyncSession = Depends(get_db),
):
	return await ok(request, db_session)


@app.post("/todo", response_class=HTMLResponse)
async def post_todo(
	request: Request,
	todo_title: Annotated[str, Form()],
	db_session: AsyncSession = Depends(get_db),
):
	new_todo = Todo(title=todo_title)
	await new_todo.save(db_session)
	return await ok(request, db_session)


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
	return await ok(request, db_session)


# @app.patch("/todo/{todo_id}", response_class=HTMLResponse)
# async def edit_todo(
# 	request: Request,
# 	todo_id: str,
# 	payload: TodoEdit,
# 	db_session: AsyncSession = Depends(get_db),
# ):
# 	todo_to_delete = await Todo.find_by_id(
# 		db_session=db_session,
# 		id=todo_id,
# 	)
# 	todo_to_delete.title = payload.title
# 	return await ok(request, db_session)
