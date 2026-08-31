"use client";

import { useEffect } from "react";
import { RefObject } from "react";
import { getGsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function useHeroScrollOut(ref: RefObject<HTMLElement | null>) {
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const { gsap, ScrollTrigger } = getGsap();

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      })
        .to("[data-hero-copy]", { yPercent: -12, opacity: 0.3, ease: "none" }, 0)
        .to("[data-hero-visual]", { scale: 0.88, opacity: 0.4, ease: "none" }, 0);
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [ref, reduced]);
}
