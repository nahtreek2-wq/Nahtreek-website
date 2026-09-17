import {
  PageHero,
  Section,
  Heading,
  Steps,
  CTA,
} from "@/components/marketing/Primitives";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "How NAHTREEK works",
  "Understand the steps from identifying a property requirement to discussing scope, engaging a professional and providing feedback.",
  "/how-it-works",
);
const steps = [
  {
    title: "Identify need",
    description:
      "Start with your property type, location and the work or concern you want to address.",
  },
  {
    title: "Choose service",
    description:
      "Use the service guides to understand which discipline may be appropriate.",
  },
  {
    title: "Find a relevant professional",
    description:
      "Ask about relevant experience, applicable qualifications and who will perform the work.",
  },
  {
    title: "Send an enquiry",
    description:
      "Contact the NAHTREEK team with your requirement. An enquiry does not confirm availability or create a booking.",
  },
  {
    title: "Agree scope",
    description:
      "Discuss the scope, site access, fees, timing, exclusions and communication arrangements.",
  },
  {
    title: "Complete work",
    description:
      "Work and deliverables are agreed with the professional. Keep a record of progress and any changes.",
  },
  {
    title: "Review experience",
    description:
      "Check the agreed deliverables and share factual feedback or concerns with the team.",
  },
];
const faqs = [
  [
    "Can I book or pay through this website?",
    "No. This website provides service information and an enquiry channel. Booking, payment and scheduling tools are not live here. Agree engagement details directly before work begins.",
  ],
  [
    "Are the app screens and profiles real?",
    "They are clearly labelled product previews with sample information. They do not represent a live professional, verified credential, current price or availability.",
  ],
  [
    "Does NAHTREEK certify engineering work?",
    "No. NAHTREEK facilitates connections. Qualified professionals are responsible for their technical advice, reports, designs, inspections and certifications.",
  ],
  [
    "How much will a service cost?",
    "Fees depend on the property, location and agreed scope. Ask for a written quotation and clarify exclusions, additional visits and any reporting charges.",
  ],
  [
    "Can service professionals express interest?",
    "Yes. Engineers, consultants and property-service professionals can contact the team with their discipline, experience and service area.",
  ],
  [
    "What should I do for an urgent safety issue?",
    "Do not rely on this enquiry channel for emergencies. Contact appropriate local emergency services or a qualified local professional for urgent assistance.",
  ],
];
export default function HowPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        image="carpentry"
        title="A clear process, from need to next step."
        action={{ href: "/services", label: "Explore services" }}
      >
        Good property decisions begin with context, relevant expertise and clear
        agreements. Here is a practical guide to the engagement journey.
      </PageHero>
      <Section tone="white">
        <div className="process-flow process-seven">
          <Steps items={steps} />
        </div>
      </Section>
      <Section tone="soft">
        <div className="container narrow">
          <Heading
            eyebrow="Questions, answered"
            title="Before you get started"
          />
          {faqs.map(([q, a]) => (
            <details className="faq" key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
