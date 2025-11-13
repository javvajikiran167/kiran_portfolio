import { SectionHeading } from "../components/section-heading";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Unity Systems",
      skills: [
        "ECS & DOTS",
        "Addressables",
        "Input System",
        "Physics",
        "Animation",
        "UI Toolkit",
      ],
    },
    {
      title: "Languages",
      skills: [
        "C#",
        "ShaderLab",
        "HLSL",
        "JavaScript",
        "TypeScript",
        "Python",
      ],
    },
    {
      title: "Platforms",
      skills: [
        "PlayStation",
        "Xbox",
        "Nintendo Switch",
        "iOS/Android",
        "Meta Quest",
        "PC/Mac",
      ],
    },
    {
      title: "Tools & Optimization",
      skills: [
        "Unity Profiler",
        "Memory Profiler",
        "Frame Debugger",
        "RenderDoc",
        "Git",
        "CI/CD",
      ],
    },
  ];

  return (
    <section id="skills" className="container max-w-7xl py-16 lg:py-24">
      <SectionHeading
        eyebrow="Technical Expertise"
        title="Skills & Technologies"
        lead="Specialized in Unity development across multiple platforms and systems"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border/60 bg-card p-6"
          >
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, j) => (
                <span
                  key={j}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm text-foreground/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
