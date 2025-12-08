import { useState } from 'react'
import "./style.css"

export default function Square() {

    const [value, setValue] = useState(null);

    function handleClick() {
        setValue("X")
    }

    return (

        <div className='main_Botton'>

            <button className="square" onClick={handleClick}>{value}</button>

        </div>

    )
}
