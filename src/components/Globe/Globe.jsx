import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Pin } from './Pin';
import { BASE_URL } from '../../utils/routes';
import { Stars } from './Stars';
import { Earth } from './Earth';
import { Fallback } from './Susspense/Fallback';



export const Globe = () => {
    const groupRef = useRef();
    const [showStars, setShowStars] = useState(true);

    const pins = [
        { lat: 85, lon: 0, label: 'About me', url: `${BASE_URL}/about` },
        { lat: 35, lon: -30, label: 'GitHub', url: 'https://www.github.com/yoeleigner' },
        { lat: -40, lon: -40, label: 'Full Resume', url: `${BASE_URL}/resume` },
        { lat: -30, lon: 20, label: 'Experience', url: `${BASE_URL}/experience` },
        { lat: -65, lon: -125, label: 'LinkedIn', url: 'https://www.linkedin.com/in/yoel-eigner' },
        { lat: -110, lon: -75, label: 'Projects', url: `${BASE_URL}/projects` },
    ];
    
    return (
            <Canvas camera={{ position: [-5, 0, -15], fov: 55 }} style={{ height: '100vh', width: '100vw', backgroundColor: '#343a40' }}>
                <group ref={groupRef} rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
                    <Earth groupRef={groupRef} />
                    {showStars && <Stars />}
                    {pins.map((pin, idx) => (
                        <Pin
                            key={idx}
                            id={idx}
                            {...pin}
                            setShowStars={(value) => setShowStars(value)} />
                    ))}
                </group>
                <Environment preset="warehouse" />
                <OrbitControls target={groupRef.current?.position} />
            </Canvas>
    )
}