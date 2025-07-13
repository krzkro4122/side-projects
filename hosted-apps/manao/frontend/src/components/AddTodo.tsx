import React from "react";

import { TodoBase } from "../types";

import '../styles/addTodo.css';

interface AddTodoProps {
    addTodoAction: (todo: TodoBase) => void;
}

export const AddTodo = ({ addTodoAction }: AddTodoProps) => {

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const title = formData.get("title") as string;
        addTodoAction({ title, completed: false });
      }

    return (
        <form id="addTodo" onSubmit={handleSubmit}>
          <input id="input" form="addTodo" name="title" role="textbox" placeholder="New Todo" autoComplete="off" autoFocus></input>
          <button id="button" type="submit">+</button>
      </form>
    )
}
