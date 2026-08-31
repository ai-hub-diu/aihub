"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Connections } from "@/components/three/Connections";

const labels = ["Courses", "Jobs", "Projects"] as const;

const positions: [number, number, number][] = [
  [-1.9, 1.0, -0.2],
  [1.95, 0.55, 0.15],
  [-0.15, -1.85, 0.1],
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
    <group ref={group}>
      <Connections nodePositions={positions} />

      {/* central hub */}
      <mesh>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          color="#147a41"
          emissive="#147a41"
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
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color="#5b5bd6"
            emissive="#5b5bd6"
            emissiveIntensity={0.45}
            roughness={0.45}
          />
        </mesh>
      ))}
    </group>
  );
}
