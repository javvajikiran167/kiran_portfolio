"use client";

import { useState } from "react";
import { SectionHeading } from "../components/section-heading";

export function FAQSection() {
  const faqs = [
    {
      question: "What types of projects do you take on?",
      answer:
        "I work on Unity projects across all platforms—console, mobile, PC, and VR. My focus is on performance optimization, gameplay systems, and team enablement. Both short-term fixes and longer engagements work well.",
    },
    {
      question: "How do you handle NDAs and confidentiality?",
      answer:
        "I work under strict NDAs and respect your production schedules. Your code, assets, and project details remain completely confidential. I never share specifics without explicit permission.",
    },
    {
      question: "What's your typical engagement timeline?",
      answer:
        "Engagements range from 2-week sprint fixes to multi-month partnerships. I can usually start within 1-2 weeks, depending on my current commitments. The free audit helps scope timelines accurately.",
    },
    {
      question: "Do you work remotely or on-site?",
      answer:
        "I primarily work remotely but can accommodate on-site visits for critical milestones or team workshops. Most of my clients find remote collaboration works seamlessly with modern tools.",
    },
    {
      question: "What if we just need a quick consultation?",
      answer:
        "That's what the free 60-minute project audit is for! We'll review your challenges, and I'll provide actionable recommendations. No commitment required beyond that initial call.",
    },
    {
      question: "Can you help with hiring or team training?",
      answer:
        "Absolutely. I offer technical interview support, code review workshops, and Unity best practices training for teams. This helps your internal talent grow while solving immediate needs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="container max-w-4xl py-16 lg:py-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Common Questions"
        lead="Everything you need to know about working together"
      />

      <div className="mt-12 space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-border/60 bg-card"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-primary/5"
            >
              <span className="font-semibold text-foreground">
                {faq.question}
              </span>
              <span className="ml-4 text-2xl text-primary">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <div className="border-t border-border/60 p-6 pt-4 text-foreground/80">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
