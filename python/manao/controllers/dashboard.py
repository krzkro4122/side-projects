import logging

from fastapi import APIRouter, Request
from fastapi.params import Depends
from fastapi.responses import HTMLResponse
from sqlalchemy.ext.asyncio import AsyncSession

from config.db import get_db
from lib.todo import (
    create_todo,
    delete_todo,
    get_all_todos,
    get_todo_by_id,
    update_todo,
    templates,
)


logger = logging.getLogger("prefix")

router = APIRouter(prefix="/dashboard")


@router.get("", response_class=HTMLResponse)
async def all_todos(request: Request, db_session: AsyncSession = Depends(get_db)):  # type: ignore
    todos = await get_all_todos(db_session)
    return templates.TemplateResponse(
        "dashboard.html",
        {
            "request": request,
            "todos": todos,
        },
    )


# @router.get("/{todo_id}", response_model=TodoResponse)
# async def read_todo(
#     todo_id: str,
#     db_session: AsyncSession = Depends(get_db),  # type: ignore
# ):
#     return TodoResponse(**(await get_todo_by_id(todo_id, db_session)).as_dict())


# @router.post("", response_model=TodoResponse)
# async def _create_todo(
#     payload: TodoCreate,
#     db_session: AsyncSession = Depends(get_db),  # type: ignore
# ):
#     return TodoResponse(**(await create_todo(payload, db_session)).as_dict())


# @router.delete("/{todo_id}", response_model=TodoResponse)
# async def _delete_todo(
#     todo_id: str,
#     db_session: AsyncSession = Depends(get_db),  # type: ignore
# ):
#     return TodoResponse(**(await delete_todo(todo_id, db_session)).as_dict())


# @router.patch("/{todo_id}", response_model=TodoResponse)
# async def _update_todo(
#     todo_id: str,
#     payload: TodoEdit,
#     db_session: AsyncSession = Depends(get_db),  # type: ignore
# ):
#     return TodoResponse(**(await update_todo(todo_id, payload.content, db_session)).as_dict())


# {% block title %}Manao - your TODOs{% endblock %}

# {% block heading %}Manao - your TODOs{% endblock %}

# {% block content %}
#     <div class="flex justify-center">
#         {% if todos|length != 1 %}
#             <ul class="menu bg-base-199 w-2/3 rounded-box">
#                 {% for todo in todos %}
#                     <li class="todo collapse">
#                         <h4><b>{{ todo.content }}</b></h3>
#                     </li>
#                 {% endfor %}
#             </ul>

#         {% else %}
#             <h2>No TODOs, nice!</h1>

#         {% endif %}
#     </div>

#     <script>

#     </script>
# {% endblock %}
