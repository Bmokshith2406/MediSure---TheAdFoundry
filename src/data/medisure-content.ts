/**
 * Medisure Hospital - single source of truth for all page copy.
 *
 * Everything the hospital will want to edit later lives here:
 * navigation labels, headlines, specialty names, journey copy,
 * the address, and the placeholders still awaiting confirmed details.
 */

export type SpecialtyIcon =
  | "heart"
  | "bone"
  | "family"
  | "brain"
  | "diagnostics"
  | "general";

export interface Specialty {
  name: string;
  description: string;
  icon: SpecialtyIcon;
  tint: "rose" | "powder" | "lilac" | "butter";
}

export const site = {
  name: "Medisure Hospital",
  logo: {
    src: "/brand/medisure-logo.svg",
    alt: "Medisure Hospital logo",
    width: 554,
    height: 554,
  },

  nav: [
    { label: "Care", href: "#care" },
    { label: "Specialties", href: "#specialties" },
    { label: "Your Visit", href: "#visit" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  bookLabel: "Book a Consultation",

  hero: {
    eyebrow: "Medisure Hospital · Kukatpally, Hyderabad",
    headlineStart: "Care that makes the next step feel",
    headlineAccent: "clear.",
    copy: "At every stage, from first question to diagnosis, treatment, and follow-up, you should know what happens next and why. That clarity is how care should feel, and it is how Medisure Hospital is being built.",
    primaryCta: "Book a Consultation",
    secondaryCta: "Explore Care",
    secondaryHref: "#care",
    markers: [
      { label: "Find a specialty", href: "#specialties" },
      { label: "Plan your visit", href: "#visit" },
      { label: "Talk to our team", href: "#contact" },
    ],
  },

  doctorSpotlight: {
    eyebrow: "Leadership Spotlight",
    heading: "Dr M Dhanunjaya",
    role: "Physiotherapist",
    title: "Managing Director, Medisure Hospital",
    imageSrc: "/doctors/IMG_4840.PNG",
    imageAlt: "Dr M Dhanunjaya, Managing Director of Medisure Hospital",
    copy:
      "Medisure Hospital is being shaped under the guidance of Dr M Dhanunjaya, a physiotherapist whose approach centres on clarity, recovery, and patient confidence. His leadership reflects a simple belief: good care should never feel confusing, rushed, or distant. It should feel personal, well-explained, and steady from the first conversation onward.",
    quote:
      "When people understand their care, they step into recovery with more trust and less fear.",
  },

  careCircle: {
    centerLabel: "Medisure Care",
    centerTagline: "Care that comes full circle.",
    hint: "Explore the four stages",
    stages: [
      {
        title: "Consultation",
        description:
          "It begins with listening to your concerns, your history, and every question you bring.",
      },
      {
        title: "Diagnosis",
        description:
          "Clear answers first, explained in plain language before any decision is made.",
      },
      {
        title: "Treatment",
        description:
          "A plan you understand and agree with, carried out with care at every step.",
      },
      {
        title: "Follow-up",
        description:
          "Care continues after you leave, with results, reviews, and a team you can reach.",
      },
    ],
  },

  carePaths: {
    eyebrow: "Where would you like to begin?",
    heading: "Three clear ways in.",
    paths: [
      {
        number: "01",
        title: "Find the right care",
        description:
          "Begin with the concern, not the department. Our specialties are described in plain language, so you can find the right clinic without guesswork.",
        linkLabel: "Browse specialties",
        href: "#specialties",
      },
      {
        number: "02",
        title: "Prepare for your visit",
        description:
          "Know what to bring, what to expect, and how your appointment will flow so you arrive informed, not anxious.",
        linkLabel: "See how a visit works",
        href: "#visit",
      },
      {
        number: "03",
        title: "Request an appointment",
        description:
          "Share your details and how you would like to be reached. Our team takes it from there, with one conversation and one clear plan.",
        linkLabel: "Book a consultation",
        href: null, // opens the appointment dialog
      },
    ],
  },

  specialties: {
    eyebrow: "Specialties",
    heading: "Care, organised the way you would ask for it.",
    intro:
      "No jargon at the front door. Each area of care is named for what it does, so the right place is easy to find.",
    featured: {
      name: "Heart & Vascular Care",
      description:
        "For the heart and the vessels that carry life through the body, from routine checks and prevention to ongoing cardiac care, explained clearly at every step.",
      icon: "heart",
      tint: "rose",
    } as Specialty,
    items: [
      {
        name: "Bone & Joint Care",
        description:
          "Movement, strength, and recovery for joints, bones, and the injuries life brings.",
        icon: "bone",
        tint: "powder",
      },
      {
        name: "Women & Children's Care",
        description:
          "Care for mothers, women's health, and the smallest patients in the family.",
        icon: "family",
        tint: "lilac",
      },
      {
        name: "Brain & Nerve Care",
        description:
          "For the brain, spine, and nervous system, handled with patience and precision.",
        icon: "brain",
        tint: "butter",
      },
      {
        name: "Diagnostics",
        description:
          "Clear answers first. Imaging and laboratory tests that inform every decision.",
        icon: "diagnostics",
        tint: "powder",
      },
      {
        name: "General Medicine",
        description:
          "Everyday health, managed well, as the first stop for most concerns.",
        icon: "general",
        tint: "rose",
      },
    ] as Specialty[],
  },

  journey: {
    eyebrow: "The Medisure experience",
    heading: "Every visit deserves a clearer path.",
    intro:
      "A hospital visit has a before, a during, and an after. We treat all three as part of your care.",
    stages: [
      {
        title: "Before you arrive",
        description:
          "Request your appointment in the way that suits you, and receive clear directions for the day, including what to bring, where to come, and what happens first.",
      },
      {
        title: "While you are here",
        description:
          "Clear guidance at every desk, honest conversations with your care team, and time to ask every question you came with.",
      },
      {
        title: "After your visit",
        description:
          "You leave knowing your plan, with next steps in plain language, written down, and a clear way to reach us if anything changes.",
      },
    ],
  },

  about: {
    eyebrow: "About Medisure",
    heading: "Built around the person, not the paperwork.",
    statement:
      "Good care does more than treat. It explains, it reassures, and it walks beside you.",
    copy: "Medisure Hospital is being shaped around a simple belief: the way care is delivered matters as much as the care itself. These are the commitments guiding everything we build.",
    values: [
      {
        title: "Thoughtful care",
        description: "Decisions made with you, at a pace you can follow.",
      },
      {
        title: "Clear communication",
        description: "Plain language first. Medical terms explained, never assumed.",
      },
      {
        title: "Respect for your time",
        description: "We value the hours you give us, and we plan around them.",
      },
      {
        title: "Support for families",
        description:
          "Care rarely happens to one person alone. Families are part of the conversation.",
      },
    ],
  },

  appointment: {
    heading: "Book a consultation",
    intro:
      "Tell us a little about your visit and how to reach you. Our team will do the rest.",
    types: [
      "General consultation",
      "Specialist referral",
      "Follow-up visit",
      "Second opinion",
    ],
    contactMethods: ["Phone call", "WhatsApp", "Either is fine"],
    successHeading: "Thank you, request noted.",
    successCopy:
      "This preview is ready to connect to Medisure Hospital's scheduling workflow in the next phase. No information has been sent or stored.",
  },

  finalCta: {
    heading: "Your care journey can begin with one clear conversation.",
    copy: "Reach out when you are ready. We will listen first, then help you take the next step.",
  },

  contact: {
    addressLabel: "Find us",
    addressLines: [
      "Plot No. 292, Main Road, beside ADR Complex,",
      "Vivekananda Nagar, Kukatpally,",
      "Hyderabad, Telangana 500072",
    ],
    mapUrl: "https://maps.app.goo.gl/3jZbCb63ZXBHwK436",
    mapLinkLabel: "Open in Google Maps",
    phone: "040 3583 9955",
    phoneHref: "tel:+914035839955",
    email: "info@medisurehospital.com",
    emailHref: "mailto:info@medisurehospital.com",
    hours: "Open 24 hours, every day of the week",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Medisure Hospital. All rights reserved.`,
  },
};
