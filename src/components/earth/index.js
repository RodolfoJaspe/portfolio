import React, { useRef, useState, useEffect } from "react";

import EarthDayMap from '../../Assets/textures/8k_earth_daymap.jpg';
import EarthCloudsMap from '../../Assets/textures/8k_earth_clouds.jpg'
import EarthNightMap from '../../Assets/textures/8k_earth_nightmap.jpg'
import EarthSpecularMap from '../../Assets/textures/8k_earth_specular_map.jpg'
import EarthNormalMap from '../../Assets/textures/8k_earth_normal_map.jpg'
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import * as THREE from "three";


export function Earth(props) {

    const cameraRef = useRef();
    const [cameraPosition, setCameraPosition] = useState([0, 0, 10]);
    const [cameraRotation, setCameraRotation] = useState([0, 0, 0]);

    const [colorMap, normalMap, nightMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthNightMap, EarthSpecularMap, EarthCloudsMap])

    const earthRef = useRef();
    const cloudsRef = useRef();

    useFrame((props) => {
        const elapsedTime = props.clock.getElapsedTime();

        earthRef.current.rotation.y = elapsedTime / 30;
        cloudsRef.current.rotation.y = elapsedTime / 30;

        earthRef.current.rotation.x = window.scrollY / 10000
        cloudsRef.current.rotation.x = window.scrollY / 10000

        cameraRef.current.position.set(...cameraPosition);
        cameraRef.current.rotation.set(...cameraRotation);
          
          
    })

    useEffect(() => {
        function handleKeyDown(event) {
          switch (event.code) {
            case "KeyW":
              setCameraPosition((prev) => [prev[0], prev[1], prev[2] - 1]);
              break;
            case "KeyA":
              setCameraPosition((prev) => [prev[0] - 1, prev[1], prev[2]]);
              break;
            case "KeyS":
              setCameraPosition((prev) => [prev[0], prev[1], prev[2] + 1]);
              break;
            case "KeyD":
              setCameraPosition((prev) => [prev[0] + 1, prev[1], prev[2]]);
              break;
            default:
              break;
          }
        }
      
        function handleMouseMove(event) {
          if (event.buttons === 1) {
            setCameraRotation((prev) => [
              prev[0] - event.movementY / 100,
              prev[1] - event.movementX / 100,
              prev[2],
            ]);
          }
        }
      
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousemove", handleMouseMove);
      
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
          document.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);
      


    return (
        <>
            <ambientLight intensity={0.1}/>
            <pointLight 
                color="#f6f3ea" 
                position={[10, 2, 10]} 
                intensity={3}/>
            <Stars 
                radius={100} 
                depth={60} 
                count={10000} 
                factor={7} 
                fade={true}/>
            <mesh ref={cloudsRef} >
                <>
                    <sphereGeometry args={[3.501, 64, 64]} />
                    <meshPhongMaterial 
                        map={cloudsMap} 
                        opacity={.3} 
                        depthWrite={true} 
                        transparent={true} 
                        side={THREE.DoubleSide}/>
                </>
            </mesh>
            <mesh ref={earthRef} >
                <sphereGeometry args={[3.5, 64 ,64]}/>
                <meshPhongMaterial specularMap={specularMap}/>
                <meshStandardMaterial 
                    map={colorMap} 
                    normalMap={normalMap} 
                    metalness={.4} 
                    roughness={.7}/>
                <OrbitControls 
                    enableZoom={true} 
                    enablePan={true} 
                    enableRotate={true} 
                    zoomSpeed={.6} 
                    panSpeed={.5} 
                    rotateSpeed={.4} 
                />
            </mesh>
            <PerspectiveCamera
                ref={cameraRef}
                position={cameraPosition}
                rotation={cameraRotation}
            />
        </>
    )
}