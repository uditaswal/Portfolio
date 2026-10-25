import { experience } from "../../data";
import Section, { Tag } from "../Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ul className="space-y-8">
        {experience.map((e) => (
          <li key={e.role} className="flex gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center border bg-card font-mono text-sm font-bold">
              HCL
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold">{e.role}</h3>
              <p className="text-sm text-muted-foreground">
                {e.company} · {e.detail}
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {e.period}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
