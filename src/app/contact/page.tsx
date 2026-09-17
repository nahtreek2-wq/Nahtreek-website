import { PageHero, Section } from "@/components/marketing/Primitives";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { PROPERTY_SERVICES } from "@/data/services";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Contact & enquiries",
  "Contact NAHTREEK about property services, engineering consultations and professional onboarding interest.",
  "/contact",
);
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; type?: string }>;
}) {
  const query = await searchParams;
  const service = PROPERTY_SERVICES.find((s) => s.slug === query.service);
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what you have in mind.">
        A property project, a maintenance concern or professional interest—start
        with a few details so we can discuss the right next step.
      </PageHero>
      <Section>
        <ContactFormSection
          key={service?.slug || query.type || "general"}
          serviceName={service?.title}
          professional={query.type === "professional"}
        />
      </Section>
    </>
  );
}
