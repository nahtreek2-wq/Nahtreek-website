import { Building2, House, Wrench, ClipboardCheck } from "lucide-react";
import { Container, Section, Heading, Action, TextLink, InfoGrid, Steps, CTA } from "@/components/marketing/Primitives";
import { Photo } from "@/components/marketing/Photo";
import { PropertyServicesSection } from "@/components/sections/PropertyServicesSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("Engineering, Construction & Home Services", "NAHTREEK connects homeowners and property owners with civil engineers and skilled service professionals for planning, construction, renovation, repairs and maintenance.", "/");
const categories = [
  { icon: Building2, title: "Engineering & Structural", copy: "Structural consultation, planning, inspections and technical guidance.", href: "/services/structural-consultation" },
  { icon: House, title: "Construction & Renovation", copy: "New construction, extensions, remodelling and site-related work.", href: "/services" },
  { icon: Wrench, title: "Home Services", copy: "Electrical, plumbing, carpentry, painting and everyday repairs.", href: "/services" },
  { icon: ClipboardCheck, title: "Inspection & Maintenance", copy: "Waterproofing, condition assessment and ongoing care.", href: "/services/property-audit" },
];
export default function HomePage() {
  return <>
    <section className="hero dark"><Container><div className="split">
      <div><span className="eyebrow">Engineering, Construction & Home Services</span>
        <h1>Build Better.<span>Connect Smarter<span className="accent-period">.</span></span></h1>
        <p className="intro">NAHTREEK connects homeowners and property owners with civil engineers and skilled service professionals for planning, construction, renovation, repairs and maintenance.</p>
        <div className="actions"><Action href="/services">Explore Services</Action><Action href="/how-it-works" variant="outline">How NAHTREEK Works</Action></div>
        <div className="hero-tags"><span>Plan with clarity</span><span>Build with expertise</span><span>Care for your home</span></div>
      </div>
      <figure className="hero-photo"><Photo kind="home" priority /><figcaption>From your first plan to a home that works for you.</figcaption></figure>
    </div></Container></section>
    <Section tone="white"><Heading eyebrow="Start with what you need" title="What can NAHTREEK help you with?" />
      <div className="category-grid">{categories.map(({icon: Icon, title, copy, href})=><article key={title}><div className="icon-tile"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{copy}</p><TextLink href={href}>Explore options</TextLink></article>)}</div>
    </Section>
    <PropertyServicesSection featured />
    <Section tone="white"><Heading eyebrow="How it works" title="A clear route from idea to action.">Start with the need. Discuss the expertise, scope and next step.</Heading><div className="process-flow"><Steps items={[
      {title:"Identify the need",description:"Tell us what you want to build, improve or repair."},
      {title:"Choose a service",description:"Explore the scope and relevant professional expertise."},
      {title:"Send an enquiry",description:"Share your location, priorities and project stage."},
      {title:"Agree the work",description:"Confirm suitability, deliverables, fees and timing."},
    ]} /></div><TextLink href="/how-it-works">See all seven steps</TextLink></Section>
    <Section tone="soft"><div className="split"><Photo kind="interior" /><div><Heading eyebrow="For property owners" title="Your home project starts here.">Building a home, renovating a space or fixing a recurring problem? Understand the service you need and prepare for a useful conversation.</Heading><Action href="/for-clients">Explore the owner journey</Action></div></div></Section>
    <Section tone="dark"><div className="split"><div><Heading eyebrow="For engineers & skilled professionals" title="Let the right people find your expertise.">Introduce your work, service area and experience. Connect with the team about joining NAHTREEK’s developing professional network.</Heading><Action href="/for-professionals">Grow your professional presence</Action></div><Photo kind="site" /></div></Section>
    <ReviewsSection />
    <Section tone="warm"><Heading eyebrow="Why choose NAHTREEK" title="Better information. Better project conversations." /><InfoGrid items={[
      {title:"Services that make sense",description:"Find help by project stage and type of work, from planning to maintenance."},
      {title:"The right questions, early",description:"Understand relevant experience, qualifications and responsibilities before you engage."},
      {title:"Clear scope from the start",description:"Discuss deliverables, fees and exclusions so both sides know what to expect."},
    ]} /></Section>
    <Section tone="white"><div className="app-announcement"><div><span className="eyebrow">Get NAHTREEK</span><h2>Your next project, closer at hand.</h2><p>Client, engineer and service-professional app experiences are in development.</p></div><div><span className="coming-soon">Coming Soon on Google Play</span><TextLink href="/contact?subject=App%20launch%20updates">Ask about launch updates</TextLink></div></div></Section>
    <CTA title="What would you like to build or improve?" description="Tell us about your project, repair or maintenance need. Start with one clear conversation." />
  </>;
}
