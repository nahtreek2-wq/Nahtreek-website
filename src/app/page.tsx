import { BadgeCheck, CalendarCheck } from "lucide-react";
import { Hero } from "@/components/marketing/Primitives";
import { Photo } from "@/components/marketing/Photo";
import { AppsSection, TrustMarquee } from "@/components/sections/AppsSection";
import { AiShowcaseSection } from "@/components/sections/AiShowcaseSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { HomeFaqSection } from "@/components/sections/HomeSections";
import { PricingSection } from "@/components/sections/PricingSection";
import { PropertyServicesSection } from "@/components/sections/PropertyServicesSection";
import { CategorySection } from "@/components/categories/CategorySection";
import { CTA } from "@/components/marketing/Primitives";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Civil Engineering, Home Services & AI Project Planning",
  "NAHTREEK connects homeowners with verified civil engineers and home-service professionals. Plan with NAHTREEK AI, book trusted pros, track every job.",
  "/",
);

export default function HomePage() {
  return (
    <>
      <Hero
        badge="Now live in preview"
        title="From plot to home,"
        accent="handled."
        intro="NAHTREEK connects you with verified civil engineers and home-service professionals — plan with AI, agree scope in-app, and track every job to handover."
        primary={{ href: "/for-clients", label: "Get the Home app" }}
        secondary={{ href: "/for-professionals", label: "I'm a professional" }}
        stats={[
          { value: "100%", label: "Verified pros only" },
          { value: "8+", label: "Service categories" },
          { value: "₹99", label: "AI planner /month" },
        ]}
        visual={
          <>
            <div className="hero-card">
              <Photo kind="home" priority sizes="(max-width: 900px) 100vw, 48vw" />
            </div>
            <div className="hero-card-float hero-float-1">
              <BadgeCheck aria-hidden="true" />
              Verified engineer assigned
            </div>
            <div className="hero-card-float hero-float-2">
              <CalendarCheck aria-hidden="true" />
              Site visit booked · Tue 10 AM
            </div>
          </>
        }
      />
      <TrustMarquee />
      <CategorySection />
      <AiShowcaseSection />
      <EcosystemSection />
      <PropertyServicesSection showHeading featured />
      <AppsSection />
      <PricingSection />
      <HomeFaqSection />
      <CTA
        title="Your next project starts with a clear plan."
        description="Tell us about your property and the work you need — get an AI plan, meet verified pros, and track it all in one place."
        href="/contact"
        label="Request preview access"
      />
    </>
  );
}
