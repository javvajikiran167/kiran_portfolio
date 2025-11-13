import Link from "next/link";
import { siteCopy } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-background via-background to-primary/5 px-6 py-16 shadow-sm sm:px-10 sm:py-24">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
          Unity & Gameplay Engineering Consultant
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Ship confident, high-performance Unity experiences with a partner who has
          seen it all.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">
          I&apos;m {siteCopy.name}, a game engineer with 8+ years building and optimizing titles
          for console, mobile, and XR. I partner with studios to unblock teams,
          audit pipelines, and deliver performant gameplay systems without the
          guesswork.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Book the free project audit
          </Link>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteCopy.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-muted-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              WhatsApp intro
            </Link>
            <Link
              href={siteCopy.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-muted-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          I work discreetly with studios under NDA. Engagements are structured to
          respect your production cadence and protect my full-time commitments.
        </p>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-80 w-[36rem] rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
    </section>
  );
}
