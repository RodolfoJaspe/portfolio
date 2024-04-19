import React from "react";
import "../styles/Toggler.css";

export function Toggler({focus, setFocus}) {

    // return (
    //     <>
    //         <ambientLight intensity={1}/>
    //         <pointLight 
    //             color="#f6f3ea" 
    //             position={[10, 2, 10]} 
    //             intensity={3}/>
    //         <mesh position={[0,0,0]} onClick={()=> setFocus(!focus)}>
    //             <sphereGeometry args={[3, 64 ,64]}/>
    //         </mesh>
    //     </>
    // )

    return (
        <div className='toggler'>
            <h2>Press for</h2>
            <button onClick={() => setFocus(!focus)}>

            </button>
            <h2>{focus?"Projects":"Playground"}</h2>
        </div>
    )
}