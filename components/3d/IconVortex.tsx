// FIX: Removed the unnecessary triple-slash directive. Type definitions for @react-three/fiber are automatically discovered by TypeScript through the import statements, and the directive was causing resolution errors.
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// This is a simplified representation. Rendering complex SVG icons in WebGL is non-trivial.
// For a production app, you would use textures (images) of the icons.
// Here, we just use colored points as placeholders.

export const IconVortex: React.FC = () => {
    const pointsRef = useRef<THREE.Points>(null!);
    const count = 200;

    const points = useMemo(() => {
        const p = new Array(count).fill(0).map((v, i) => {
            const angle = (i / count) * Math.PI * 4; // More spirals
            const radius = 2 + Math.pow(i / count, 2) * 4;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const y = (i / count) * 4 - 2; // Spread along Y-axis
            return new THREE.Vector3(x, y, z);
        });
        return new Float32Array(p.flatMap(point => [point.x, point.y, point.z]));
    }, [count]);
    
    const colors = useMemo(() => {
        const c = new Array(count).fill(0).map(() => {
            const color = new THREE.Color();
            color.setHSL(Math.random(), 0.7, 0.7);
            return color;
        });
        return new Float32Array(c.flatMap(color => [color.r, color.g, color.b]));
    }, [count]);


    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={points.length / 3} array={points} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
            </bufferGeometry>
            <PointMaterial
                transparent
                vertexColors
                size={0.15}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </points>
    );
};
