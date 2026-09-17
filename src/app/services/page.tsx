import { PageHero, CTA } from "@/components/marketing/Primitives";
import { PropertyServicesSection } from "@/components/sections/PropertyServicesSection";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Engineering & Home Services",
  "Browse civil engineering, plumbing, electrical, waterproofing, painting, carpentry and property inspection services.",
  "/services",
);
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Find the Right Service for Your Project"
        image="site"
      >
        Explore the service scope, understand when it may help, and discuss your
        requirements. Fees, availability and deliverables are confirmed for each
        engagement.
      </PageHero>
      <PropertyServicesSection showHeading={false} />
      <CTA
        title="Have a requirement that spans several services?"
        description="Tell us about the overall project so you can discuss which expertise is needed first."
      />
    </>
  );
}
