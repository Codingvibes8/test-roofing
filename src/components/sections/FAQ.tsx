"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { faqs, siteConfig } from "@/data/siteData";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

/** FAQ accordion with FAQPage structured data for rich results. */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                title="Questions we hear every week"
                description="Straight answers, no jargon. If yours is not here, call and ask — we are happy to talk it through."
              />
              <a
                href={`tel:${siteConfig.phone}`}
                className="group mt-7 flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-brand-300"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Call the team
                  </span>
                  <span className="mt-0.5 block font-mono text-sm font-semibold text-ink-950">
                    {siteConfig.phoneDisplay}
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ul className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <Reveal as="li" key={faq.question} delay={index * 0.04} y={16} amount={0.1}>
                    <div
                      className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
                        isOpen ? "border-brand-300" : "border-slate-200"
                      }`}
                    >
                      <h3>
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${index}`}
                          id={`faq-button-${index}`}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-ink-950 transition-colors hover:text-brand-700 sm:px-6 sm:text-base"
                        >
                          {faq.question}
                          <ChevronDown
                            className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                        </button>
                      </h3>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-panel-${index}`}
                            role="region"
                            aria-labelledby={`faq-button-${index}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
