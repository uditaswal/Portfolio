"use client";

import { useEffect, useRef } from "react";
import { projects, type Project } from "../../data";
import Section, { Tag } from "../Section";

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Scroll projects left" : "Scroll projects right"}
      className="flex size-8 shrink-0 items-center justify-center border bg-card transition-colors hover:bg-muted"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4"
        aria-hidden
      >
        {direction === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}

function ProjectCard({ p, hidden }: { p: Project; hidden?: boolean }) {
  return (
    <article
      data-card
      aria-hidden={hidden}
      className="flex w-[300px] shrink-0 snap-start flex-col border bg-card p-4 sm:w-[340px]"
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold">{p.title}</h3>
        <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
          {p.status}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
      {p.points && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
          {p.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {p.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={hidden ? -1 : undefined}
            className="inline-flex h-8 items-center border px-3 text-xs transition-colors hover:bg-muted"
          >
            {l.label} ↗
          </a>
        ))}
      </div>
    </article>
  );
}

/**
 * Project cards in an endless horizontal carousel: the list is rendered twice
 * so there's always a next/previous card to scroll to, and once the track
 * crosses into the duplicate half it's snapped back by exactly one set-width
 * (no animation, so it's invisible) to keep it scrolling forever in either
 * direction. Add or edit projects in `projects` in data.ts.
 */
export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const recenter = () => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth / 2;
  };

  useEffect(() => {
    recenter();

    const el = trackRef.current;
    if (!el) return;

    let timeout: ReturnType<typeof setTimeout>;
    const wrapWhenIdle = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const setWidth = el.scrollWidth / 2;
        if (el.scrollLeft <= 1) {
          el.scrollLeft += setWidth;
        } else if (el.scrollLeft >= setWidth * 2 - el.clientWidth - 1) {
          el.scrollLeft -= setWidth;
        }
      }, 120);
    };

    el.addEventListener("scroll", wrapWhenIdle);
    window.addEventListener("resize", recenter);
    return () => {
      clearTimeout(timeout);
      el.removeEventListener("scroll", wrapWhenIdle);
      window.removeEventListener("resize", recenter);
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <Section id="projects" title="Projects">
      <div className="mb-3 flex items-center justify-end gap-2">
        <ArrowButton direction="left" onClick={() => scrollByCard(-1)} />
        <ArrowButton direction="right" onClick={() => scrollByCard(1)} />
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent" />
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-1 pb-2"
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
          {projects.map((p) => (
            <ProjectCard key={`dup-${p.title}`} p={p} hidden />
          ))}
        </div>
      </div>
    </Section>
  );
}
