import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { site } from "@/data/medisure-content";
import Reveal from "./Reveal";

export default function DoctorSpotlight() {
  const doctor = site.doctorSpotlight;

  return (
    <section className="relative overflow-hidden py-18 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(245,241,255,0.7),transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-line/80 bg-white shadow-[0_24px_70px_rgba(17,17,17,0.06)]">
            <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative min-h-[380px] bg-ink/5 sm:min-h-[460px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,240,242,0.7),transparent_30%),linear-gradient(180deg,rgba(17,17,17,0.02),transparent)]" />
                <Image
                  src={doctor.imageSrc}
                  alt={doctor.imageAlt}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
                <p className="text-sm font-semibold tracking-[0.18em] text-garnet-deep uppercase">
                  {doctor.eyebrow}
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                  {doctor.heading}
                </h2>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-clay">
                  {doctor.role}
                </p>
                <p className="mt-1 text-lg leading-relaxed text-ink/85">
                  {doctor.title}
                </p>
                <p className="mt-6 max-w-xl leading-relaxed text-clay">
                  {doctor.copy}
                </p>

                <div className="mt-7 rounded-[1.5rem] bg-rose px-5 py-5">
                  <p className="flex items-start gap-3 font-serif text-xl leading-snug text-ink sm:text-2xl">
                    <Quote
                      aria-hidden="true"
                      className="mt-1 size-5 shrink-0 text-crimson sm:size-6"
                    />
                    {doctor.quote}
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-garnet-deep"
                  >
                    Speak with our team
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
