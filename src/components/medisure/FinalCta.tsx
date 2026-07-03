"use client";

import { ArrowRight, Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { site } from "@/data/medisure-content";
import { useAppointment } from "./AppointmentContext";
import Reveal from "./Reveal";

export default function FinalCta() {
  const { openAppointment } = useAppointment();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32"
    >
      {/* The route continues - a quiet thread through the closing section */}
      <svg
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 w-full"
        fill="none"
      >
        <path
          d="M-20 140 C200 120 380 44 620 62 C860 80 1040 24 1220 44"
          stroke="#EC3237"
          strokeOpacity="0.55"
          strokeWidth="2"
        />
        <circle cx="620" cy="62" r="5" fill="#EC3237" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-end gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-5xl">
            {site.finalCta.heading}
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-cream/70">
            {site.finalCta.copy}
          </p>
          <button
            type="button"
            onClick={openAppointment}
            className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-cream px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-white"
          >
            {site.bookLabel}
            <ArrowRight
              aria-hidden="true"
              className="size-4 text-garnet transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-cream/15 bg-white/[0.04] p-7">
            <p className="flex items-center gap-2 text-sm font-semibold text-crimson">
              <MapPin aria-hidden="true" className="size-4" />
              {site.contact.addressLabel}
            </p>
            <a
              href={site.contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/map mt-4 block rounded-lg"
              aria-label={`${site.contact.mapLinkLabel}, ${site.contact.addressLines.join(" ")}`}
            >
              <address className="space-y-0.5 not-italic leading-relaxed text-cream/85 transition-colors group-hover/map:text-cream">
                {site.contact.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson">
                {site.contact.mapLinkLabel}
                <ExternalLink
                  aria-hidden="true"
                  className="size-3.5 transition-transform duration-300 group-hover/map:-translate-y-0.5 group-hover/map:translate-x-0.5"
                />
              </span>
            </a>
            <div className="mt-5 space-y-2.5 border-t border-cream/10 pt-4">
              <a
                href={site.contact.phoneHref}
                className="group/phone flex items-center gap-2.5 text-cream/85 transition-colors hover:text-cream"
              >
                <Phone aria-hidden="true" className="size-4 text-crimson" />
                <span className="font-semibold tracking-wide">
                  {site.contact.phone}
                </span>
              </a>
              <p className="flex items-center gap-2.5 text-sm text-cream/70">
                <Clock aria-hidden="true" className="size-4 text-crimson" />
                {site.contact.hours}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
