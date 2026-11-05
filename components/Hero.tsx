import Link from "next/link";
import { HeroSpecimen } from "@/components/HeroSpecimen";
import type { Locale } from "@/lib/i18n";
import { localePath, ui } from "@/lib/i18n";

type HeroProps = {
  locale?: Locale;
};

export function Hero({ locale = "en" }: HeroProps) {
  const copy = ui[locale];

  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-x-0 top-16 h-px editorial-rule opacity-50" />
      <div className="mx-auto grid min-h-[72vh] max-w-6xl content-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="animate-fade-in-up">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted">
            <span>{copy.heroTagline}</span>
          </div>
          {/*
            The brand wordmark is decorative from a search perspective: nobody
            searches for it yet. The h1 carries the query the page can win
            ("dark patterns"), while the visual hierarchy stays identical.
          */}
          <p className="max-w-4xl text-5xl font-black leading-none tracking-[-0.04em] text-paper sm:text-7xl lg:text-8xl">
            ONLY 3 LEFT™
          </p>
          <h1 className="mt-5 max-w-3xl text-2xl text-accent sm:text-3xl lg:text-4xl">
            {copy.heroSubtitle}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            {copy.heroText}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={localePath(locale, "/patterns")} className="bg-accent px-5 py-3 font-semibold text-ink transition-all duration-200 hover:scale-105 hover:bg-paper active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
              {copy.explorePatterns}
            </Link>
            <Link href={localePath(locale, "/random")} className="border border-white/20 px-5 py-3 font-semibold text-paper transition-all duration-200 hover:scale-105 hover:border-accent hover:text-accent active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink">
              {copy.randomManipulation}
            </Link>
          </div>
          <a
            href="#definition"
            className="group mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="h-px w-6 bg-current transition-all duration-200 group-hover:w-10" aria-hidden="true" />
            {copy.heroScroll}
          </a>
        </div>

        <HeroSpecimen locale={locale} />
      </div>
    </section>
  );
}
