import { TodoBase, TodoResolved } from "./types";

export const postTodo = async (todoBody: TodoBase): Promise<TodoResolved | undefined> => {
    const response = await fetch("http://localhost:8080/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todoBody)
    });
    if (response.ok) {
      const incoming_todo = await response.json();
      return incoming_todo;
    } else {
      throw new Error("Couldn't post todo!");
    }
  }