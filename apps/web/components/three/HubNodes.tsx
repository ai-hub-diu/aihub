"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Connections } from "@/components/three/Connections";

const labels = ["Courses", "Jobs", "Projects"] as const;

const positions: [number, number, number][] = [
  [-1.55, 0.8, -0.2],
  [1.6, 0.45, 0.15],
  [-0.1, -1.5, 0.1],
];

export function HubNodes() {
  const group = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) group.current.rotation.y = t * 0.04;
    nodeRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.position.y = positions[i][1] + Math.sin(t * 0.55 + i) * 0.09;
    });
  });

  return (
    <group ref={group} position={[-0.6, 0, 0]}>
      <Connections nodePositions={positions} />

      {/* central hub */}
      <mesh>
        <icosahedronGeometry args={[0.24, 1]} />
        <meshStandardMaterial
          color="#1d4fd8"
          emissive="#1d4fd8"
          emissiveIntensity={0.35}
          roughness={0.4}
          metalness={0.05}
        />
      </mesh>

      {positions.map((pos, i) => (
        <mesh
          key={labels[i]}
          position={pos}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.45}
            roughness={0.45}
          />
        </mesh>
      ))}
    </group>
  );
}
