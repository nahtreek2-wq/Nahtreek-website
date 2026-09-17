import { Target, Compass, Users } from "lucide-react";
import {
  PageHero,
  Section,
  Heading,
  InfoGrid,
  CTA,
  CheckList,
} from "@/components/marketing/Primitives";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "About NAHTREEK",
  "Learn why NAHTREEK is being built to connect property owners, civil engineers and property-service professionals.",
  "/about",
);
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NAHTREEK"
        image="plans"
        title="Better connections for better property decisions."
      >
        NAHTREEK is a digital platform that helps homeowners and property
        owners find the right civil engineering, construction and home-service
        professionals for each stage of their project.
      </PageHero>
      <Section tone="white">
        <div className="split">
          <Heading
            eyebrow="Why we exist"
            title="Property work involves more than finding a contact."
          >
            Owners need to understand the expertise involved. Professionals need
            context about the property and the work. NAHTREEK aims to bring
            those conversations together.
          </Heading>
          <div>
            <h3>From plot to home—and beyond.</h3>
            <p className="mt-4">
              Planning, construction, renovation, repairs and maintenance each call for
              different skills. A structured starting point helps both sides
              discuss the right scope, responsibilities and expectations.
            </p>
            <CheckList
              items={[
                "Property owners and plot buyers",
                "Civil engineers and specialist consultants",
                "Property-service professionals and maintenance teams",
              ]}
            />
          </div>
        </div>
      </Section>
      <Section tone="soft">
        <InfoGrid
          items={[
            {
              icon: <Target />,
              title: "Our mission",
              description:
                "Help people describe their property needs and connect with relevant professional expertise.",
            },
            {
              icon: <Compass />,
              title: "Our vision",
              description:
                "A more organised property-services experience, from early decisions to long-term care.",
            },
            {
              icon: <Users />,
              title: "Our approach",
              description:
                "Useful information, realistic expectations and direct conversations between owners and professionals.",
            },
          ]}
        />
      </Section>
      <Section tone="white">
        <Heading
          eyebrow="Where we are today"
          title="A practical website. A developing platform."
        >
          You can explore service information and contact the team about your
          requirements or professional interest. The app screens on this website
          illustrate the product direction; they are not live booking, payment
          or profile-management tools.
        </Heading>
        <p className="notice">
          NAHTREEK does not itself certify buildings or guarantee professional
          outcomes. Technical decisions and regulated work must be handled by
          appropriately qualified professionals.
        </p>
      </Section>
      <CTA />
    </>
  );
}
