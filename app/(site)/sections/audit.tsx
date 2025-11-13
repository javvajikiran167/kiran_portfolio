import Link from "next/link";
import { siteCopy } from "@/lib/site-config";
import { SectionHeading } from "../components/section-heading";

const AUDIT_STEPS = [
  {
    title: "Discovery call",
    detail:
      "We clarify the project goals, current blockers, and what a successful engagement looks like.",
  },
  {
    title: "Hands-on review",
    detail:
      "I spend up to an hour inside your project (screen share or repo access) profiling builds, reviewing code, and tracing pipelines.",
  },
  {
    title: "Actionable report",
    detail:
      "You receive a crisp summary of the critical issues, risk areas, and quick wins. No paywall—use it internally or bring me in to solve it.",
  },
];

export function AuditSection() {
  return (
    <section className="space-y-12 rounded-3xl border border-primary/30 bg-primary/5 px-6 py-16 shadow-sm sm:px-10">
      <SectionHeading
        eyebrow="Complimentary first step"
        title="Free 60-minute Unity project audit"
        lead="Understand the state of your project before committing budget. I surface the problems, you decide how to address them."
      />
      <div className="grid gap-6 sm:grid-cols-3">
        {AUDIT_STEPS.map((step, index) => (
          <div
            key={step.title}
            className="relative flex flex-col gap-4 rounded-2xl border border-primary/20 bg-background/80 p-6"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              {index + 1}
            </span>
            <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.detail}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-primary/20 bg-background/90 p-8 text-center">
        <p className="text-base text-muted-foreground">
          Ready to schedule? Choose your preferred channel and I&apos;ll reply within
          24 hours.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={siteCopy.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            WhatsApp audit request
          </Link>
          <Link
            href={siteCopy.email}
            className="inline-flex items-center justify-center rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
          >
            Email the details
          </Link>
        </div>
      </div>
    </section>
  );
}
