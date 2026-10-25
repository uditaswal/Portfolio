"use client";

import { useEffect, useState } from "react";
import { sections } from "../data";

export default function SideIndex() {
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
    <aside className="fixed top-24 left-[calc(50%+22rem)] hidden w-36 xl:block">
      <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground">
        INDEX
      </p>
      <ul className="space-y-2 border-l pl-4 text-sm">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`transition-colors hover:text-foreground ${
                active === id
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
