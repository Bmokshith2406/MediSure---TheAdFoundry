import { site } from "@/data/medisure-content";
import Reveal from "./Reveal";

export default function Journey() {
  const { eyebrow, heading, intro, stages } = site.journey;

  return (
    <section id="visit" className="bg-powder py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-garnet-deep">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 leading-relaxed text-clay">{intro}</p>
        </Reveal>

        <div className="relative mt-14">
          {/* The route line: horizontal on desktop, vertical on mobile */}
          <div
            aria-hidden="true"
            className="absolute left-[8%] right-[8%] top-5 hidden border-t-2 border-dashed border-crimson/35 md:block"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-5 top-3 border-l-2 border-dashed border-crimson/35 md:hidden"
          />

          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {stages.map((stage, index) => (
              <li key={stage.title} className="relative pl-14 md:pl-0">
                <Reveal delay={index * 120}>
                  <span className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-full border-2 border-crimson bg-cream font-serif text-lg text-garnet-deep md:relative md:left-auto md:top-auto">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-ink md:mt-5">
                    {stage.title}
                  </h3>
                  <p className="mt-2 max-w-sm leading-relaxed text-clay">
                    {stage.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
