"use client";

import { Canvas } from "@react-three/fiber";
import { HubNodes } from "@/components/three/HubNodes";
import { Particles } from "@/components/three/Particles";
import { CameraRig } from "@/components/three/CameraRig";

export default function HubScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 3, 3]} intensity={40} color="#16a34a" />
      <pointLight position={[-3, -2, -2]} intensity={20} color="#6366f1" />
      <HubNodes />
      <Particles count={80} />
      <CameraRig />
    </Canvas>
  );
}
