import pkg_resources
from typing import Union

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse

app = FastAPI()
app.mount("/static", StaticFiles(directory=pkg_resources.resource_filename(__name__, 'static')), name="static")


@app.get("/")
async def read_root():
    return HTMLResponse(pkg_resources.resource_string(__name__, 'static/index.html'), 418)


@app.get("/items/{item_id}")
async def read_item(item_id: int, query: Union[str, None] = None):
    return {"item_id": item_id, "query": query}
