"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export function CameraRig() {
  const target = useRef({ x: 0, y: 0 });
  const { camera, pointer } = useThree();

  useFrame(() => {
    target.current.x += (pointer.x * 0.5 - target.current.x) * 0.04;
    target.current.y += (pointer.y * 0.3 - target.current.y) * 0.04;
    camera.position.x = target.current.x;
    camera.position.y = target.current.y;
    camera.lookAt(0, 0, 0);
  });

  return null;
}
