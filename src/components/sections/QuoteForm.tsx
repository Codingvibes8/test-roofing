"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, ArrowRight, Phone, Lock } from "lucide-react";
import { services, siteConfig } from "@/data/siteData";
import Stars from "@/components/ui/Stars";

type Status = "idle" | "sending" | "sent";

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink-950 placeholder:text-slate-500 transition-all duration-200 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-500/15";

const labelClass = "block text-xs font-semibold text-slate-700";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    // Mock submit — wire to your CRM, email API or form provider here.
    window.setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div
        id="quote"
        className="scroll-mt-24 rounded-2xl bg-white p-6 text-ink-950 shadow-2xl shadow-black/40 sm:p-8"
      >
        <div role="status" aria-live="polite" className="flex flex-col items-center py-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            <CheckCircle2 className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <h2 className="mt-4 text-xl font-semibold tracking-tight">Request received</h2>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
            Thanks{name ? `, ${name.split(" ")[0]}` : ""}. A roofer will call you back within 30
            minutes to arrange your free inspection.
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-slate-50"
          >
            <Phone className="h-4 w-4 text-brand-600" strokeWidth={1.75} aria-hidden="true" />
            Need us sooner? {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      id="quote"
      className="relative scroll-mt-24 rounded-2xl bg-white p-6 text-ink-950 shadow-2xl shadow-black/40 sm:p-7"
    >
      <span className="absolute -top-3 right-5 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md shadow-brand-900/40">
        Replies in 30 min
      </span>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Get your free quote</h2>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            Tell us where the problem is and we call you back within 30 minutes.
          </p>
        </div>
        <div className="hidden shrink-0 text-right sm:block">
          <Stars rating={siteConfig.rating} className="justify-end" size="h-3.5 w-3.5" />
          <p className="mt-1 font-mono text-xs text-slate-500">
            {siteConfig.rating} · {siteConfig.reviewCount} reviews
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
        <div className="space-y-1.5">
          <label htmlFor="quote-name" className={labelClass}>
            Your name
          </label>
          <input
            id="quote-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="John Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
          />
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label htmlFor="quote-phone" className={labelClass}>
              Phone number
            </label>
            <input
              id="quote-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="07123 456789"
              className={fieldClass}
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="quote-postcode" className={labelClass}>
              Postcode
            </label>
            <input
              id="quote-postcode"
              name="postcode"
              type="text"
              required
              autoComplete="postal-code"
              placeholder="GU1 1AA"
              className={fieldClass}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="quote-service" className={labelClass}>
            What do you need?
          </label>
          <select id="quote-service" name="service" defaultValue={services[0].title} className={fieldClass}>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Roof inspection">Roof inspection</option>
            <option value="Something else">Something else</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all duration-200 hover:bg-brand-700 hover:shadow-brand-700/35 active:scale-[0.99] disabled:cursor-wait disabled:opacity-80"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Free Quote
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </>
          )}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
          <Lock className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
          No spam, no obligation. We reply 7am–9pm every day.
        </p>
      </form>
    </div>
  );
}
