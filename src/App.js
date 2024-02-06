import { Html, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import { Toggler } from './components/Toggler';
import { Earth } from './components/earth';

function Loader() {
    const { progress } = useProgress()
    return <Html center><div style={{fontSize:'2rem', color:"#ffffffde", width:"100vw", height:"100vh", display:"flex", alignItems: 'flex-end'}}>{progress} % loaded</div></Html>
}

function App() {

    const [focus , setFocus] = useState(false)

    return (
        <div className='app'>
            <div className={!focus?'content':'content-back'}>
                <Header focus={focus}/>
                {!focus?<Projects />:null}
            </div>
            <div className={focus?'globe':'globe-back'}>
               <Canvas>
                <Suspense fallback={<Loader/>}>
                    <Earth />
                </Suspense>
                </Canvas> 
            </div>
            <Toggler setFocus={setFocus} focus={focus}/>
        </div>
    )
}

export default App;
