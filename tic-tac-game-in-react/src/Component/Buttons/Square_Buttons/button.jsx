import { useState } from 'react'
import "./style.css"

export default function Square({ value, onSquareClick }) {

    return (

        <div className='main_Botton'>

            <button className="square"  onClick={onSquareClick}>{value}</button>

        </div>

    )
}
