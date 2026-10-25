import { experience } from "../../data";
import Section, { Tag } from "../Section";

/**
 * Work history as a LinkedIn-style timeline: one block per company, with that
 * company's roles hanging off a vertical line. Edit `experience` in data.ts.
 */
export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((job) => (
          <article key={job.company}>
            <header className="flex items-center gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center border bg-card font-mono text-sm font-bold">
                {job.logo}
              </div>
              <div>
                <h3 className="font-semibold">{job.company}</h3>
                {job.tenure && (
                  <p className="text-sm text-muted-foreground">{job.tenure}</p>
                )}
                {job.location && (
                  <p className="text-sm text-muted-foreground">
                    {job.location}
                  </p>
                )}
              </div>
            </header>

            {job.skills && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            )}

            {/* The left border is the timeline; each role's dot sits on it. */}
            <ol className="mt-5 ml-6 space-y-5 border-l">
              {job.roles.map((role) => {
                // "Full-time · Oct 2025 - Present · 3 yrs · Remote", skipping blanks.
                const meta = [
                  role.type,
                  role.period,
                  role.duration,
                  role.mode,
                ]
                  .filter(Boolean)
                  .join(" · ");

                return (
                  <li key={role.title + role.period} className="relative pl-6">
                    <span
                      className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-muted-foreground"
                      aria-hidden
                    />

                    {role.compact ? (
                      // Short row: title, then dates and length in grey. Type and
                      // work mode are left out here to keep it uncluttered.
                      <p className="flex flex-wrap items-baseline gap-x-2 text-sm">
                        <span className="font-semibold">{role.title}</span>
                        <span className="text-muted-foreground">
                          {[role.period, role.duration].filter(Boolean).join(" · ")}
                        </span>
                      </p>
                    ) : (
                      <>
                        <h4 className="font-semibold">{role.title}</h4>
                        <p className="text-sm text-muted-foreground">{meta}</p>

                        {role.points && (
                          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                            {role.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        )}

                        {role.skills && (
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {role.skills.map((skill) => (
                              <Tag key={skill}>{skill}</Tag>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </article>
        ))}
      </div>
    </Section>
  );
}
