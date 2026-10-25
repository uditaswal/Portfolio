import { profile } from "../../data";
import Section from "../Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="flex gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center border bg-card font-mono text-sm font-bold">
          HCL
        </div>
        <div>
          <h3 className="font-semibold">{profile.role}</h3>
          <p className="text-sm text-muted-foreground">{profile.company}</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-muted-foreground">
            <li>Building and shipping scalable applications.</li>
            <li>
              Recognised with the Rising Star, Star Performer, ERS Star Champion
              and Innovation Champion awards. See{" "}
              <a href="#highlights" className="text-foreground underline-offset-4 hover:underline">
                Highlights
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
