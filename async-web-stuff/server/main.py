import os
import sys

from typing import Union
from dataclasses import dataclass

import uvicorn

from fastapi import FastAPI

app = FastAPI()


@dataclass
class ConnectionParams:
    url: str
    port: int


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


def serve(cp: ConnectionParams):
    uvicorn.run(
        'main:app',
        host=cp.url,
        port=cp.port,
        reload=True
    )


def main():
    port = os.environ.get('PORT') or "8080"
    url = (len(sys.argv) == 2 and sys.argv[1]) or '0.0.0.0'
    cp = ConnectionParams(
        url=url,
        port=int(port)
    )
    serve(cp)


if __name__ == "__main__":
    main()
