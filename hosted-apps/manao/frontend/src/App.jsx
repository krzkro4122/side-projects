import { useEffect, useState } from 'react';
import Todos from './Todos';
import todoLogo from './static/todo.svg'


function App() {
  const [todos, setTodos] = useState([]);
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  async function postTodo(title) {
    const response = await fetch("http://localhost:8080/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.ok) {
      const incoming_todo = await response.json();
      setTodos([...todos, incoming_todo]);
    } else {
      alert("Couldn't post!");
    }
  }

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8080/todo");
      if (response.ok) {
        const incoming_todos = await response.json();
        setTodos(incoming_todos.todos);
      } else {
        alert("Couldn't fetch!");
      }
    })()
  }, [])

  return (
    <div id="content">
      <form id="form" className="absolute gap-2 left-20 top-20">
        <h1 id="title" className="mb-1 text-5xl font-bold indicator shadow-white">TODOs<img className="mt-1 ml-2" src={todoLogo} alt="todo icon"></img></h1>
        <div className="flex items-center gap-2 mb-1">
          <span id="input"
            className="p-3 px-4 text-lg border-2 resize-none w-52 textarea h-14 hover:resize textarea-bordered textarea-primary"
            name="todo_title" role="textbox" placeholder="Title" autoComplete="off" autoFocus></span>
          <button id="button" onClick={() => postTodo()} className="btn btn-primary btn-sm">
            +
          </button>
          <span className="relative htmx-indicator -right-2 loading loading-spinner loading-lg"></span>
        </div>

        <Todos todos={todos}></Todos>
      </form>
    </div>
  )
}

export default App
