from logging import getLogger

from fastapi import Depends, Request
from fastapi.responses import HTMLResponse
from sqlalchemy.ext.asyncio import AsyncSession

from config.app import app, templates
from config.db import get_db, init_database
from utils.todo import get_all_todos


logger = getLogger("main")


@app.on_event("startup")
async def startup():
    await init_database()


@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/dashboard", response_class=HTMLResponse)
async def render_dashboard(
    request: Request,
    db_session: AsyncSession = Depends(get_db),
):
    todos = await get_all_todos(db_session)
    return templates.TemplateResponse(
        "dashboard.html",
        {
            "request": request,
            "todos": todos,
        },
    )
