import { AboutSection } from "./(site)/sections/about";
import { AuditSection } from "./(site)/sections/audit";
import { ContactSection } from "./(site)/sections/contact";
import { ExperienceSection } from "./(site)/sections/experience";
import { FAQSection } from "./(site)/sections/faq";
import { HeroSection } from "./(site)/sections/hero";
import { PricingSection } from "./(site)/sections/pricing";
import { ProcessSection } from "./(site)/sections/process";
import { Projects } from "./(site)/sections/projects";
import { ServicesSection } from "./(site)/sections/services";
import { SkillsSection } from "./(site)/sections/skills";
import { TestimonialsSection } from "./(site)/sections/testimonials";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-16 sm:px-6 lg:gap-16">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Projects />
      <SkillsSection />
      <PricingSection />
      <ProcessSection />
      <AuditSection />
      <ExperienceSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <footer className="rounded-3xl border border-border/60 bg-card px-6 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kiran Consulting. Built with care in Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}
