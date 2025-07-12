import React from "react";

import { TodoResolved } from "../types"
import { Todo } from "./Todo"

interface TodosProps {
    todos: TodoResolved[];
}

export const Todos = ({ todos }: TodosProps) => {

    const getTodos = () => {
        return todos.map((todo) => <Todo todo={todo} key={todo.id} />)
    }

    return (
        <div id="todos" className="todos-container">
            {getTodos()}
        </div>
    )
}
