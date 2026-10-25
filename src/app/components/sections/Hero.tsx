import Image from "next/image";
import { profile } from "../../data";
import Banner from "../Banner";
import CommandPalette from "../CommandPalette";
import ThemeToggle from "../ThemeToggle";

/**
 * Every contact button, in display order. `external` links open in a new tab;
 * `download` makes the browser save the file instead of opening it.
 */
const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Resume", href: profile.resume, download: true },
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
            <ThemeToggle />
          </div>
        </div>

        <h1 className="mt-4 text-2xl font-bold tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {profile.role} @{" "}
          <a
            href={profile.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-4 hover:underline"
          >
            {profile.company}
          </a>
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
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              download={link.download}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={buttonClass}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
