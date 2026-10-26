import type { Metadata } from "next";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your personal data when you request a quote or book roofing work.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand-700">
        Legal
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500">Last updated October 2026</p>

      <div className="mt-8 space-y-8 text-base leading-relaxed text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-ink-950">What we collect</h2>
          <p className="mt-2">
            When you request a quote we collect your name, phone number, postcode and a short
            description of the work. We use these details only to contact you about your enquiry.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink-950">How we use it</h2>
          <p className="mt-2">
            Your details are used to arrange inspections, prepare written quotes and carry out
            work you agree to. We do not sell your data, and we do not share it with third
            parties for marketing.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink-950">How long we keep it</h2>
          <p className="mt-2">
            Enquiry data is retained for up to 24 months so we can follow up on quotes. Job
            records are kept for six years to meet tax and warranty obligations.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink-950">Your rights</h2>
          <p className="mt-2">
            You can ask for a copy of the data we hold, request corrections or ask us to delete
            it at any time. Email {siteConfig.email} or call {siteConfig.phoneDisplay} and we
            will respond within one month.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink-950">Cookies</h2>
          <p className="mt-2">
            This site uses only essential cookies required for it to work. No advertising or
            cross-site tracking cookies are set.
          </p>
        </section>
      </div>
    </div>
  );
}
