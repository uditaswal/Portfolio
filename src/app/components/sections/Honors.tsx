import { honors } from "../../data";
import CredentialGrid from "../CredentialGrid";
import Section from "../Section";

export default function Honors() {
  return (
    <Section id="honors" title="Honors & Awards">
      <CredentialGrid items={honors} />
    </Section>
  );
}
