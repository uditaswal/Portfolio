import Image from "next/image";
import { skills } from "../../data";
import Section from "../Section";

/** Tech stack chips. Edit `skills` in data.ts; icons live in /public/logo. */
export default function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies">
      <ul className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <li
            key={s.name}
            className="flex items-center gap-2 border bg-card px-2.5 py-1.5 text-sm"
          >
            <span className="flex size-5 items-center justify-center rounded-sm bg-white p-0.5">
              <Image
                src={`/logo/${s.image}`}
                alt=""
                width={16}
                height={16}
                className="size-4 object-contain"
              />
            </span>
            {s.name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
