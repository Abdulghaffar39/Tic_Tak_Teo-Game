import React from 'react'
import Square from "../../Buttons/Square_Buttons/button"
import "./style.css"

export default function index() {
    return (

        <main>

            <div class="container_1">

                <div>

                    <h1>TIC TAK TEO</h1>

                </div>


                <div className='main_Botton'>

                    <div className="board-row">
                        <Square />
                        <Square />
                        <Square />
                    </div>

                    <div className="board-row">
                        <Square />
                        <Square />
                        <Square />
                    </div>

                    <div className="board-row">
                        <Square />
                        <Square />
                        <Square />
                    </div>


                </div>

                <div class="game">

                    <button class="reset_btn">Reset</button>

                </div>

            </div>


        </main>
    )
}
