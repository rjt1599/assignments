import { TodoItem } from "./TodoItem"

export function TodoList({todos}) {
    
    return <>
        <div id='container'>
            {
                todos.map(todo => {
                    return <TodoItem title={todo.title} description={todo.description} key = {todo.id}/>
                })
            }
        </div>
    </>
}