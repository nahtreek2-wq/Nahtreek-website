import { Building2, HardHat, House } from "lucide-react";
import { Heading, Section, TextLink } from "@/components/marketing/Primitives";

const experiences = [
  [House, "For property owners", "Prepare a clearer requirement before you speak to a professional.", "/for-clients"],
  [HardHat, "For professionals", "Present your disciplines, experience and approach with confidence.", "/for-professionals"],
  [Building2, "For service teams", "Organise everyday property work around a defined scope.", "/services"],
] as const;

export function GetNahtreekSection() {
  return (
    <Section tone="soft">
      <Heading eyebrow="Get NAHTREEK" title="A more considered way to move property work forward.">
        The platform is being shaped around useful conversations, transparent
        scope and practical progress. Explore the experience that fits you.
      </Heading>
      <div className="grid-3">
        {experiences.map(([Icon, title, description, href]) => (
          <article className="panel app-journey" key={title}>
            <div className="icon-tile"><Icon aria-hidden="true" /></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <TextLink href={href}>Explore the experience</TextLink>
          </article>
        ))}
      </div>
      <div className="availability-note">
        <strong>Mobile apps are coming soon.</strong>
        <span>For now, explore NAHTREEK on the web or contact our team for updates.</span>
      </div>
    </Section>
  );
}
