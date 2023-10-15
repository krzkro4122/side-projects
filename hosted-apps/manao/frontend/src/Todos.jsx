import Todo from "./Todo"

function Todos({ todos }) {
    return (
        <div id="todos" className="grid gap-1 mt-2">
            {todos.forEach((todo) => <Todo todo />)}
        </div>
    )
}
export default Todos
