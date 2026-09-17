import {
  PageHero,
  Section,
  Heading,
  Steps,
  CTA,
  InfoGrid,
  Action,
} from "@/components/marketing/Primitives";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "For property owners & clients",
  "A practical guide to finding civil engineering and property-service expertise, comparing scope and starting an enquiry.",
  "/for-clients",
);
const steps = [
  {
    title: "Discover",
    description:
      "Browse services by the work you need—not just a list of names.",
  },
  {
    title: "Compare",
    description:
      "Discuss relevant experience, qualifications, scope and exclusions before choosing.",
  },
  {
    title: "Request",
    description:
      "Share your property location, project stage and preferred timeline with the team.",
  },
  {
    title: "Communicate",
    description:
      "Agree who will carry out the work, what will be delivered and how changes are handled.",
  },
  {
    title: "Track",
    description:
      "Keep written records of agreed milestones and progress with the professional.",
  },
  {
    title: "Review",
    description:
      "Check the completed scope, ask questions and share factual feedback with the team.",
  },
];
export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="For clients"
        title="Everything Your Home Project Needs, in One Place"
        image="living"
        action={{ href: "/services", label: "Explore services" }}
      >
        Whether you are building a new home, renovating an existing one,
        fixing a problem or planning regular maintenance, NAHTREEK helps
        you understand what service you need and connect with the right professional.
      </PageHero>
      <Section tone="white">
        <Heading
          eyebrow="More than a contact list"
          title="Give your next conversation a better starting point."
        >
          Referrals, search results and local groups can help you find names.
          NAHTREEK’s service guides help you define what to ask those
          professionals to do.
        </Heading>
        <InfoGrid
          items={[
            {
              title: "Organised by requirement",
              description:
                "Explore engineering, building services, finishing and maintenance in one place.",
            },
            {
              title: "Scope before commitment",
              description:
                "Understand typical discussion points without assuming a fixed package or price.",
            },
            {
              title: "A useful enquiry",
              description:
                "Share your location and project context so the next conversation can be more specific.",
            },
          ]}
        />
      </Section>
      <Section tone="soft">
        <div className="split">
          <div>
            <Heading
              eyebrow="Your engagement journey"
              title="From discovery to a considered decision."
            >
              The website currently supports service discovery and enquiries.
              Scheduling, work and progress arrangements are confirmed
              directly—not through a live booking app.
            </Heading>
            <Action href="/contact">Discuss your requirement</Action>
          </div>
          <Steps items={steps} />
        </div>
      </Section>
      <CTA
        title="Not sure which service you need?"
        description="Describe the issue or idea in your own words. You can discuss the appropriate next step before committing to work."
      />
    </>
  );
}
