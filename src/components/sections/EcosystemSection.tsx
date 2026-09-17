"use client";
import { useRef, useState } from "react";
import {
  Section,
  Heading,
  CheckList,
  TextLink,
} from "@/components/marketing/Primitives";
const previews = [
  {
    id: "client",
    label: "Clients",
    title: "A clearer view of your property needs.",
    description:
      "A preview of how owners could organise their requirements and professional conversations.",
    features: [
      "Describe the work and property location",
      "Compare relevant professional information",
      "Keep agreed scope and next steps together",
    ],
    rows: [
      ["Requirement", "Home renovation"],
      ["Service", "Civil consultation"],
      ["Next step", "Discuss scope"],
    ],
    href: "/for-clients",
  },
  {
    id: "engineer",
    label: "Engineers",
    title: "Make your expertise easier to understand.",
    description:
      "A proposed workspace for engineering profiles, consultation requests and project communication.",
    features: [
      "Present disciplines and project experience",
      "Review the context behind an enquiry",
      "Organise conversations and agreed deliverables",
    ],
    rows: [
      ["Discipline", "Civil engineering"],
      ["Profile", "Sample profile"],
      ["Workspace", "Consultation overview"],
    ],
    href: "/for-professionals",
  },
  {
    id: "services",
    label: "Service pros",
    title: "Bring structure to everyday service work.",
    description:
      "An example of how service professionals could describe their work and review property requirements.",
    features: [
      "Show service areas and specialisms",
      "Understand what the property needs",
      "Discuss scope, materials and scheduling",
    ],
    rows: [
      ["Specialism", "Property maintenance"],
      ["Enquiry", "Repair assessment"],
      ["Next step", "Clarify requirements"],
    ],
    href: "/for-professionals",
  },
];
export function EcosystemSection() {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const app = previews[selected];
  function select(index: number) {
    setSelected(index);
    buttons.current[index]?.focus();
  }
  return (
    <Section tone="dark" id="product-preview">
      <Heading
        eyebrow="Product direction · Preview"
        title="One connected experience. Different perspectives."
      >
        Explore the proposed client, engineer and service-professional
        experiences. These are illustrative screens, not live apps or booking
        tools.
      </Heading>
      <div className="app-tabs" role="tablist" aria-label="Product previews">
        {previews.map((p, i) => (
          <button
            key={p.id}
            ref={(el) => {
              buttons.current[i] = el;
            }}
            id={`tab-${p.id}`}
            role="tab"
            aria-selected={selected === i}
            aria-controls="product-panel"
            tabIndex={selected === i ? 0 : -1}
            onClick={() => setSelected(i)}
            onKeyDown={(e) => {
              if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                select(
                  e.key === "Home"
                    ? 0
                    : e.key === "End"
                      ? 2
                      : (i + (e.key === "ArrowRight" ? 1 : 2)) % 3,
                );
              }
            }}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div
        className="app-panel"
        role="tabpanel"
        id="product-panel"
        aria-labelledby={`tab-${app.id}`}
        tabIndex={0}
      >
        <div>
          <span className="sample-label">UI preview — sample data</span>
          <h3>{app.title}</h3>
          <p>{app.description}</p>
          <CheckList items={app.features} />
          <div className="actions">
            <TextLink href={app.href}>Learn about this experience</TextLink>
          </div>
        </div>
        <div className="app-screen">
          <div className="preview-top">
            <strong>NAHTREEK</strong>
            <span className="sample-label">Concept preview</span>
          </div>
          <h4>{app.label} workspace</h4>
          <p>Information organised around the work.</p>
          {app.rows.map(([label, value]) => (
            <div className="preview-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
          <p className="notice">
            Sample information only. No live profile, price or availability is
            shown.
          </p>
        </div>
      </div>
    </Section>
  );
}
