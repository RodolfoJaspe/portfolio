import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import { Html, useProgress } from '@react-three/drei'
import './App.css';
import About from './components/About';
import { Earth } from './components/earth';
import Header from './components/Header';
import Projects from './components/Projects';
import { Toggler } from './components/Toggler';

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
                {/* {!focus?<About />:null} */}
            </div>
            <div className={focus?'globe':'globe-back'}>
               <Canvas>
                <Suspense fallback={<Loader/>}>
                    <Earth />
                </Suspense>
                </Canvas> 
            </div>
            <div className='toggler'>
               <Canvas>
                <Suspense >
                    <Toggler focus ={focus} setFocus={setFocus}/>
                </Suspense>
                </Canvas> 
                <div>
                    <h2>Toggle</h2>
                </div>
            </div>
        </div>
    )
}

export default App;
