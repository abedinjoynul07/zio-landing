"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MainShape() {
  const meshRef = THREE.useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 0]} />
      <meshStandardMaterial
        color="#666666"
        metalness={0.8}
        roughness={0.2}
        wireframe={false}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    position: [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5],
    size: Math.random() * 0.05 + 0.02,
  }));

  return (
    <>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshBasicMaterial color="#888888" transparent opacity={0.6} />
        </mesh>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#666666" />
        <MainShape />
        <FloatingParticles />
      </Canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
          Zio
        </h1>
        <p className="text-gray-400 text-lg">Clean. Minimal. 3D.</p>
      </div>
    </div>
  );
}