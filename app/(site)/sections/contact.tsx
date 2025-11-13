import Link from "next/link";
import { siteCopy } from "@/lib/site-config";
import { SectionHeading } from "../components/section-heading";

const CONTACT_OPTIONS = [
  {
    label: "Share project context via email",
    href: siteCopy.email,
    description:
      "Send over a short brief, target platforms, and desired timeline. I respond with next steps within one business day.",
    accent: "Email",
  },
  {
    label: "Start a WhatsApp thread",
    href: siteCopy.whatsapp,
    description:
      "Perfect for quick syncs and urgent performance fire drills. Expect a reply during GMT+5:30 evenings.",
    accent: "WhatsApp",
  },
  {
    label: "Book a discovery call",
    href: siteCopy.calendly,
    description:
      "Lock a 25-minute slot to discuss scope, NDA needs, and engagement models.",
    accent: "Call",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="space-y-12 rounded-3xl border border-primary/40 bg-primary/10 px-6 py-16 shadow-sm sm:px-10"
    >
      <SectionHeading
        eyebrow="Let&apos;s talk"
        title="Tell me about your project"
        lead="I consult alongside a full-time role, so I take on a limited number of engagements at once. Share what you&apos;re building and I&apos;ll outline the best way to help."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {CONTACT_OPTIONS.map((option) => (
          <Link
            key={option.href}
            href={option.href}
            target={option.href.startsWith("http") ? "_blank" : undefined}
            rel={option.href.startsWith("http") ? "noreferrer" : undefined}
            className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-primary/30 bg-background/95 p-6 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20"
          >
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
                {option.accent}
              </span>
              <h3 className="text-lg font-semibold text-foreground">{option.label}</h3>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </div>
            <span className="text-sm font-semibold text-primary">Go →</span>
          </Link>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground">
        Confidentiality-first: I omit employer details online and operate under mutual NDAs. Case studies available privately.
      </p>
    </section>
  );
}
