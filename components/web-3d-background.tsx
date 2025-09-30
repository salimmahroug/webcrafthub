"use client";

// Laptop 3D
function FloatingLaptop() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.7) * 0.5;
      meshRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.5) * 10;
      meshRef.current.position.y =
        Math.cos(clock.getElapsedTime() * 0.3) * 3 + 8;
    }
  });
  return (
    <mesh ref={meshRef} position={[0, 8, 0]} scale={[2.5, 2.5, 2.5]}>
      <boxGeometry args={[2, 0.1, 1.2]} />
      <meshStandardMaterial
        color="#7b2ff2"
        emissive="#49c6e5"
        emissiveIntensity={0.3}
      />
      <mesh position={[0, 0.6, -0.5]} rotation={[-Math.PI / 3, 0, 0]}>
        <boxGeometry args={[2, 0.05, 1.2]} />
        <meshStandardMaterial
          color="#49c6e5"
          emissive="#7b2ff2"
          emissiveIntensity={0.2}
        />
      </mesh>
    </mesh>
  );
}

// Globe 3D
function FloatingGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      meshRef.current.position.x =
        Math.cos(clock.getElapsedTime() * 0.4) * 12 - 10;
      meshRef.current.position.y =
        Math.sin(clock.getElapsedTime() * 0.2) * 4 + 4;
    }
  });
  return (
    <mesh ref={meshRef} position={[-10, 4, 0]} scale={[2, 2, 2]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#49c6e5"
        emissive="#7b2ff2"
        emissiveIntensity={0.2}
        wireframe
      />
    </mesh>
  );
}

// Code Icon 3D
function FloatingCodeIcon() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.8) * 0.7;
      meshRef.current.position.x =
        Math.sin(clock.getElapsedTime() * 0.6) * 10 + 10;
      meshRef.current.position.y =
        Math.cos(clock.getElapsedTime() * 0.4) * 3 - 6;
    }
  });
  return (
    <mesh ref={meshRef} position={[10, -6, 0]} scale={[2, 2, 2]}>
      <torusGeometry args={[0.7, 0.2, 16, 100]} />
      <meshStandardMaterial
        color="#6a5af9"
        emissive="#49c6e5"
        emissiveIntensity={0.3}
        wireframe
      />
    </mesh>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 100;
  const connectionDistance = 15;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      });
    }

    return { positions, velocities };
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] += particles.velocities[i].x;
      positions[i * 3 + 1] += particles.velocities[i].y;
      positions[i * 3 + 2] += particles.velocities[i].z;

      if (Math.abs(positions[i * 3]) > 25) particles.velocities[i].x *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 25) particles.velocities[i].y *= -1;
      if (Math.abs(positions[i * 3 + 2]) > 15) particles.velocities[i].z *= -1;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    if (linesRef.current) {
      const linePositions: number[] = [];

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < connectionDistance) {
            linePositions.push(
              positions[i * 3],
              positions[i * 3 + 1],
              positions[i * 3 + 2]
            );
            linePositions.push(
              positions[j * 3],
              positions[j * 3 + 1],
              positions[j * 3 + 2]
            );
          }
        }
      }

      linesRef.current.geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particles.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.3} color="#0ea5e9" transparent opacity={0.6} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#0ea5e9" transparent opacity={0.15} />
      </lineSegments>
    </>
  );
}

function FloatingGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 2;
      gridRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[50, 20, "#7dd3fc", "#e0f2fe"]}
      position={[0, -10, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

function GeometricShapes() {
  const shapes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20,
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      scale: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2,
      type: Math.random() > 0.5 ? "box" : "octahedron",
    }));
  }, []);

  return (
    <>
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}
    </>
  );
}

function FloatingShape({
  position,
  rotation,
  scale,
  speed,
  type,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  speed: number;
  type: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        rotation[0] + clock.getElapsedTime() * speed * 0.2;
      meshRef.current.rotation.y =
        rotation[1] + clock.getElapsedTime() * speed * 0.3;
      meshRef.current.position.y =
        position[1] + Math.sin(clock.getElapsedTime() * speed) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {type === "box" ? (
        <boxGeometry args={[1, 1, 1]} />
      ) : (
        <octahedronGeometry args={[1, 0]} />
      )}
      <meshStandardMaterial
        color="#0ea5e9"
        transparent
        opacity={0.08}
        wireframe
        emissive="#0ea5e9"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

export function Web3DBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#0ea5e9" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.4}
          color="#38bdf8"
        />

        <ParticleNetwork />
        <FloatingGrid />
        <GeometricShapes />
        <FloatingLaptop />
        <FloatingGlobe />
        <FloatingCodeIcon />
      </Canvas>
    </div>
  );
}