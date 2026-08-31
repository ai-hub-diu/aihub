"use client";

import { ReactNode } from "react";
import { useMagnetic } from "@/hooks/use-magnetic";

export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useMagnetic<HTMLDivElement>(0.2);
  return (
    <div ref={ref} className="inline-block">
      {children}
    </div>
  );
}
