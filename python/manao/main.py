from logging import getLogger

from fastapi import Request
from fastapi.responses import HTMLResponse

from config.app import app, templates
from config.db import init_database


logger = getLogger("main")


# TODO - move
@app.on_event("startup")
async def startup():
	await init_database()


@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
	return templates.TemplateResponse("index.html", {"request": request})
