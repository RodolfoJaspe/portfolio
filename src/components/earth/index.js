import React, { useRef } from "react";

import EarthDayMap from '../../Assets/textures/8k_earth_daymap.jpg';
import EarthCloudsMap from '../../Assets/textures/8k_earth_clouds.jpg'
import EarthNightMap from '../../Assets/textures/8k_earth_nightmap.jpg'
import EarthSpecularMap from '../../Assets/textures/8k_earth_specular_map.jpg'
import EarthNormalMap from '../../Assets/textures/8k_earth_normal_map.jpg'
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";


export function Earth(props) {

    const [colorMap, normalMap, nightMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthNightMap, EarthSpecularMap, EarthCloudsMap])

    const earthRef = useRef();
    const cloudsRef = useRef();

    useFrame((props) => {
        const elapsedTime = props.clock.getElapsedTime();

        earthRef.current.rotation.y = elapsedTime / 30;
        cloudsRef.current.rotation.y = elapsedTime / 30;

        earthRef.current.rotation.x = window.scrollY / 10000
        cloudsRef.current.rotation.x = window.scrollY / 10000
    })

    

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
                count={30000} 
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
                {/* <OrbitControls 
                    enableZoom={true} 
                    enablePan={true} 
                    enableRotate={true} 
                    zoomSpeed={.6} 
                    panSpeed={.5} 
                    rotateSpeed={.4} 
                /> */}
            </mesh>
        </>
    )
}