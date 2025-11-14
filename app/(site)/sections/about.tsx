import { SectionHeading } from "../components/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="container max-w-7xl py-16 lg:py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Why I Consult"
        lead="Passionate about solving complex technical challenges in game development"
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-card p-8">
          <h3 className="mb-4 text-xl font-semibold text-foreground">
            My Background
          </h3>
          <div className="space-y-4 text-foreground/80">
            <p>
              With over 8 years of experience in Unity development, I&apos;ve worked
              across diverse platforms—from AAA console titles to mobile F2P
              games and cutting-edge VR experiences.
            </p>
            <p>
              I specialize in performance optimization, gameplay systems
              architecture, and helping teams ship high-quality Unity projects
              on time and within budget.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card p-8">
          <h3 className="mb-4 text-xl font-semibold text-foreground">
            My Approach
          </h3>
          <div className="space-y-4 text-foreground/80">
            <p>
              I believe in working discreetly under NDA, respecting your
              production cadence, and protecting existing team commitments.
              Your success is my success.
            </p>
            <p>
              Whether you need emergency performance fixes, architectural
              guidance, or team enablement workshops, I bring pragmatic
              solutions backed by years of shipping titles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
