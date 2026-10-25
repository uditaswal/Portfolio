import { profile } from "../../data";
import Section from "../Section";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Want to talk about a project or a role? Reach out by email, or find me
        on LinkedIn and GitHub.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex h-9 items-center bg-foreground px-3 text-sm text-background transition-opacity hover:opacity-90"
        >
          Send an email
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center border px-3 text-sm transition-colors hover:bg-muted"
        >
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center border px-3 text-sm transition-colors hover:bg-muted"
        >
          GitHub
        </a>
      </div>
    </Section>
  );
}
