"use client";

import { ArrowRight } from "lucide-react";
import { site } from "@/data/medisure-content";
import { useAppointment } from "./AppointmentContext";
import Reveal from "./Reveal";

export default function CarePaths() {
  const { openAppointment } = useAppointment();
  const { eyebrow, heading, paths } = site.carePaths;

  return (
    <section id="care" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-garnet-deep">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            {heading}
          </h2>
        </Reveal>

        <ol className="mt-12 border-y border-line">
          {paths.map((path, index) => {
            const action = (
              <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-garnet-deep">
                {path.linkLabel}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            );
            return (
              <li
                key={path.number}
                className={index > 0 ? "border-t border-line" : ""}
              >
                <Reveal delay={index * 90}>
                  <div className="group grid gap-4 py-9 md:grid-cols-[110px_1fr_auto] md:items-center md:gap-8">
                    <div>
                      <span className="font-serif text-3xl text-crimson">
                        {path.number}
                      </span>
                      <span
                        aria-hidden="true"
                        className="mt-2 block h-px w-8 bg-crimson/40 transition-all duration-300 group-hover:w-16 group-hover:bg-crimson"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                        {path.title}
                      </h3>
                      <p className="mt-2 max-w-2xl leading-relaxed text-clay">
                        {path.description}
                      </p>
                    </div>
                    {path.href ? (
                      <a href={path.href} className="w-fit">
                        {action}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={openAppointment}
                        className="w-fit text-left"
                      >
                        {action}
                      </button>
                    )}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
