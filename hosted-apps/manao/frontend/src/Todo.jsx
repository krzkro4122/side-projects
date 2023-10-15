function Todo() {

  return (
    <div className="flex items-center gap-2">
        <div className="box-content justify-between max-w-4xl p-1.5 px-2 font-mono break-words border-2 border-gray-700 border-solid rounded-md hover:bg-gray-800">"Siema"</div>
        <button className="clickable btn btn-outline btn-sm w-8 opacity-70" title="Edit entry"><span>✏️</span></button>
        <button className="clickable btn btn-error btn-outline btn-sm w-8 opacity-70" title="Delete entry"><span>🗑️</span></button>
    </div>
  )
}
export default Todo
