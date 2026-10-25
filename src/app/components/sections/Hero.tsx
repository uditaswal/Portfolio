import Image from "next/image";
import { profile } from "../../data";
import Banner from "../Banner";
import CommandPalette from "../CommandPalette";
import ThemeToggle from "../ThemeToggle";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

const buttonClass =
  "inline-flex h-9 items-center border px-3 text-sm transition-colors hover:bg-muted";

export default function Hero() {
  return (
    <section id="top">
      <Banner />
      <div className="px-6 pb-8">
        <div className="-mt-10 flex items-end justify-between">
          <div className="relative size-20 overflow-hidden rounded-full border-2 bg-background sm:size-24">
            <Image
              src="/berserk.jpg"
              alt="Udit Aswal"
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

        <ul className="mt-5 list-disc space-y-1.5 pl-5 text-sm leading-relaxed marker:text-muted-foreground">
          <li>I like building scalable applications and shipping them to production.</li>
          <li>Azure certified: AZ-900, AI-900 and AZ-204.</li>
          <li>Recognised at HCLTech with Rising Star, Star Performer and Innovation Champion awards.</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          <a href={`mailto:${profile.email}`} className={buttonClass}>
            Send an email
          </a>
          <a href={profile.resume} download className={buttonClass}>
            Download resume
          </a>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Here are my <span className="font-semibold text-foreground">socials</span>
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
