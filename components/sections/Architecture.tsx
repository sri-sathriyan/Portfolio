// FIX: Removed the unnecessary triple-slash directive. Type definitions for @react-three/fiber are automatically discovered by TypeScript through the import statements, and the directive was causing resolution errors.
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Icosahedron, OrbitControls } from '@react-three/drei';
import { FaServer, FaUsers, FaDatabase, FaGlobe } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';
import { Fade } from 'react-awesome-reveal';
import type { IconType } from 'react-icons';

// FIX: Changed the type of the `icon` prop from `React.ElementType` to `IconType` to correctly type icon components. This allows props like `className` to be passed without TypeScript errors.
const DiagramBox: React.FC<{ icon: IconType; title: string; children?: React.ReactNode }> = ({ icon: Icon, title, children }) => (
    <div className="relative bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex flex-col items-center justify-center text-center backdrop-blur-sm">
        <Icon className="w-8 h-8 text-primary-dark mb-2" />
        <h4 className="font-semibold text-white">{title}</h4>
        {children}
    </div>
);

const Mini3DScene: React.FC = () => (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Icosahedron args={[1, 0]}>
            <meshStandardMaterial color="#818cf8" wireframe metalness={0.5} roughness={0.1} />
        </Icosahedron>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
);

export const Architecture: React.FC = () => {
    return (
        <section id="architecture" className="py-20 bg-dark/95">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Fade direction="up" triggerOnce>
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">System <span className="text-primary-dark">Architecture</span></h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        A high-level overview of a typical scalable and resilient cloud infrastructure.
                    </p>
                </Fade>

                <div className="relative">
                    <svg className="absolute inset-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Lines connecting diagram elements */}
                        <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#4f46e5" />
                            </marker>
                        </defs>
                        {/* Users -> CDN */}
                        <line x1="12.5%" y1="50%" x2="29%" y2="50%" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrow)" />
                        {/* CDN -> Load Balancer */}
                        <line x1="37.5%" y1="50%" x2="46%" y2="50%" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrow)" />
                         {/* LB -> K8s */}
                        <line x1="62.5%" y1="50%" x2="71%" y2="50%" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrow)" />
                        {/* K8s -> DB */}
                        <line x1="87.5%" y1="50%" x2="96%" y2="50%" stroke="#4f46e5" strokeWidth="2" markerEnd="url(#arrow)" />
                    </svg>

                    <div className="grid grid-cols-5 gap-x-8 items-center">
                        <Fade direction="left" delay={100} triggerOnce><DiagramBox icon={FaUsers} title="Users" /></Fade>
                        <Fade direction="left" delay={200} triggerOnce><DiagramBox icon={FaGlobe} title="CDN / WAF" /></Fade>
                        <Fade direction="up" delay={300} triggerOnce>
                            <DiagramBox icon={FaServer} title="Load Balancer">
                                <div className="h-40 w-full mt-2">
                                    <Suspense fallback={null}>
                                        <Mini3DScene />
                                    </Suspense>
                                </div>
                            </DiagramBox>
                        </Fade>
                        <Fade direction="right" delay={400} triggerOnce><DiagramBox icon={SiKubernetes} title="K8s Cluster" /></Fade>
                        <Fade direction="right" delay={500} triggerOnce><DiagramBox icon={FaDatabase} title="Database" /></Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};
