import { certificates, honors } from "../../data";
import Marquee from "../Marquee";
import Section from "../Section";

/** Certificates and honors as two scrolling rows. Edit the lists in data.ts. */
export default function Highlights() {
  return (
    <Section id="highlights" title="Highlights">
      <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground">
        CERTIFICATES
      </p>
      <Marquee items={certificates} />
      <p className="mt-6 mb-3 font-mono text-xs tracking-widest text-muted-foreground">
        HONORS &amp; AWARDS
      </p>
      <Marquee items={honors} reverse />
    </Section>
  );
}
