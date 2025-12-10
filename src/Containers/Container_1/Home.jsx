import React from 'react'
import "./style.css"
import logo from "./images/logo.svg"


    // function Cross() {

    //     let Cross = document.getElementById("Cross");

    //     Cross.style.backgroundColor = "#a9bec8"

    // }
export default function Home() {

    return (

        <div className='main'>

            <div className="parent_1">

                <img src={logo} alt="LOGO" />

            </div>

            <div className="parent_2">


                <div className='chlid_1'>

                    <h2>PICK PLAYER 1'S SIGN</h2>

                </div>

                <div className='chlid_2'>

                    <div className="grand_child_1" id='Cross'>X</div>
                    <div className="grand_child_2">O</div>

                </div>

                <div className='chlid_3'>

                    <h3>REMEMBER: X GOES FIRST</h3>

                </div>

            </div>

            <div className="parent_3">

                <button>START GAME</button>

            </div>

        </div>

    )
}
