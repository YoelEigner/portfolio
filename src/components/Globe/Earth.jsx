import { useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { Vector3 } from "three";
import earthTexture from './assets/earth.jpeg';


export const Earth = ({ groupRef }) => {
    const earthRef = useRef();
    //texture was created on https://azgaar.github.io/Fantasy-Map-Generator/
    const texture = useTexture(earthTexture);
    const { camera } = useThree();
    const distance = 15;
    const direction = new Vector3(-210, -45, 345).normalize();
    const newPosition = direction.multiplyScalar(distance);
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.001;
        }
    })

    gsap.to(camera.position, {
        duration: 1.5,
        x: newPosition.x,
        y: newPosition.y,
        z: newPosition.z,
        ease: 'power2.inOut',
    });
    return (
        <group ref={earthRef}>
            <mesh >
                <sphereGeometry args={[5, 64, 64]} />
                <meshStandardMaterial map={texture} />
            </mesh>
        </group>
    );
};