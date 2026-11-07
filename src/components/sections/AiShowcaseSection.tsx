import { Sparkles, Camera, ListChecks, MessageCircle } from "lucide-react";
import { Heading, Section, Action, Reveal } from "@/components/marketing/Primitives";

const points = [
  {
    icon: MessageCircle,
    title: "Talk through your project",
    text: "Describe the work in plain words — English or Tamil — and get a structured plan back.",
  },
  {
    icon: Camera,
    title: "Analyse site photos",
    text: "Upload a photo of the leak, crack or room and get findings, urgency and the right pro to call.",
  },
  {
    icon: ListChecks,
    title: "Get a prioritised plan",
    text: "Stages, checklists and sharp questions to ask — ready before a professional visits.",
  },
];

export function AiShowcaseSection() {
  return (
    <Section tone="dark" blueprint id="ai-planner">
      <div className="ai-showcase">
        <div>
          <Heading eyebrow="NAHTREEK AI" title="Your project, planned before the first visit.">
            Stop guessing scope and cost. NAHTREEK AI turns a rough idea into a
            clear, prioritised plan — free to start in the Home app.
          </Heading>
          <div className="ai-points">
            {points.map((point) => (
              <div className="ai-point" key={point.title}>
                <point.icon aria-hidden="true" />
                <div>
                  <strong>{point.title}</strong>
                  <span>{point.text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="actions">
            <Action href="/for-clients#ai-planner">See how it works</Action>
            <Action href="/contact" variant="outline">Request preview access</Action>
          </div>
        </div>
        <Reveal delay={0.15}>
          <div className="chat-mock" role="img" aria-label="Sample NAHTREEK AI conversation planning a seepage repair">
            <div className="chat-mock-header">
              <span className="dot" aria-hidden="true" />
              <strong>NAHTREEK AI</strong>
              <span>₹99/month · 5 free chats</span>
            </div>
            <div className="chat-mock-body">
              <p className="chat-line user">Seepage near my bedroom window every monsoon. 2BHK in Chennai — where do I start?</p>
              <p className="chat-line ai"><b>Understood:</b> monsoon seepage near a bedroom window, 8-year-old flat.</p>
              <p className="chat-line ai"><b>Do this first:</b> book a waterproofing pro for a site diagnosis — exterior source first, paint last.</p>
              <p className="chat-line ai"><b>Watch out:</b> repainting inside only hides the stain; water returns unless the frame and sill are sealed.</p>
              <p className="chat-line ai"><b>One question:</b> does the patch grow during heavy rain, or stay constant after?</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function AiBadge() {
  return (
    <span className="chip">
      <Sparkles aria-hidden="true" />
      NAHTREEK AI inside
    </span>
  );
}
