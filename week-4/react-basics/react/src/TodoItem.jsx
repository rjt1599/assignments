import { useState } from "react"

export function TodoItem({title, description})
{

    const [buttonStatus, setButtonStatus] = useState('Mark Done')

    return <>
    <div>
        <span>{title} </span>
        <span>{description} </span>
    </div>
    <button onClick={() => setButtonStatus("Done!")}>{buttonStatus}</button>
    </>
}