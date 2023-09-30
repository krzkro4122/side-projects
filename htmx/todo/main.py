from dataclasses import dataclass
from time import sleep
from typing import Annotated
from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.templating import Jinja2Templates

from schema import TodoCreate

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

templates = Jinja2Templates(directory="templates")

@dataclass
class Todo():
	title: str
	index: int

todos: list[Todo] = []
index = 0

@app.get(
	"/",
	response_class=HTMLResponse
)
async def root(request: Request):
	return templates.TemplateResponse(
		"dashboard.html",
		{
			"request": request
		}
	)


@app.get("/todo", response_class=HTMLResponse)
async def get_todos(request: Request):
	return templates.TemplateResponse(
		"todo.html",
		{
			"request": request,
			"todos": todos,
		}
	)


@app.post(
	"/todo",
	response_class=HTMLResponse
)
async def post_todo(
	request: Request,
	todo_title: Annotated[str, Form()],
):
	global index
	todo = Todo(todo_title, index)
	index += 1
	todos.append(todo)
	return templates.TemplateResponse(
		"todo.html",
		{
			"request": request,
			"todos": todos,
		}
	)

@app.delete(
	"/todo/{todo_index}",
	response_class=HTMLResponse
)
async def post_todo(
	request: Request,
	todo_index: int,
):
	global index
	print(todos)
	for todo in todos:
		if todo.index == todo_index:
			todos.pop(todos.index(todo))
			return templates.TemplateResponse(
				"todo.html",
				{
					"request": request,
					"todos": todos,
				}
			)
