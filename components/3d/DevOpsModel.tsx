/// <reference types="@react-three/fiber" />
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

// In a real application, you would use the GLTFLoader
// import { useGLTF } from '@react-three/drei';
// const { nodes, materials } = useGLTF('/3d/scene.glb');

export const DevOpsModel: React.FC = () => {
  const modelRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (modelRef.current) {
        const t = state.clock.getElapsedTime();
        modelRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
        modelRef.current.rotation.y = Math.cos(t * 0.3) * 0.2;
        modelRef.current.position.y = Math.sin(t * 0.7) * 0.1;
    }
  });

  return (
    // Replace this TorusKnot with your loaded GLB model
    // <primitive object={nodes.Scene} ref={modelRef} scale={1.5} />
    <TorusKnot ref={modelRef} args={[1, 0.3, 256, 32]} scale={1.5}>
      <meshStandardMaterial 
        color="#818cf8" 
        metalness={0.8}
        roughness={0.1}
        emissive="#1d4ed8"
        emissiveIntensity={0.5}
      />
    </TorusKnot>
  );
};
