import { SectionHeading } from "../components/section-heading";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description:
        "Free 60-minute audit to understand your challenges, review code/metrics, and identify quick wins.",
      duration: "60 min",
    },
    {
      number: "02",
      title: "Proposal & Scope",
      description:
        "Detailed proposal with timeline, deliverables, and pricing. No surprises—just clarity on what we'll achieve.",
      duration: "1-2 days",
    },
    {
      number: "03",
      title: "Kickoff & Integration",
      description:
        "Get access to repositories, tools, and team. Align on communication channels and cadence.",
      duration: "1 week",
    },
    {
      number: "04",
      title: "Execution & Updates",
      description:
        "Work in focused sprints with regular updates. You always know what's happening and what's next.",
      duration: "Ongoing",
    },
    {
      number: "05",
      title: "Delivery & Handoff",
      description:
        "Comprehensive documentation, knowledge transfer sessions, and post-delivery support if needed.",
      duration: "1 week",
    },
  ];

  return (
    <section id="process" className="container max-w-7xl py-16 lg:py-24">
      <SectionHeading
        eyebrow="How It Works"
        title="My Engagement Process"
        lead="A proven, transparent workflow that respects your time and delivers results"
      />

      <div className="mt-12 space-y-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="group relative rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-foreground/80">
                    {step.description}
                  </p>
                </div>
              </div>
              <span className="ml-16 text-sm text-muted-foreground sm:ml-0">
                {step.duration}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
        <h3 className="text-xl font-semibold text-foreground">
          Flexible to Your Needs
        </h3>
        <p className="mt-2 text-foreground/80">
          This is the typical flow, but I adapt to your project. Emergency fixes?
          We can move faster. Ongoing support? We work in retainer sprints. Let&apos;s
          find what works for you.
        </p>
      </div>
    </section>
  );
}
