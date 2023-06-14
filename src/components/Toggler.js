import React from "react";

export function Toggler({focus, setFocus}) {

    return (
        <>
            <ambientLight intensity={1}/>
            <pointLight 
                color="#f6f3ea" 
                position={[10, 2, 10]} 
                intensity={3}/>
            <mesh position={[0,0,0]} onClick={()=> setFocus(!focus)}>
                <sphereGeometry args={[3, 64 ,64]}/>
            </mesh>
        </>
    )
}