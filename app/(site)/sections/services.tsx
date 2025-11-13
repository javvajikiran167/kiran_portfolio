import { SectionHeading } from "../components/section-heading";

const SERVICES = [
  {
    title: "Performance Diagnostics",
    description:
      "Deep profiling across CPU, GPU, and memory to pinpoint bottlenecks, regressions, and platform-specific issues before they hit QA.",
    bullets: [
      "Frame analysis & runtime instrumentation",
      "Asset & memory usage rationalisation",
      "Platform compliance & submission readiness",
    ],
  },
  {
    title: "Gameplay & Systems Architecture",
    description:
      "Scalable gameplay foundations that keep designers shipping. I help teams level up architecture, data-driven tooling, and maintainable systems.",
    bullets: [
      "Ability & combat systems",
      "LiveOps-ready content pipelines",
      "Multiplayer synchronisation strategies",
    ],
  },
  {
    title: "Unity Team Enablement",
    description:
      "Pair-programming, targeted workshops, and mentoring designed to leave your team faster and more confident than I found them.",
    bullets: [
      "Code reviews & guardrail frameworks",
      "Process tuning for hybrid teams",
      "Hiring support & technical assessments",
    ],
  },
];

export function ServicesSection() {
  return (
    <section className="space-y-12 rounded-3xl border border-border/60 bg-card px-6 py-16 shadow-sm sm:px-10">
      <SectionHeading
        eyebrow="Engagement focus"
        title="Focused support across the lifecycle"
        lead="Drop me into production, preproduction, or fire-fighting mode. I adapt to the cadence you already run so your team keeps momentum."
      />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="flex flex-col gap-4 rounded-2xl border border-border/80 bg-background/60 p-6 shadow-inner"
          >
            <h3 className="text-xl font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground">{service.description}</p>
            <ul className="mt-auto space-y-2 text-sm text-muted-foreground">
              {service.bullets.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
