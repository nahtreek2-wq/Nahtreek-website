import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Photo, type PhotoKind } from "./Photo";
export function Container({
  children,
  narrow = false,
}: {
  children: ReactNode;
  narrow?: boolean;
}) {
  return (
    <div className={`container${narrow ? " narrow" : ""}`}>{children}</div>
  );
}
export function Section({
  children,
  tone = "",
  id,
}: {
  children: ReactNode;
  tone?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`section ${tone}`}>
      <Container>{children}</Container>
    </section>
  );
}
export function Heading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
export function Action({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}) {
  return (
    <Link className={`button ${variant}`} href={href}>
      {children}
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}
export function PageHero({
  eyebrow,
  title,
  children,
  action,
  image,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  action?: { href: string; label: string };
  image?: PhotoKind;
}) {
  return (
    <section className="page-hero dark">
      <Container>
        <div className={image ? "split page-hero-split" : ""}><div>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{children}</p>
        {action && (
          <div className="actions">
            <Action href={action.href}>{action.label}</Action>
          </div>
        )}
        </div>{image && <Photo kind={image} priority />}</div>
      </Container>
    </section>
  );
}
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
export function CTA({
  title = "Let’s talk about your property.",
  description = "Share your location, project stage and the work you need. We’ll help you discuss the next step.",
  href = "/contact",
  label = "Start an enquiry",
}: {
  title?: string;
  description?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="section cta-band">
      <Container>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Action href={href}>{label}</Action>
      </Container>
    </section>
  );
}
export function InfoGrid({
  items,
}: {
  items: { title: string; description: string; icon?: ReactNode }[];
}) {
  return (
    <div className="grid-3">
      {items.map((item) => (
        <article className="panel" key={item.title}>
          {item.icon && <div className="icon-tile">{item.icon}</div>}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
export function Steps({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <div className="steps">
      {items.map((item, i) => (
        <article className="step" key={item.title}>
          <span className="step-number" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
