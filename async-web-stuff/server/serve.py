
import os
import sys

import uvicorn
from dataclasses import dataclass


@dataclass
class ConnectionParams:
    url: str
    port: int


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
