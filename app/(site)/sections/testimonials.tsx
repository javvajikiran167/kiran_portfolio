import { SectionHeading } from "../components/section-heading";

const TESTIMONIALS = [
  {
    quote:
      "Kiran joined mid-production and immediately identified a memory leak that had eluded us for weeks. The fixes he proposed were pragmatic and respectful of our release cadence.",
    name: "Technical Director",
    company: "AAA Console Studio",
  },
  {
    quote:
      "Our designers finally had the iteration speed they needed. Kiran built tools that empowered the team without adding process overhead.",
    name: "Lead Designer",
    company: "Award-winning Indie",
  },
  {
    quote:
      "Within two weeks we had clear priorities and a plan to hit platform performance targets. He&apos;s now my first call for tough Unity problems.",
    name: "Executive Producer",
    company: "Mobile Studio",
  },
];

export function TestimonialsSection() {
  return (
    <section className="space-y-12 rounded-3xl border border-border/60 bg-card px-6 py-16 shadow-sm sm:px-10">
      <SectionHeading
        eyebrow="Feedback"
        title="Studios appreciate the calm, senior-level support"
        lead="Real quotes from partners—full references available on request and under NDA."
      />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <blockquote
            key={testimonial.quote}
            className="flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-inner"
          >
            <p className="text-sm text-muted-foreground">“{testimonial.quote}”</p>
            <footer className="mt-auto text-sm font-medium text-foreground">
              {testimonial.name}
              <span className="block text-xs text-muted-foreground">
                {testimonial.company}
              </span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
