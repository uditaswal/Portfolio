"use client";

import { useEffect, useState } from "react";
import { sections } from "../data";

/**
 * Sticky section links above the scrolling column. The active link is the
 * section whose top edge is closest to (but not below) a line 30% down the
 * window. Links come from `sections` in data.ts.
 */
export default function TopNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.3;
      let best = sections[0].id;
      let bestTop = -Infinity;
      for (const { id } of sections) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= line && top > bestTop) {
          best = id;
          bestTop = top;
        }
      }
      setActive(best);
    };

    update();
    // `scroll` does not bubble, so listen in the capture phase. That catches the
    // window on small screens and the right-hand column on wide ones.
    document.addEventListener("scroll", update, { capture: true, passive: true });
    window.addEventListener("resize", update);
    return () => {
      document.removeEventListener("scroll", update, { capture: true });
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-30 flex gap-6 overflow-x-auto border-b bg-background/95 px-6 py-3 text-sm lg:px-10"
    >
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`shrink-0 transition-colors hover:text-foreground ${
            active === id ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
