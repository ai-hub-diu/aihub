"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  /** selector for staggered children, e.g. "& > *" equivalent via direct child selector */
  stagger?: string;
  y?: number;
  delay?: number;
};

export function ScrollReveal({ children, className, stagger, y, delay }: Props) {
  const ref = useScrollReveal<HTMLDivElement>({ stagger, y, delay });
  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
