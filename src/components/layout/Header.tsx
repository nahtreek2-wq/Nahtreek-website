"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAVIGATION } from "@/lib/site";
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const active = (href: string) =>
    href === "/" ? path === "/" : path.startsWith(href);
  function close() {
    setOpen(false);
  }
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          close();
          toggle.current?.focus();
        }
      }}
    >
      <div className="container header-row">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {NAVIGATION.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={active(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-cta">
          <Link className="button primary" href="/contact">
            Get in touch
          </Link>
        </div>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="mobile-nav" id="mobile-navigation">
          <nav aria-label="Mobile navigation">
            {NAVIGATION.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={close}
                aria-current={active(href) ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link className="button primary" href="/contact" onClick={close}>
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}
