import { education } from "../../data";
import Section from "../Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-5">
        {education.map((e) => (
          <li key={e.degree} className="flex gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center border bg-card font-mono text-xs text-muted-foreground">
              {e.period.slice(0, 4)}
            </div>
            <div>
              <h3 className="text-sm font-semibold">{e.degree}</h3>
              <p className="text-sm text-muted-foreground">
                {e.school}
                {e.note && ` · ${e.note}`}
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {e.period}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
