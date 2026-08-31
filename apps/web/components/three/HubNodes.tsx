"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Connections } from "@/components/three/Connections";

const labels = ["Courses", "Skills", "Jobs", "Projects", "Products"] as const;

const positions: [number, number, number][] = [
  [-1.6, 1.1, 0.2],
  [-1.9, -0.6, -0.3],
  [1.7, 1.0, -0.2],
  [1.9, -0.7, 0.3],
  [0, -1.7, 0],
];

export function HubNodes() {
  const group = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) group.current.rotation.y = t * 0.05;
    nodeRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.position.y = positions[i][1] + Math.sin(t * 0.6 + i) * 0.08;
    });
  });

  return (
    <group ref={group}>
      <Connections nodePositions={positions} />

      {/* central hub */}
      <mesh>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial
          color="#16a34a"
          emissive="#16a34a"
          emissiveIntensity={0.4}
          roughness={0.35}
          metalness={0.1}
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
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshStandardMaterial
            color="#6366f1"
            emissive="#6366f1"
            emissiveIntensity={0.5}
            roughness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}
