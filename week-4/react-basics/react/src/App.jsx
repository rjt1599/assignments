import { useState } from 'react'

import { TodoBar } from './TodoBar'
import { TodoList } from './TodoList'

function App() {

  const [todos, setTodos] = useState([]);

    function addTodo(title, description)
    {
        setTodos((currentTodos) => {
            return [...currentTodos, {id: crypto.randomUUID(),title, description}]
        })
    } 

  return (
    <>
    <h1>Todo App</h1>
    <TodoBar addTodo={addTodo}/>
    <TodoList todos = {todos} />
    </>
  )
}

export default App
