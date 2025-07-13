import { TodoBase, TodoResolved } from "./types";

const BASE_URL = "http://localhost:5002/api/todo";

export const getTodos = async (): Promise<TodoResolved[] | undefined> => {
    const response = await fetch(`${BASE_URL}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
    if (response.ok) {
        const incoming_todos = await response.json();
        return incoming_todos.data;
    } else {
        throw new Error("Couldn't get todos!");
    }
}

export const postTodo = async (todoBody: TodoBase): Promise<TodoResolved | undefined> => {
    const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todoBody)
    });
    if (response.ok) {
        const incoming_todo = await response.json();
        return incoming_todo.data;
    } else {
        throw new Error("Couldn't post todo!");
    }
}

export const deleteTodo = async (todoId: number): Promise<boolean> => {
    try {
        const response = await fetch(`${BASE_URL}/${todoId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (response.ok) {
            return true;
        } else {
            throw new Error("Couldn't delete todo!");
        }
    } catch (error) {
        console.error("Error deleting todo:", error);
        return false;
    }
}

export const toggleTodo = async (todoId: number): Promise<boolean> => {
    try {
        const response = await fetch(`${BASE_URL}/${todoId}/toggle`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (response.ok) {
            return true;
        } else {
            throw new Error("Couldn't toggle todo!");
        }
    } catch (error) {
        console.error("Error toggling todo:", error);
        return false;
    }
}
