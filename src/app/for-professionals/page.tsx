import {
  PageHero,
  Section,
  Heading,
  Steps,
  CTA,
  InfoGrid,
  CheckList,
} from "@/components/marketing/Primitives";
import { pageMetadata } from "@/lib/site";
import { Photo } from "@/components/marketing/Photo";
export const metadata = pageMetadata(
  "For engineers & service professionals",
  "Introduce your civil engineering or property-service expertise and express interest in the NAHTREEK platform.",
  "/for-professionals",
);
export default function ProfessionalsPage() {
  return (
    <>
      <PageHero
        eyebrow="For professionals"
        title="Grow Your Professional Presence with NAHTREEK"
        image="roofing"
        action={{
          href: "/contact?type=professional",
          label: "Express your interest",
        }}
      >
        Showcase your expertise and connect with the team about relevant enquiries.
        We’re building a platform to help professionals communicate with clients
        and grow their reputation.
      </PageHero>
      <Section tone="white">
        <Heading
          eyebrow="Who it is for"
          title="Different disciplines. A shared professional standard."
        />
        <div className="grid-2">
          <article className="panel">
            <Photo kind="plans" className="audience-photo" />
            <h3>Civil engineers & consultants</h3>
            <p>
              Discuss your areas of practice, relevant projects and the
              qualifications applicable to the work you undertake.
            </p>
            <CheckList
              items={[
                "Civil and structural engineering",
                "Property inspection and specialist assessment",
                "Planning and building-service consultation",
              ]}
            />
          </article>
          <article className="panel">
            <Photo kind="carpentry" className="audience-photo" />
            <h3>Skilled service professionals</h3>
            <p>
              Introduce the services you offer, your operating area and the
              types of project your team is equipped to handle.
            </p>
            <CheckList
              items={[
                "Plumbing, electrical and maintenance",
                "Painting, carpentry and interiors",
                "Masonry, waterproofing and repairs",
              ]}
            />
          </article>
        </div>
      </Section>
      <Section tone="soft">
        <Heading
          eyebrow="Platform direction"
          title="Designed around meaningful engagements."
        >
          The professional workspace is in development. These are the
          capabilities we aim to support, not a promise of live tools or
          guaranteed leads.
        </Heading>
        <InfoGrid
          items={[
            {
              title: "Present your expertise",
              description:
                "A professional profile that explains specialisms, experience and service areas.",
            },
            {
              title: "Understand enquiries",
              description:
                "Relevant property context to help assess whether the work is a good fit.",
            },
            {
              title: "Manage the conversation",
              description:
                "A clearer record of requirements, agreed deliverables and professional communication.",
            },
          ]}
        />
      </Section>
      <Section tone="white">
        <div className="split">
          <Heading
            eyebrow="Get involved"
            title="Start by introducing your practice."
          >
            There is no instant registration or automatic verification claim.
            Contact the team to discuss the current onboarding process and
            available opportunities.
          </Heading>
          <Steps
            items={[
              {
                title: "Share your professional background",
                description:
                  "Tell us your discipline, service area and type of work. Do not send identity documents through the enquiry form.",
              },
              {
                title: "Discuss suitability",
                description:
                  "The team can clarify current opportunities and any information needed for profile review.",
              },
              {
                title: "Agree the next step",
                description:
                  "Confirm applicable terms and any required checks before a profile or engagement goes live.",
              },
            ]}
          />
        </div>
        <p className="notice">
          Professionals are responsible for accurate information, applicable
          permissions and qualifications, the services they provide, and the
          reports or advice they issue. Participation does not guarantee
          enquiries or earnings.
        </p>
      </Section>
      <CTA
        title="Let’s learn about your expertise."
        description="Tell us what you do, where you work and the property needs you help address."
        href="/contact?type=professional"
        label="Express your interest"
      />
    </>
  );
}
