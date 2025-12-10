import * as React from 'react';
import { Link } from 'react-router-dom';

import "./style.css"
import logo from "./images/logo.svg"
import Tise from "../Container_2/Tise"

export default function Home() {

    const cross = () => {

        let x = document.getElementById("x");
        let o = document.getElementById("o");

        x.style.backgroundColor = "#a9bec8";
        o.style.backgroundColor = "#1a2b33";
        x.style.color = "#1f3641";
        o.style.color = "#a9bec8";

        console.log(x.innerHTML);

    }

    const zero = () => {

        let o = document.getElementById("o");
        let x = document.getElementById("x");

        o.style.backgroundColor = "#a9bec8";
        x.style.backgroundColor = "#1a2b33";
        o.style.color = "#1f3641";
        x.style.color = "#a9bec8";

        console.log(o.innerHTML);


    }

    const startBtn = () => {

        let start = document.getElementById("start");

        start.classList.toggle("moved");
        window.location.href = { Tise };

    }

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

                    <div className="grand_child_1" id='x' onClick={cross}>X</div>
                    <div className="grand_child_2" id='o' onClick={zero}>O</div>

                </div>

                <div className='chlid_3'>

                    <h3>REMEMBER: X GOES FIRST</h3>

                </div>

            </div>

            <div className="parent_3" id='start' onClick={startBtn}>

                <button role='button'><Link to="/Tise">START GAME</Link></button>

            </div>

        </div>

    )
}
