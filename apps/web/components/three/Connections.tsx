"use client";

import { useMemo } from "react";
import * as THREE from "three";

export function Connections({ nodePositions }: { nodePositions: [number, number, number][] }) {
  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    nodePositions.forEach((p) => {
      points.push(new THREE.Vector3(0, 0, 0));
      points.push(new THREE.Vector3(...p));
    });
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [nodePositions]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#94a3b8" transparent opacity={0.35} />
    </lineSegments>
  );
}
