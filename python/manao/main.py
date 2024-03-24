from logging import getLogger

from fastapi import Request
from fastapi.responses import HTMLResponse

from config.app import app
from lib.todo import templates


logger = getLogger("main")


@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
