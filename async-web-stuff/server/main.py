from typing import Union

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

import models.item
from db.database import SessionLocal, engine

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def read_root(request: Request):
    return templates.TemplateResponse(
        "hello.html",
        context={
            "request": request,
            "hello": "Krill",
            "additional": "Krill yourself!",
        }
    )


@app.get("/items/{id}")
def read_item(request: Request, id: str):

    item = models.item.Item()

    return templates.TemplateResponse(
        "item.html",
        context={
            "name": name,
            "times": times_clicked,
            "id": id
        }
    )
