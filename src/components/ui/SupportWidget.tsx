"use client";
import { useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { TextLink } from "@/components/marketing/Primitives";
export function SupportWidget() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <div
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      {open && (
        <aside
          className="support-panel panel"
          id="quick-help"
          aria-label="Quick help"
        >
          <h2>How can we help?</h2>
          <p>Choose a next step. This is a help menu, not a live chat.</p>
          <div onClick={() => setOpen(false)}>
            <TextLink href="/services">Explore services</TextLink>
            <TextLink href="/for-professionals">
              Professional enquiries
            </TextLink>
            <TextLink href="/contact">Contact the team</TextLink>
          </div>
        </aside>
      )}
      <button
        className="support-launch"
        ref={trigger}
        aria-label={open ? "Close quick help" : "Open quick help"}
        aria-expanded={open}
        aria-controls="quick-help"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <MessageCircle />}
      </button>
    </div>
  );
}
