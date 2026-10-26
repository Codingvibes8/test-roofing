import type { Metadata } from "next";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms on which ${siteConfig.name} provides quoting, roofing and repair services across ${siteConfig.town} and Surrey.`,
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-brand-700">
        Legal
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-slate-500">Last updated October 2026</p>

      <div className="mt-8 space-y-8 text-base leading-relaxed text-slate-600">
        <section>
          <h2 className="text-lg font-semibold text-ink-950">Quotes</h2>
          <p className="mt-2">
            All quotes are free, written and valid for 30 days. A quote becomes a fixed price
            once you accept it in writing, and that price does not change unless you ask for
            extra work.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink-950">Payment</h2>
          <p className="mt-2">
            No deposit is taken on standard repairs or replacements. Invoices are due within 14
            days of completion, by card, bank transfer or on invoice for commercial clients.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink-950">Guarantees</h2>
          <p className="mt-2">
            Workmanship guarantees apply as stated on your quote, alongside manufacturer
            guarantees of 10 to 25 years on new roof and flat roof systems. Certificates are
            issued in writing on completion.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink-950">Cancellation</h2>
          <p className="mt-2">
            You may cancel before work begins at no cost. Once materials are ordered for a
            scheduled installation, cancellation charges may apply and will be itemised in
            advance.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-ink-950">Contact</h2>
          <p className="mt-2">
            Questions about these terms: {siteConfig.email} or {siteConfig.phoneDisplay}.{" "}
            {siteConfig.name}, {siteConfig.address.street}, {siteConfig.town},{" "}
            {siteConfig.county} {siteConfig.address.postcode}.
          </p>
        </section>
      </div>
    </div>
  );
}
