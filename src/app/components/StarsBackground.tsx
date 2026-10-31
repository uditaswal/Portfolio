"use client";

import { useEffect, useRef } from "react";

/** Flip to false to turn off the twinkling star background entirely. */
export const STARS_ENABLED = true;

const STAR_COUNT = 200;

/**
 * Fixed, full-viewport field of twinkling dots behind all page content.
 * Each star gets its own randomized size, opacity range and cycle timing via
 * inline custom properties; the actual animation is pure CSS (see
 * `.stars-field` in globals.css), and freezes to a static dim state under
 * prefers-reduced-motion.
 */
export default function StarsBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!STARS_ENABLED) return;
    const el = ref.current;
    if (!el) return;

    const frag = document.createDocumentFragment();
    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement("span");
      star.className = "star";
      const size = (Math.random() * 1.6 + 0.6).toFixed(2);
      const minOp = (Math.random() * 0.15 + 0.05).toFixed(2);
      const maxOp = (Math.random() * 0.4 + 0.5).toFixed(2);
      const dur = (Math.random() * 3 + 2).toFixed(2);
      const delay = (-Math.random() * 5).toFixed(2);
      star.style.cssText =
        `width:${size}px;height:${size}px;` +
        `top:${(Math.random() * 100).toFixed(2)}%;left:${(Math.random() * 100).toFixed(2)}%;` +
        `--min-op:${minOp};--max-op:${maxOp};--dur:${dur}s;--delay:${delay}s;`;
      frag.appendChild(star);
    }
    el.appendChild(frag);

    return () => {
      el.innerHTML = "";
    };
  }, []);

  if (!STARS_ENABLED) return null;

  return <div ref={ref} className="stars-field drift" aria-hidden />;
}
