import { site } from "@/data/medisure-content";
import Reveal from "./Reveal";

export default function About() {
  const { eyebrow, heading, statement, copy, values } = site.about;

  return (
    <section id="about" className="relative overflow-hidden bg-lilac py-20 sm:py-28">
      {/* Large architectural arch echoing the monogram */}
      <svg
        viewBox="0 0 480 560"
        aria-hidden="true"
        className="absolute -bottom-24 -right-20 hidden w-[420px] lg:block"
        fill="none"
      >
        <path
          d="M60 560 L60 240 Q60 60 240 60 Q420 60 420 240 L420 560 Z"
          fill="#FFFFFF"
          fillOpacity="0.55"
        />
        <path
          d="M110 560 L110 270 Q110 130 240 130 Q370 130 370 270 L370 560"
          stroke="#EC3237"
          strokeOpacity="0.18"
          strokeWidth="2"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-garnet-deep">
            {eyebrow}
          </p>
          <h2 className="mt-3 max-w-lg font-serif text-3xl text-ink sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-clay">{copy}</p>
          <p className="mt-9 max-w-xl border-l-2 border-crimson pl-6 font-serif text-2xl italic leading-snug text-ink sm:text-[1.7rem]">
            {statement}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <dl className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title}>
                <dt className="flex items-center gap-3 text-lg font-semibold text-ink">
                  <span
                    aria-hidden="true"
                    className="size-2 rotate-45 bg-crimson"
                  />
                  {value.title}
                </dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-clay">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
