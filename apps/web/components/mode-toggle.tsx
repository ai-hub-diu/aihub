"use client";

import { useEffect, useRef } from "react";
import { getGsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type Option<T extends string> = { value: T; label: string };

export function ModeToggle<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: [Option<T>, Option<T>];
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const reduced = useReducedMotion();

  useEffect(() => {
    const btn = btnRefs.current[value];
    const container = containerRef.current;
    const indicator = indicatorRef.current;
    if (!btn || !container || !indicator) return;

    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const x = btnRect.left - containerRect.left;
    const width = btnRect.width;

    if (reduced) {
      indicator.style.transform = `translateX(${x}px)`;
      indicator.style.width = `${width}px`;
      return;
    }

    const { gsap } = getGsap();
    gsap.to(indicator, { x, width, duration: 0.4, ease: "power3.out" });
  }, [value, reduced]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex rounded-full border border-border bg-card p-1"
    >
      <div
        ref={indicatorRef}
        className="absolute inset-y-1 left-0 rounded-full bg-foreground"
        style={{ width: 0 }}
      />
      {options.map((opt) => (
        <button
          key={opt.value}
          ref={(el) => {
            btnRefs.current[opt.value] = el;
          }}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-200",
            value === opt.value ? "text-background" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
