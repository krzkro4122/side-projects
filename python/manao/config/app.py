from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from api import todo
from config.db import init_database


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_database()
    yield


def get_application():
    app = FastAPI(lifespan=lifespan, debug=True)

    origins = [
        "http://localhost",
        "http://127.0.0.1",
    ]

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.mount("/static", StaticFiles(directory="templates"), name="static")

    app.include_router(todo.router, prefix="/todo", tags=["todo"])

    return app


app = get_application()

templates = Jinja2Templates(directory="templates")
