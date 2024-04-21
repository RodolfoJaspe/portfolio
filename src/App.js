import { Html, useGLTF, useProgress } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useRef, useState } from 'react';
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
  
  function FlyingAirplane({spd, r, airplane, scale, path}) {
    
      const airplaneRef = useRef();
      const gltf = useGLTF(airplane);
    
      useFrame(({ clock }) => {
        if (airplaneRef.current) {
        const elapsedTime = clock.getElapsedTime();
        const radius = r ; // Distance from the Earth's center
        const speed = spd; // Speed of revolution
        const paths = {
            path1 : {
                x : radius * Math.cos(elapsedTime * speed),
                y : radius * Math.sin(elapsedTime * speed),
                z : radius * Math.sin(elapsedTime * speed),
            },
            path2 : {
                x : radius * Math.cos(elapsedTime * speed),
                y : radius * Math.cos(elapsedTime * speed),
                z : radius * Math.sin(elapsedTime * speed),
            },
            path3 : {
                x : radius * Math.cos(elapsedTime * speed),
                y : radius * Math.sin(elapsedTime * speed),
                z : radius * Math.cos(elapsedTime * speed),
            }
        }
        {path==1?airplaneRef.current.position.set(paths.path1.x,paths.path1.y,paths.path1.z):airplaneRef.current.position.set(paths.path2.x,paths.path2.y,paths.path2.z)}
        if(path===1){
            airplaneRef.current.position.set(paths.path1.x,paths.path1.y,paths.path1.z)
        }else if(path===2){
            airplaneRef.current.position.set(paths.path2.x,paths.path2.y,paths.path2.z)
        }else if(path===3){
            airplaneRef.current.position.set(paths.path3.x,paths.path3.y,paths.path3.z)
        }
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
    
    //   return <Airplane ref={airplaneRef} />;
    return <primitive object={gltf.scene} ref={airplaneRef} scale={scale} />;

    }

function App() {

    const [focus , setFocus] = useState(true)

    return (
        <div className='app'>
            <div className={!focus?'content':'content-back'}>
                <Header focus={focus}/>
                {!focus?<div><Projects /><Skills/></div>:null}
            </div>
            <div className={focus?'globe':'globe-back'}>
               <Canvas>
                <Suspense fallback={<Loader/>}>
                    <Earth />
                    <FlyingAirplane spd={.6} r={3.5} airplane={'/Assets/war_plane/scene.gltf'} scale={.5} path={1}/>
                    <FlyingAirplane spd={.5} r={3.8} airplane={'/Assets/cartoon_airplane/scene.gltf'} scale={.02}path={2}/>
                    <FlyingAirplane spd={.8} r={4} airplane={'/Assets/curtis_airplane/scene.gltf'} scale={.003}path={1}/>

                </Suspense>
                </Canvas> 
            </div>
            
            <Toggler setFocus={setFocus} focus={focus}/>
        </div>
    )
}

export default App;
