import { projects } from "../../data";
import Section, { Tag } from "../Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        {projects.map((p) => (
          <article key={p.title} className="flex flex-col border bg-card p-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold">{p.title}</h3>
              <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
                {p.status}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
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
                  className="inline-flex h-8 items-center border px-3 text-xs transition-colors hover:bg-muted"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
