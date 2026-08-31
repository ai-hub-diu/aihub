"use client";

import { Canvas } from "@react-three/fiber";
import { HubNodes } from "@/components/three/HubNodes";
import { Particles } from "@/components/three/Particles";
import { CameraRig } from "@/components/three/CameraRig";

export default function HubScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 9], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.55} />
      <pointLight position={[3, 3, 3]} intensity={38} color="#1d4fd8" />
      <pointLight position={[-3, -2, -2]} intensity={18} color="#06b6d4" />
      <HubNodes />
      <Particles count={55} />
      <CameraRig />
    </Canvas>
  );
}
