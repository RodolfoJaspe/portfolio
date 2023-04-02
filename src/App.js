import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react';
import { Html, useProgress } from '@react-three/drei'
import './App.css';
import About from './components/About';
import { Earth } from './components/earth';
import Header from './components/Header';
import Projects from './components/Projects';

function Loader() {
    const { progress } = useProgress()
    return <Html center><div style={{fontSize:'2rem', color:"#ffffffde", width:"100vw", height:"100vh", display:"flex", alignItems: 'flex-end'}}>{progress} % loaded</div></Html>
}

function App() {

    return (
        <div className='app'>
            <div className='content'>
                <Header />
                <Projects />
                <About />
            </div>
            <div className='globe'>
               <Canvas>
                <Suspense fallback={<Loader/>}>
                    <Earth />
                </Suspense>
                </Canvas> 
            </div>
        </div>
    )
}

export default App;
