"use client";

import { useEffect, useState } from "react";
import { Clock3, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { site } from "@/data/medisure-content";
import { useAppointment } from "./AppointmentContext";
import BrandLogo from "./BrandLogo";

export default function Header() {
  const { openAppointment } = useAppointment();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || menuOpen
          ? "shadow-[0_2px_24px_rgba(17,17,17,0.08)]"
          : ""
      }`}
    >
      <div className="border-b border-white/10 bg-ink text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-5 py-2 text-[10px] sm:flex-row sm:items-center sm:justify-between sm:gap-x-6 sm:gap-y-2 sm:px-8 sm:text-xs">
          <div className="grid w-full grid-cols-2 gap-x-3 gap-y-1 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-1.5">
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-1 text-white/92 transition-colors hover:text-white sm:gap-1.5"
            >
              <Phone aria-hidden="true" className="size-3.5" />
              {site.contact.phone}
            </a>
            <a
              href={site.contact.emailHref}
              className="inline-flex items-center gap-1 text-white/92 transition-colors hover:text-white sm:gap-1.5"
            >
              <Mail aria-hidden="true" className="size-3.5" />
              {site.contact.email}
            </a>
            <span className="col-span-2 inline-flex items-center gap-1 text-white/78 sm:col-auto sm:gap-1.5">
              <Clock3 aria-hidden="true" className="size-3.5" />
              {site.contact.hours}
            </span>
          </div>
          <a
            href={site.contact.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-white/14 bg-white/6 px-3 py-1 text-white/88 transition-colors hover:bg-white/12 hover:text-white lg:inline-flex"
          >
            <MapPin aria-hidden="true" className="size-3.5" />
            Kukatpally, Hyderabad
          </a>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-line bg-cream/94 backdrop-blur-md"
            : "border-transparent bg-cream/78 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-2.5"
            aria-label="Medisure Hospital, back to top"
          >
            <BrandLogo className="h-12 w-12" />
            <span className="truncate text-[15px] font-semibold tracking-tight text-ink">
              Medisure Hospital
            </span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-clay transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={openAppointment}
              className="hidden rounded-full bg-garnet px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-garnet-deep sm:block"
            >
              {site.bookLabel}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="rounded-full border border-line bg-white p-2.5 text-ink lg:hidden"
            >
              {menuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-cream px-5 pb-6 pt-3 lg:hidden"
        >
          <ul className="flex flex-col">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-line py-3.5 text-base font-medium text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-2xl border border-line bg-white px-4 py-3 text-sm text-clay">
            <a
              href={site.contact.phoneHref}
              className="flex items-center gap-2 font-medium text-ink"
            >
              <Phone aria-hidden="true" className="size-4 text-crimson" />
              {site.contact.phone}
            </a>
            <a
              href={site.contact.emailHref}
              className="mt-2 flex items-center gap-2 font-medium text-ink"
            >
              <Mail aria-hidden="true" className="size-4 text-crimson" />
              {site.contact.email}
            </a>
            <p className="mt-2 flex items-center gap-2">
              <Clock3 aria-hidden="true" className="size-4 text-crimson" />
              {site.contact.hours}
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              openAppointment();
            }}
            className="mt-5 w-full rounded-full bg-garnet px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-garnet-deep"
          >
            {site.bookLabel}
          </button>
        </nav>
      )}
    </header>
  );
}
