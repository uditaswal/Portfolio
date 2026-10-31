import Image from "next/image";
import { profile } from "../../data";
import Banner from "../Banner";
import CommandPalette from "../CommandPalette";
import ResumeButton from "../ResumeButton";
// import ThemeToggle from "../ThemeToggle";

/**
 * Every contact button, in display order. `external` links open in a new tab.
 * The `resume` entry is rendered by <ResumeButton>, which handles a missing file.
 */
const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Resume", href: profile.resume, resume: true },
  { label: "GitHub", href: profile.github, external: true },
  { label: "LinkedIn", href: profile.linkedin, external: true },
];

const buttonClass =
  "inline-flex h-9 items-center border px-3 text-sm transition-colors hover:bg-muted";

/** The profile panel: banner, avatar, intro and contact buttons. It is the fixed left rail on wide screens. */
export default function Hero() {
  return (
    <section id="top">
      <Banner />
      <div className="px-6 pb-8">
        {/* Avatar overlaps the banner; the controls sit on the right. */}
        <div className="-mt-10 flex items-end justify-between">
          <div className="relative size-20 overflow-hidden rounded-full border-2 bg-background sm:size-24">
            <Image
              src="/berserk.jpg"
              alt={profile.name}
              fill
              sizes="96px"
              priority
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-2 pb-1">
            <CommandPalette />
            {/* <ThemeToggle /> */}
          </div>
        </div>

        <h1 className="mt-4 text-2xl font-bold tracking-tight">
          {profile.name}
        </h1>
        {/* Previous subtitle:
        <p className="mt-1 text-sm text-muted-foreground">
          {profile.role} @{" "}
          <a href={profile.companyUrl} ...>{profile.company}</a>
        </p> */}
        <p className="mt-1 text-sm">
          {profile.age}-year-old {profile.role} at{" "}
          <a
            href={profile.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-4 hover:underline"
          >
            {profile.company}
          </a>{" "}
          with {profile.yearsOfExperience} years of experience
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          On-call since 12th grade.
        </p>

        {/* <ul className="mt-5 list-disc space-y-1.5 pl-5 text-sm leading-relaxed marker:text-muted-foreground">
          <li>
            I like building scalable applications and shipping them to
            production.
          </li>
          <li>Azure certified: AZ-204,AZ-900, AI-900.</li>
          <li>
            Recognised at HCLTech with Rising Star, Star Performer and
            Innovation Champion awards.
          </li>
        </ul> */}

        <div className="mt-6 flex flex-wrap gap-2">
          {links.map((link) =>
            link.resume ? (
              <ResumeButton key={link.label} className={buttonClass} />
            ) : (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={buttonClass}
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
