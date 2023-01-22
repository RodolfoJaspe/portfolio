import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react';
import './App.css';
import About from './components/About';
import { Earth } from './components/earth';
import Header from './components/Header';
import Projects from './components/Projects';

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
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
                </Canvas> 
            </div>
        </div>
    )
}

export default App;
