"use client";

import { useEffect, useRef, useState } from "react";
import { getGsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const { gsap, ScrollTrigger } = getGsap();
    const counter = { n: 0 };
    const tween = gsap.to(counter, {
      n: value,
      duration: 1.4,
      ease: "power2.out",
      onUpdate: () => setDisplay(Math.round(counter.n)),
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        once: true,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, reduced]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
