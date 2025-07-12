import React from "react";
import { TodoResolved } from "../types";

interface TodoProps {
  todo: TodoResolved;
}

export const  Todo = ({ todo }: TodoProps) => {
  return (
    <div className="todo-item-container">
        <h2 className={"todo-item-title" + (todo.completed ? " todo-item-completed" : "")}>{todo.title}</h2>
        <p className="todo-item-date">{todo.createdAt.toLocaleString()}</p>
        <p className="todo-item-date">{todo.updatedAt.toLocaleString()}</p>
    </div>
  )
}
