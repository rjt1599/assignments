import { useState } from "react";

export function TodoBar({addTodo}) {  

    const[title, setTitle] = useState('');
    const[description,setDescription] = useState('');

    function handleClick()
    {
        addTodo(title, description);
    }

    return <>
    <div>
      <input onChange = {e => setTitle(e.target.value)} type="text" placeholder='text' id='title' />
    </div>
    <div>
      <input onChange = {e => setDescription(e.target.value)} type="text" placeholder='description' id='description' />
    </div>
    <button onClick={handleClick}>Add Todo</button>
    </>
}