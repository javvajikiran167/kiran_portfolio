import { SectionHeading } from "../components/section-heading";

export function Projects() {
  const projects = [
    {
      title: "VR Performance Optimization",
      company: "Global XR Studio",
      platform: "Meta Quest 2/3",
      year: "2022-Present",
      description: "Optimized rendering pipeline for social VR application, achieving 72fps locked performance.",
      technologies: ["Unity", "VR", "Performance"],
    },
    {
      title: "AAA Combat System",
      company: "Console Game Studio",
      platform: "PlayStation/Xbox",
      year: "2019-2022",
      description: "Designed and implemented core combat and traversal systems for AAA action title.",
      technologies: ["Unity", "Gameplay", "Console"],
    },
    {
      title: "F2P Mobile Game",
      company: "Mobile Gaming Studio",
      platform: "iOS/Android",
      year: "2016-2019",
      description: "Built LiveOps systems and analytics integration for free-to-play mobile game.",
      technologies: ["Unity", "Mobile", "LiveOps"],
    },
  ];

  return (
    <section id="projects" className="container max-w-7xl py-16 lg:py-24">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        lead="A selection of games and applications I've contributed to"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.company}
                </p>
              </div>
              <span className="text-xs text-muted-foreground">{project.year}</span>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-foreground/80">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, j) => (
                <span
                  key={j}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="absolute left-0 top-0 text-sm text-muted-foreground/80">
              {project.platform}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
