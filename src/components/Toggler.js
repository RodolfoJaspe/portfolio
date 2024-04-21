import React from "react";
import "../styles/Toggler.css";

export function Toggler({focus, setFocus}) {
    return (
        <div className='toggler'>
            <h2>Press for</h2>
            <button onClick={() => setFocus(!focus)}>

            </button>
            <h2>{focus?"Projects":"Playground"}</h2>
        </div>
    )
}