import React, { useState } from 'react';

import { Todos } from './Todos';
import { AddTodo } from './AddTodo';
import { TodoBase, TodoResolved } from '../types';
import { postTodo } from '../todoActions';
import manaoLogo from '../assets/manao.svg'

import '../styles/app.css';

export const App = () => {
  const [todos, setTodos] = useState<TodoResolved[]>([]);

  const addTodo = async (todo: TodoBase) => {
    const newTodo = await postTodo(todo);
    if (newTodo) {
      setTodos([...todos, newTodo]);
    }
  }

  return (
    <div className="page">
      <h1 className="title">Manao<img src={manaoLogo} alt="Manao icon"></img></h1>
        <AddTodo addTodoAction={addTodo}></AddTodo>
        <Todos todos={todos}></Todos>
    </div>
  )
}
