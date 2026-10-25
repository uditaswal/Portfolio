import { certificates } from "../../data";
import CredentialGrid from "../CredentialGrid";
import Section from "../Section";

export default function Certificates() {
  return (
    <Section id="certificates" title="Certificates">
      <CredentialGrid items={certificates} />
    </Section>
  );
}
