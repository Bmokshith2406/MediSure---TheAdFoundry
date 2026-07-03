import { site } from "@/data/medisure-content";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <a href="#top" className="flex w-fit items-center gap-2.5">
          <BrandLogo className="h-10 w-10" />
          <span className="text-[15px] font-semibold text-ink">
            Medisure Hospital
          </span>
        </a>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-clay transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:text-right">
          <p className="text-sm text-clay">{site.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
