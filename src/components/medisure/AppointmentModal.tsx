"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { site } from "@/data/medisure-content";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

interface Errors {
  name?: string;
  phone?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const [consultType, setConsultType] = useState(site.appointment.types[0]);
  const [contactMethod, setContactMethod] = useState(
    site.appointment.contactMethods[0],
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleClose = useCallback(() => {
    setErrors({});
    setSubmitted(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    previousFocus.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const dialog = dialogRef.current;
    const first = dialog?.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        handleClose();
        return;
      }
      if (event.key !== "Tab" || !dialog) return;
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;
      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === firstEl) {
        event.preventDefault();
        lastEl.focus();
      } else if (!event.shiftKey && document.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("keydown", onKeyDown, true);
      document.body.style.overflow = "";
      previousFocus.current?.focus();
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: Errors = {};
    if (name.trim().length < 2) {
      nextErrors.name = "Please enter your full name.";
    }
    if (!/^\+?[\d\s-]{8,15}$/.test(phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleDone = () => {
    setName("");
    setPhone("");
    setMessage("");
    setConsultType(site.appointment.types[0]);
    setContactMethod(site.appointment.contactMethods[0]);
    handleClose();
  };

  const pillClasses =
    "cursor-pointer rounded-full border border-line/90 bg-white/92 px-4 py-2 text-sm text-clay shadow-[0_1px_0_rgba(255,255,255,0.85)] transition-all duration-200 has-[:checked]:border-garnet has-[:checked]:bg-rose has-[:checked]:text-garnet-deep has-[:checked]:font-medium has-[:checked]:shadow-[0_10px_24px_rgba(236,50,55,0.12)] has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-garnet has-[:focus-visible]:outline-offset-2";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
    >
      <div
        className="absolute inset-0 bg-ink/45 backdrop-blur-[2px]"
        aria-hidden="true"
        onMouseDown={handleClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-title"
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-t-[2rem] border border-white/70 bg-cream shadow-[0_32px_110px_rgba(17,17,17,0.28)] sm:rounded-[2rem]"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(238,248,255,0.95),transparent_34%),radial-gradient(circle_at_top_left,rgba(255,240,242,0.85),transparent_38%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 top-0 flex justify-center" aria-hidden="true">
          <div className="h-1.5 w-28 rounded-b-full bg-crimson" />
        </div>

        <div className="relative flex max-h-[min(92dvh,860px)] flex-col">
          <div className="shrink-0 border-b border-line/70 px-6 pb-5 pt-10 sm:px-8 sm:pb-6">
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-garnet-deep/75">
                  Medisure Hospital
                </p>
                <h2
                  id="appointment-title"
                  className="mt-2 font-serif text-2xl leading-tight text-ink sm:text-[2.1rem]"
                >
                  {submitted
                    ? site.appointment.successHeading
                    : site.appointment.heading}
                </h2>
                {!submitted && (
                  <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-clay">
                    {site.appointment.intro}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close dialog"
                className="mt-1 rounded-full border border-line/80 bg-white/90 p-2 text-clay shadow-[0_10px_24px_rgba(17,17,17,0.08)] transition-all hover:border-garnet hover:text-garnet-deep"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="modal-scroll overflow-y-auto px-6 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-6">
            {submitted ? (
              <div aria-live="polite">
                <div className="flex flex-col items-center rounded-[1.75rem] border border-rose/80 bg-white/88 px-6 py-10 text-center shadow-[0_18px_50px_rgba(236,50,55,0.08)]">
                  <CheckCircle2
                    className="size-10 text-garnet"
                    aria-hidden="true"
                  />
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-clay">
                    {site.appointment.successCopy}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleDone}
                  className="mt-6 w-full rounded-full bg-garnet px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-garnet-deep"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <fieldset className="rounded-[1.5rem] border border-line/80 bg-white/86 p-4 shadow-[0_10px_30px_rgba(17,17,17,0.035)] sm:p-5">
                  <legend className="px-2 text-sm font-semibold text-ink">
                    Type of consultation
                  </legend>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {site.appointment.types.map((type) => (
                      <label key={type} className={pillClasses}>
                        <input
                          type="radio"
                          name="consultation-type"
                          value={type}
                          checked={consultType === type}
                          onChange={() => setConsultType(type)}
                          className="sr-only"
                        />
                        {type}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="rounded-[1.5rem] border border-line/80 bg-white/86 p-4 shadow-[0_10px_30px_rgba(17,17,17,0.035)] sm:p-5">
                  <legend className="px-2 text-sm font-semibold text-ink">
                    How should we reach you?
                  </legend>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {site.appointment.contactMethods.map((method) => (
                      <label key={method} className={pillClasses}>
                        <input
                          type="radio"
                          name="contact-method"
                          value={method}
                          checked={contactMethod === method}
                          onChange={() => setContactMethod(method)}
                          className="sr-only"
                        />
                        {method}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="rounded-[1.5rem] border border-line/80 bg-white/86 p-4 shadow-[0_10px_30px_rgba(17,17,17,0.035)] sm:p-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="appointment-name"
                        className="text-sm font-semibold text-ink"
                      >
                        Full name
                      </label>
                      <input
                        id="appointment-name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name ? "appointment-name-error" : undefined
                        }
                        className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-clay/60"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p
                          id="appointment-name-error"
                          className="mt-1.5 text-sm font-medium text-garnet-deep"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="appointment-phone"
                        className="text-sm font-semibold text-ink"
                      >
                        Phone
                      </label>
                      <input
                        id="appointment-phone"
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone ? "appointment-phone-error" : undefined
                        }
                        className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-clay/60"
                        placeholder="Phone number"
                      />
                      {errors.phone && (
                        <p
                          id="appointment-phone-error"
                          className="mt-1.5 text-sm font-medium text-garnet-deep"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="appointment-message"
                      className="text-sm font-semibold text-ink"
                    >
                      Anything we should know?{" "}
                      <span className="font-normal text-clay">(optional)</span>
                    </label>
                    <textarea
                      id="appointment-message"
                      rows={4}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      className="mt-2 w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-clay/60"
                      placeholder="A few words about your visit"
                    />
                  </div>
                </div>

                <div className="sticky bottom-0 -mx-6 border-t border-line/70 bg-cream/96 px-6 pb-1 pt-4 backdrop-blur sm:-mx-8 sm:px-8">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-garnet px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_rgba(194,36,42,0.28)] transition-colors hover:bg-garnet-deep"
                  >
                    Request consultation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
