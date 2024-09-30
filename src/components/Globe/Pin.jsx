import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { DoubleSide, Vector3 } from 'three';
import gsap from 'gsap';
import { latLongSphere, openUrl } from './Utils';
import { useNavigate } from 'react-router-dom';

export const Pin = ({ id, lat, lon, url, setShowStars }) => {
    const pinRef = useRef();
    const mouseDownPosition = useRef({ x: 0, y: 0 });
    const { camera } = useThree();
    const { x, y, z } = latLongSphere(lat, lon, 5);
    const position = new Vector3(x, y, z);
    const [targetPosition, setTargetPosition] = useState(null);
    const navigate = useNavigate()

    const handleMouseDown = (event) => {
        mouseDownPosition.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = (event) => {
        const dx = event.clientX - mouseDownPosition.current.x;
        const dy = event.clientY - mouseDownPosition.current.y;
        const distance = Math.sqrt(dx * dy + dy * dy);
        if (distance < 5) {
            handlePinClick();
        }
    };

    const handlePinClick = useCallback(() => {
        const distance = 3;
        const direction = new Vector3(x, y, z).normalize();
        const newPosition = direction.multiplyScalar(distance);
        setTargetPosition(newPosition);
    }, [x, y, z]);

    useEffect(() => {
        if (targetPosition) {
            gsap.to(camera.position, {
                duration: 1.5,
                x: targetPosition.x,
                y: targetPosition.y,
                z: targetPosition.z,
                ease: 'power2.in',
                onComplete: () => {
                    setShowStars(false);
                    if (!url.startsWith('https')) {
                        navigate(url);  
                    }
                    else {
                        openUrl(url);
                    }
                    setTimeout(() => {
                        setShowStars(true)
                    }, 1000);
                },
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetPosition, camera.position, id, url]);


    useFrame(() => {
        if (pinRef.current) {
            pinRef.current.lookAt(0, 0, 0);
        }
    });

    return (
        <group ref={pinRef} position={position} onPointerDown={handleMouseDown} onPointerUp={handleMouseUp}>
            <mesh>
                <boxGeometry args={[3, 3, 1, 1]} />
                <meshStandardMaterial color={'transparent'} visible={false} side={DoubleSide} />
            </mesh>
        </group>
    );
};
