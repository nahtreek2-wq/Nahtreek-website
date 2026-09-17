"use client";
import { useState } from "react";
import { Photo, SERVICE_PHOTOS } from "@/components/marketing/Photo";
import {
  Building2,
  Droplets,
  Zap,
  Wrench,
  Paintbrush,
  Hammer,
  Blocks,
  ClipboardCheck,
} from "lucide-react";
import { PROPERTY_SERVICES, CATEGORIES } from "@/data/services";
import { Section, Heading, TextLink } from "@/components/marketing/Primitives";
const icons = {
  Building2,
  Droplets,
  Zap,
  Wrench,
  Paintbrush,
  Hammer,
  Blocks,
  ClipboardCheck,
};
export function PropertyServicesSection({
  showHeading = true,
  featured = false,
}: {
  showHeading?: boolean;
  featured?: boolean;
}) {
  const [category, setCategory] = useState("all");
  const services = PROPERTY_SERVICES.filter(
    (s) => category === "all" || s.category === category,
  ).slice(0, featured ? 4 : 8);
  return (
    <Section id="property-services" tone={featured ? "soft" : "white"}>
      {showHeading && (
        <Heading
          eyebrow="Featured services"
          title="Find the right service for your project."
        >
          From early planning to repairs and finishing. Start with the service
          that fits your property.
        </Heading>
      )}
      {!showHeading && <h2 className="sr-only">Explore Engineering & Home Services</h2>}
      {!featured && (
        <div
          className="service-filters"
          role="group"
          aria-label="Filter services by category"
        >
          {[["all", "All services"], ...Object.entries(CATEGORIES)].map(
            ([key, label]) => (
              <button
                key={key}
                type="button"
                aria-pressed={category === key}
                onClick={() => setCategory(key)}
              >
                {label}
              </button>
            ),
          )}
        </div>
      )}
      {!featured && (
        <p className="service-count" role="status">
          {services.length} services · Explore the scope before you enquire
        </p>
      )}
      <div className={featured ? "grid-2" : "grid-3"}>
        {services.map((s) => {
          const Icon = icons[s.iconName as keyof typeof icons] || Building2;
          return (
            <article className="panel service-card" key={s.id}>
              <Photo kind={SERVICE_PHOTOS[s.slug] || "site"} className="service-photo" />
              <div className="icon-tile">
                <Icon aria-hidden="true" />
              </div>
              <span className="category">{CATEGORIES[s.category]}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <TextLink href={`/services/${s.slug}`}>
                <span>
                  Learn more<span className="sr-only"> about {s.title}</span>
                </span>
              </TextLink>
            </article>
          );
        })}
      </div>
      {featured && (
        <div className="actions">
          <TextLink href="/services">Explore all services</TextLink>
        </div>
      )}
    </Section>
  );
}
