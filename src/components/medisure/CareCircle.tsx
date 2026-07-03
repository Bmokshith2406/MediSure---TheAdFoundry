"use client";

import { useState, type CSSProperties } from "react";
import {
  CalendarCheck,
  HeartPulse,
  ScanSearch,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/data/medisure-content";
import BrandLogo from "./BrandLogo";

/**
 * The Circle of Care - a quiet solar system.
 *
 * Four stage "planets" travel on separate tilted elliptical orbits around
 * the Medisure seal. Hovering, tapping, or focusing a stage pauses the
 * whole system and swaps the seal for that stage's description. Below `sm`
 * the orbits relax to circles, and the description also appears beneath
 * the system where the small seal cannot hold it. Pure SVG + CSS
 * transforms; no libraries.
 */

const stageIcons: LucideIcon[] = [
  Stethoscope,
  ScanSearch,
  HeartPulse,
  CalendarCheck,
];

const stageTints = ["bg-rose", "bg-powder", "bg-lilac", "bg-butter"];

/* Per-stage orbit: radii (% of system width, per breakpoint), period,
   start angle. The journey moves outward: Consultation innermost →
   Follow-up outermost. Mobile radii are tuned so chips clear both the
   seal and the viewport edges on a 360px screen. */
const orbits = [
  { radiusSm: 26, radiusLg: 28, duration: 48, base: -90 },
  { radiusSm: 32.5, radiusLg: 37, duration: 64, base: 0 },
  { radiusSm: 39, radiusLg: 46, duration: 80, base: 90 },
  { radiusSm: 45.5, radiusLg: 55, duration: 96, base: 180 },
];

/* Matching ring radii in SVG user units (600 viewBox → 1% = 6). */
const ringRadiiSm = [156, 195, 234, 273];
const ringRadiiLg = [168, 222, 276, 330];

export default function CareCircle() {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const stages = site.careCircle.stages;
  const active = activeStage !== null ? stages[activeStage] : null;
  const ActiveIcon = activeStage !== null ? stageIcons[activeStage] : null;

  return (
    <div>
      <div
        className="orbit-system relative mx-auto aspect-square w-full max-w-[660px]"
        data-orbits-paused={activeStage !== null ? "true" : "false"}
      >
        {/* Orbit rings - drawn per breakpoint so the visible ellipses and
            the chips' travelled paths always agree */}
        <svg
          viewBox="0 0 600 600"
          fill="none"
          aria-hidden="true"
          className="orbit-ring absolute inset-0 h-full w-full overflow-visible sm:hidden"
        >
          {ringRadiiSm.map((radius, index) => (
            <circle
              key={radius}
              cx="300"
              cy="300"
              r={radius}
              stroke="#EC3237"
              strokeOpacity={0.3 - index * 0.055}
              strokeWidth="1.5"
              strokeDasharray={index === 3 ? "3 10" : undefined}
              strokeLinecap="round"
            />
          ))}
        </svg>
        <svg
          viewBox="0 0 600 600"
          fill="none"
          aria-hidden="true"
          className="orbit-ring absolute inset-0 hidden h-full w-full overflow-visible sm:block"
        >
          {ringRadiiLg.map((radius, index) => (
            <circle
              key={radius}
              cx="300"
              cy="300"
              r={radius}
              stroke="#EC3237"
              strokeOpacity={0.3 - index * 0.055}
              strokeWidth="1.5"
              strokeDasharray={index === 3 ? "3 10" : undefined}
              strokeLinecap="round"
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 flex aspect-square w-[24%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white shadow-[0_18px_50px_rgba(236,50,55,0.1),0_6px_18px_rgba(17,17,17,0.05)] sm:w-[32%] lg:w-[31%] xl:w-[30%]">
          <div
            aria-hidden={active !== null}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              active ? "sm:opacity-0" : "opacity-100"
            }`}
          >
            <BrandLogo alt="" className="h-12 w-12 sm:h-20 sm:w-20" />
          </div>
          {/* Stage face - desktop and tablet only; mobile shows it below */}
          <div
            aria-live="polite"
            className={`absolute inset-0 hidden flex-col items-center justify-center px-4 py-5 text-center transition-opacity duration-300 sm:flex ${
              active ? "opacity-100" : "opacity-0"
            }`}
          >
            {active && ActiveIcon && (
              <>
                <span
                  className={`flex size-8 items-center justify-center rounded-full lg:size-9 ${stageTints[activeStage!]}`}
                >
                  <ActiveIcon aria-hidden="true" className="size-4 text-garnet-deep lg:size-4.5" />
                </span>
                <p className="mt-2 max-w-[9rem] font-serif text-[1.45rem] leading-none text-ink lg:max-w-[10rem] lg:text-[1.55rem]">
                  {active.title}
                </p>
                <p className="mt-2 max-w-[9.25rem] text-[10.5px] leading-5 text-clay lg:max-w-[10.5rem] lg:text-[11px] lg:leading-5">
                  {active.description}
                </p>
              </>
            )}
          </div>
        </div>

        {/* The four planets */}
        {stages.map((stage, index) => {
          const Icon = stageIcons[index];
          const orbit = orbits[index];
          const isActive = activeStage === index;
          return (
            <div
              key={stage.title}
              className="orbit-plane pointer-events-none absolute inset-0"
              style={{
                zIndex: 23 - index,
              }}
            >
              <div className="orbit-squash absolute inset-0">
                <div
                  className="orbit-arm absolute inset-0"
                  style={
                    {
                      "--base": `${orbit.base}deg`,
                      "--dur": `${orbit.duration}s`,
                    } as CSSProperties
                  }
                >
                  <span
                    className="orbit-holder absolute"
                    style={
                      {
                        "--r-sm": `${orbit.radiusSm}%`,
                        "--r-lg": `${orbit.radiusLg}%`,
                        left: "calc(50% + var(--r))",
                        top: "50%",
                      } as CSSProperties
                    }
                  >
                    <span
                      className="orbit-counter"
                      style={
                        {
                          "--base": `${orbit.base}deg`,
                          "--dur": `${orbit.duration}s`,
                        } as CSSProperties
                      }
                    >
                      <span className="orbit-unsquash">
                        <span className="orbit-untilt">
                          <button
                            type="button"
                            aria-pressed={isActive}
                            onMouseEnter={() => setActiveStage(index)}
                            onMouseLeave={() => setActiveStage(null)}
                            onFocus={() => setActiveStage(index)}
                            onBlur={() => setActiveStage(null)}
                            onClick={() => setActiveStage(index)}
                            className={`pointer-events-auto flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border bg-white py-1.5 pl-2 pr-3 text-[11px] font-semibold text-ink shadow-[0_4px_16px_rgba(17,17,17,0.09)] transition-colors duration-300 sm:py-2 sm:pl-2.5 sm:pr-3.5 sm:text-[13px] ${
                              isActive
                                ? "border-garnet shadow-[0_8px_22px_rgba(236,50,55,0.18)]"
                                : "border-line"
                            }`}
                          >
                            <span
                              className={`flex size-5 items-center justify-center rounded-full sm:size-6 ${stageTints[index]}`}
                            >
                              <Icon
                                aria-hidden="true"
                                className="size-3 text-garnet-deep sm:size-3.5"
                              />
                            </span>
                            {stage.title}
                          </button>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile stage details - the small seal cannot hold the description */}
      <div aria-live="polite" className="mt-5 min-h-16 text-center sm:hidden">
        {active && ActiveIcon ? (
          <div className="mx-auto max-w-xs">
            <p className="flex items-center justify-center gap-2 font-serif text-lg text-ink">
              <ActiveIcon aria-hidden="true" className="size-4 text-crimson" />
              {active.title}
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-clay">
              {active.description}
            </p>
          </div>
        ) : (
          <p className="text-[13px] italic text-clay/80">
            {site.careCircle.hint}
          </p>
        )}
      </div>
    </div>
  );
}
