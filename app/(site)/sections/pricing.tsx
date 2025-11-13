import { SectionHeading } from "../components/section-heading";
import { siteCopy } from "@/lib/site-config";
import Link from "next/link";

export function PricingSection() {
  const engagementModels = [
    {
      title: "Project-Based",
      description: "Fixed scope with clear deliverables",
      features: [
        "Defined timeline & milestones",
        "Fixed cost estimate upfront",
        "Perfect for specific optimizations",
        "Typical duration: 2-8 weeks",
      ],
      cta: "Discuss Project",
    },
    {
      title: "Hourly/Daily Rate",
      description: "Flexible support as needed",
      features: [
        "Pay only for time used",
        "Great for audits & consultations",
        "No long-term commitment",
        "Detailed time tracking provided",
      ],
      cta: "Book Consultation",
      featured: true,
    },
    {
      title: "Monthly Retainer",
      description: "Ongoing partnership & support",
      features: [
        "Guaranteed availability",
        "Proactive code reviews",
        "Team workshops included",
        "Priority response times",
      ],
      cta: "Explore Retainers",
    },
  ];

  return (
    <section id="pricing" className="container max-w-7xl py-16 lg:py-24">
      <SectionHeading
        eyebrow="Pricing"
        title="Flexible Engagement Models"
        lead="Choose the model that fits your team's needs and budget"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {engagementModels.map((model, i) => (
          <div
            key={i}
            className={`rounded-2xl border bg-card p-8 ${
              model.featured
                ? "border-primary/50 shadow-lg shadow-primary/20"
                : "border-border/60"
            }`}
          >
            {model.featured && (
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Most Popular
              </div>
            )}
            <h3 className="mb-2 text-2xl font-bold text-foreground">
              {model.title}
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              {model.description}
            </p>

            <ul className="mb-8 space-y-3">
              {model.features.map((feature, j) => (
                <li key={j} className="flex items-start text-sm text-foreground/80">
                  <span className="mr-2 mt-0.5 text-primary">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={siteCopy.calendly}
              target="_blank"
              className={`block rounded-xl px-6 py-3 text-center font-semibold transition-all ${
                model.featured
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-primary/30 text-primary hover:bg-primary/5"
              }`}
            >
              {model.cta}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border/60 bg-card p-8 text-center">
        <p className="text-foreground/80">
          Not sure which model fits best?{" "}
          <Link
            href={siteCopy.calendly}
            target="_blank"
            className="font-semibold text-primary hover:underline"
          >
            Book a free 60-minute audit
          </Link>{" "}
          and we&apos;ll find the right approach together.
        </p>
      </div>
    </section>
  );
}
