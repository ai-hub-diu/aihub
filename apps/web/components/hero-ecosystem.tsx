"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const HubScene = dynamic(() => import("@/components/three/HubScene"), { ssr: false });

export function HeroEcosystem() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    setEnabled(isDesktop && !isCoarse && !reduced);
  }, [reduced]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-90" aria-hidden="true">
      <HubScene />
    </div>
  );
}
