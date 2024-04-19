import { Html, useGLTF, useProgress } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { forwardRef, Suspense, useRef, useState } from 'react';
import * as THREE from "three";
import './App.css';
import { Earth } from './components/earth';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from "./components/Skills";
import { Toggler } from './components/Toggler';


function Loader() {
    const { progress } = useProgress()
    return <Html center><div style={{fontSize:'2rem', color:"#ffffffde", width:"100vw", height:"100vh", display:"flex", alignItems: 'flex-end'}}>Loading 3D Playground {Math.floor(progress)}%  </div></Html>
}

const Airplane = forwardRef((props, ref) => {
    const gltf = useGLTF('/Assets/war_plane/scene.gltf');
    return <primitive object={gltf.scene} ref={ref} scale={.5} />;
  })
  
  function FlyingAirplane({r}) {
    
      const airplaneRef = useRef();
     
    //   const position = useMemo(() => new THREE.Vector3(), []);
    
      useFrame(({ clock }) => {
        if (airplaneRef.current) {
        const elapsedTime = clock.getElapsedTime();
        const radius = r; // Distance from the Earth's center
        const speed = 1; // Speed of revolution
        const x = radius * Math.cos(elapsedTime * speed);
        const y = radius * Math.sin(elapsedTime * speed);
        const z = radius * Math.sin(elapsedTime * speed);
        
        airplaneRef.current.position.set(x,y,z);
                    // Calculate forward direction (tangent to the circle of motion)
                    const forward = new THREE.Vector3(
                        -Math.sin(elapsedTime * speed), // derivative of the position function w.r.t time
                        0,                              // maintains the same y-level
                        Math.cos(elapsedTime * speed)
                    );
        
                    // Setting the up vector to point towards the center of the Earth (down)
                    airplaneRef.current.up.set(0, 0.1, .5);  // Points 'down' towards the Earth's center
        
                    // Look in the direction of motion
                    const lookAtTarget = new THREE.Vector3().addVectors(airplaneRef.current.position, forward);
                    airplaneRef.current.lookAt(lookAtTarget);
        
                }
            });
    
      return <Airplane ref={airplaneRef} />;

    }

function App() {

    const [focus , setFocus] = useState(true)

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
                    {/* <FlyingAirplane r={3}/> */}
                    <FlyingAirplane r={4}/>  
                </Suspense>
                </Canvas> 
            </div>
            <Skills focus={focus}/>
            <Toggler setFocus={setFocus} focus={focus}/>
        </div>
    )
}

export default App;
