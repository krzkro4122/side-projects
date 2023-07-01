import requests
import asyncio

JSON = int | str | bool | None | dict[str, "JSON"] | list["JSON"]
JSONObject = dict[str, JSON]
JSONList = list[JSON]


def get(url: str) -> JSONObject:
    response = requests.get(url)
    return response.json()


async def get_async(url: str) -> JSONObject:
    return await asyncio.to_thread(get, url)
