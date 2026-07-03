import {
  Baby,
  Bone,
  Brain,
  HeartPulse,
  Microscope,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { site, type Specialty, type SpecialtyIcon } from "@/data/medisure-content";
import Reveal from "./Reveal";

const icons: Record<SpecialtyIcon, LucideIcon> = {
  heart: HeartPulse,
  bone: Bone,
  family: Baby,
  brain: Brain,
  diagnostics: Microscope,
  general: Stethoscope,
};

const tints: Record<Specialty["tint"], string> = {
  rose: "bg-rose",
  powder: "bg-powder",
  lilac: "bg-lilac",
  butter: "bg-butter",
};

function SupportingCard({ specialty }: { specialty: Specialty }) {
  const Icon = icons[specialty.icon];
  return (
    <div className="h-full rounded-2xl border border-line bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(17,17,17,0.07)]">
      <span
        className={`flex size-11 items-center justify-center rounded-xl ${tints[specialty.tint]}`}
      >
        <Icon aria-hidden="true" className="size-5 text-garnet-deep" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-ink">{specialty.name}</h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-clay">
        {specialty.description}
      </p>
    </div>
  );
}

export default function Specialties() {
  const { eyebrow, heading, intro, featured, items } = site.specialties;
  const FeaturedIcon = icons[featured.icon];

  return (
    <section id="specialties" className="border-y border-line bg-white py-20 sm:py-28">
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

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-rose p-8 sm:p-10">
              {/* Arch line work echoing the monogram */}
              <svg
                viewBox="0 0 300 320"
                aria-hidden="true"
                className="absolute -bottom-12 -right-10 w-64 opacity-70"
                fill="none"
              >
                <path
                  d="M40 320 L40 150 Q40 40 150 40 Q260 40 260 150 L260 320"
                  stroke="#EC3237"
                  strokeOpacity="0.22"
                  strokeWidth="2"
                />
                <path
                  d="M80 320 L80 170 Q80 80 150 80 Q220 80 220 170 L220 320"
                  stroke="#EC3237"
                  strokeOpacity="0.14"
                  strokeWidth="2"
                />
              </svg>

              <span className="w-fit rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-garnet-deep">
                Featured area of care
              </span>
              <span className="mt-10 flex size-14 items-center justify-center rounded-2xl bg-white">
                <FeaturedIcon aria-hidden="true" className="size-7 text-crimson" />
              </span>
              <h3 className="mt-6 font-serif text-3xl text-ink">
                {featured.name}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-clay">
                {featured.description}
              </p>
            </div>
          </Reveal>

          {items.slice(0, 2).map((specialty, index) => (
            <Reveal
              key={specialty.name}
              className="lg:col-span-5"
              delay={index * 80}
            >
              <SupportingCard specialty={specialty} />
            </Reveal>
          ))}

          {items.slice(2).map((specialty, index) => (
            <Reveal
              key={specialty.name}
              className="lg:col-span-4"
              delay={index * 80}
            >
              <SupportingCard specialty={specialty} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
