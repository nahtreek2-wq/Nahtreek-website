import { MessageSquareQuote } from "lucide-react";
import { Heading, Section } from "@/components/marketing/Primitives";

export function ReviewsSection() {
  return (
    <Section tone="white" id="reviews">
      <Heading
        eyebrow="Reviews & ratings"
        title="Good work should be easy to recognise."
      >
        Customer experiences will help you understand the work, communication
        and care behind each engagement.
      </Heading>
      <div className="review-empty" role="status">
        <div className="icon-tile">
          <MessageSquareQuote aria-hidden="true" />
        </div>
        <div>
          <h3>Real customer reviews will appear here</h3>
          <p>
            Real customer reviews will appear as the NAHTREEK community grows.
            Explore our service guides or contact the team to get started.
          </p>
        </div>
      </div>
    </Section>
  );
}
