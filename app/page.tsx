import { AuditSection } from "./(site)/sections/audit";
import { ContactSection } from "./(site)/sections/contact";
import { ExperienceSection } from "./(site)/sections/experience";
import { HeroSection } from "./(site)/sections/hero";
import { ServicesSection } from "./(site)/sections/services";
import { TestimonialsSection } from "./(site)/sections/testimonials";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-16 sm:px-6 lg:gap-16">
      <HeroSection />
      <ServicesSection />
      <AuditSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <footer className="rounded-3xl border border-border/60 bg-card px-6 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kiran Consulting. Built with care in Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}
