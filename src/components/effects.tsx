"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/* ------------------------------------------------------------------ */
/* Wipe — clip-path curtain reveal for imagery (built from scratch)    */
/* ------------------------------------------------------------------ */
export function Wipe({
  children,
  className = "",
  radius = "rounded-3xl",
}: {
  children: ReactNode;
  className?: string;
  radius?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`overflow-hidden ${radius} ${className}`}
      initial={reduce ? false : { clipPath: "inset(16% 10% 16% 10% round 28px)", opacity: 0.3, scale: 1.06 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 28px)", opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* ScrambleText — decode-style text reveal (built from scratch)        */
/* ------------------------------------------------------------------ */
const GLYPHS = "▚▞▟#%&$@*+≠";

export function ScrambleText({
  text,
  className = "",
  startDelay = 0,
}: {
  text: string;
  className?: string;
  startDelay?: number;
}) {
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let frame = 0;
    const tick = () => {
      frame += 1;
      const revealed = Math.max(0, Math.floor((frame - 6) / 2));
      let s = "";
      for (let i = 0; i < text.length; i += 1) {
        const ch = text[i];
        if (ch === " " || ch === "·" || i < revealed) s += ch;
        else s += GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      setOut(s);
      if (revealed <= text.length) raf = requestAnimationFrame(tick);
      else setOut(text);
    };
    const t = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, startDelay);
    return () => {
      window.clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [text, startDelay]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{out}</span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic — cursor-attracted wrapper for CTAs (built from scratch)   */
/* ------------------------------------------------------------------ */
export function Magnetic({
  children,
  className = "",
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const [fine, setFine] = useState(false);
  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 14, mass: 0.3 });
  const sy = useSpring(my, { stiffness: 180, damping: 14, mass: 0.3 });

  if (reduce || !fine) return <span className={className}>{children}</span>;

  return (
    <motion.span
      className={className}
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left - r.width / 2) * strength);
        my.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/* useTilt — 3D tilt + glare via vanilla-tilt (micku7zu/vanilla-tilt,  */
/* MIT). Only activates on fine pointers with motion allowed.          */
/* ------------------------------------------------------------------ */
export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let destroyed = false;
    import("vanilla-tilt").then((m) => {
      if (destroyed) return;
      const VanillaTilt = (m.default as unknown as { init: (el: HTMLElement, opts: object) => void });
      VanillaTilt.init(el, {
        max: 6,
        speed: 700,
        scale: 1.015,
        glare: true,
        "max-glare": 0.1,
      });
    });

    return () => {
      destroyed = true;
      // vanilla-tilt attaches itself to the element
      const vt = (el as HTMLElement & { vanillaTilt?: { destroy: () => void } }).vanillaTilt;
      vt?.destroy();
    };
  }, []);

  return ref;
}
