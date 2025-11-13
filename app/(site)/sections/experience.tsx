import { SectionHeading } from "../components/section-heading";

const EXPERIENCE = [
  {
    role: "Principal Unity Engineer",
    company: "Global XR Studio",
    timeframe: "2022 — Present",
    summary:
      "Led performance turnarounds on a live-service VR title, stabilising frame-times across Quest and PSVR2 while coaching a cross-functional pod.",
  },
  {
    role: "Senior Gameplay Engineer",
    company: "AAA Console Team",
    timeframe: "2019 — 2022",
    summary:
      "Architected combat and traversal systems for an open-world action game, partnering closely with design to keep iteration cycles under 24 hours.",
  },
  {
    role: "Unity Developer",
    company: "Indie Mobile Studio",
    timeframe: "2016 — 2019",
    summary:
      "Shipped multiple F2P titles, implementing analytics, monetisation events, and CI/CD pipelines that supported weekly content drops.",
  },
];

const HIGHLIGHTS = [
  {
    metric: "8+",
    label: "Years shipping Unity products",
  },
  {
    metric: "12",
    label: "Studios partnered globally",
  },
  {
    metric: "3x",
    label: "Average performance uplift post-engagement",
  },
];

export function ExperienceSection() {
  return (
    <section className="space-y-12 rounded-3xl border border-border/60 bg-card px-6 py-16 shadow-sm sm:px-10">
      <SectionHeading
        eyebrow="Experience"
        title="Trusted by teams shipping on console, mobile, and XR"
        lead="I embed quickly, respect your team&apos;s culture, and leave durable systems that continue to scale after I roll off."
      />
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          {EXPERIENCE.map((item) => (
            <article
              key={`${item.role}-${item.company}`}
              className="rounded-2xl border border-border/60 bg-background/80 p-6 shadow-inner"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.company}
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {item.timeframe}
                </p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{item.summary}</p>
            </article>
          ))}
        </div>
        <div className="space-y-4 rounded-2xl border border-border/60 bg-background/80 p-6 text-center shadow-inner">
          <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Impact snapshot
          </h3>
          <div className="mt-6 space-y-6">
            {HIGHLIGHTS.map((highlight) => (
              <div key={highlight.label} className="space-y-2">
                <p className="text-4xl font-semibold text-primary">{highlight.metric}</p>
                <p className="text-sm text-muted-foreground">{highlight.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Need references? I&apos;m happy to connect you with producers and tech
            directors under NDA.
          </p>
        </div>
      </div>
    </section>
  );
}
