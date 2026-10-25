"use client";

import { useEffect, useState } from "react";
import { sections } from "../data";

export default function TopNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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
