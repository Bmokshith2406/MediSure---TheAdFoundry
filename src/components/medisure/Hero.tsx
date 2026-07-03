"use client";

import {
  CalendarCheck,
  MessageCircle,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/data/medisure-content";
import CareCircle from "./CareCircle";
import { useAppointment } from "./AppointmentContext";

const quickLinkIcons: LucideIcon[] = [Stethoscope, CalendarCheck, MessageCircle];

export default function Hero() {
  const { openAppointment } = useAppointment();

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-40 sm:pb-24 sm:pt-44 lg:flex lg:min-h-svh lg:items-center lg:pb-12 lg:pt-36"
    >
      {/* The system extends across the whole viewport: faint outer orbits
          sweep behind the headline, ambient washes tint the corners */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 size-[480px] rounded-full bg-powder/70 blur-3xl" />
        <div className="absolute -bottom-48 -left-32 size-[460px] rounded-full bg-butter/60 blur-3xl" />
        <div className="absolute -left-24 top-1/4 hidden size-[380px] rounded-full bg-rose/50 blur-3xl lg:block" />
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          className="absolute inset-0 hidden h-full w-full lg:block"
        >
          <g
            stroke="#111111"
            strokeOpacity="0.05"
            strokeWidth="1.5"
            style={{ transform: "scaleY(0.72)", transformOrigin: "1080px 460px" }}
          >
            <circle cx="1080" cy="460" r="420" />
            <circle cx="1080" cy="460" r="560" />
            <circle cx="1080" cy="460" r="720" />
            <circle cx="1080" cy="460" r="900" />
            <circle cx="1080" cy="460" r="1120" />
            <circle
              cx="1080"
              cy="460"
              r="640"
              stroke="#EC3237"
              strokeOpacity="0.09"
              strokeDasharray="3 12"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="hero-rise flex items-center gap-3 text-sm font-semibold tracking-wide text-garnet-deep">
            <span aria-hidden="true" className="h-px w-10 bg-crimson" />
            {site.hero.eyebrow}
          </p>
          <h1
            className="hero-rise mt-5 max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl sm:leading-[1.08] lg:text-[3.4rem]"
            style={{ animationDelay: "0.1s" }}
          >
            {site.hero.headlineStart}{" "}
            <span className="font-serif font-medium italic text-crimson">
              {site.hero.headlineAccent}
            </span>
          </h1>
          <p
            className="hero-rise mt-6 max-w-xl text-lg leading-relaxed text-clay"
            style={{ animationDelay: "0.2s" }}
          >
            {site.hero.copy}
          </p>
          <div
            className="hero-rise mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              type="button"
              onClick={openAppointment}
              className="rounded-full bg-garnet px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-garnet-deep"
            >
              {site.hero.primaryCta}
            </button>
            <a
              href={site.hero.secondaryHref}
              className="rounded-full border border-ink/20 px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-ink hover:bg-white"
            >
              {site.hero.secondaryCta}
            </a>
          </div>

          <div
            className="hero-rise mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-7"
            style={{ animationDelay: "0.4s" }}
          >
            {site.hero.markers.map((marker, index) => {
              const Icon = quickLinkIcons[index];
              return (
                <a
                  key={marker.href}
                  href={marker.href}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-garnet-deep"
                >
                  <Icon aria-hidden="true" className="size-4 text-crimson" />
                  <span className="underline-offset-4 group-hover:underline">
                    {marker.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="hero-rise" style={{ animationDelay: "0.35s" }}>
          <CareCircle />
        </div>
      </div>
    </section>
  );
}
