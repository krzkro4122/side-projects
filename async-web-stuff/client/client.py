import http_requests
import asyncio
import time
import sys


async def get_index(url, port):
    result = await http_requests.get_async(f"{url}:{port}")
    print(result)


async def get_item(url, port, item=1, q=1):
    result = await http_requests.get_async(f"{url}:{port}/items/{item}?q={q}")
    print(result)


async def get_both(url, port):
    await get_index(url, port)
    await asyncio.sleep(2)
    await get_item(url, port)


async def main():
    url = sys.argv[1]
    port = sys.argv[2]
    await asyncio.gather(get_both(url, port), get_both(url, port))


if __name__ == "__main__":
    asyncio.run(main())
