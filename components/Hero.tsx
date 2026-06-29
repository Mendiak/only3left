import Link from "next/link";
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
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-muted">Digital museum of regrettable persuasion</p>
          <h1 className="max-w-4xl text-5xl font-black leading-none tracking-normal text-paper sm:text-7xl lg:text-8xl">
            ONLY 3 LEFT™
          </h1>
          <p className="mt-5 text-2xl text-accent sm:text-3xl">{copy.heroSubtitle}</p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            {copy.heroText}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={localePath(locale, "/patterns")} className="bg-accent px-5 py-3 font-semibold text-ink transition hover:bg-paper">
              {copy.explorePatterns}
            </Link>
            <Link href={localePath(locale, "/random")} className="border border-white/20 px-5 py-3 font-semibold text-paper transition hover:border-accent hover:text-accent">
              {copy.randomManipulation}
            </Link>
          </div>
        </div>

        <div className="self-center border border-white/10 bg-surface p-5 shadow-2xl shadow-black/30 animate-slow-pulse">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs uppercase tracking-[0.28em] text-accent">Live specimen</span>
            <span className="text-xs text-muted">ethically contained</span>
          </div>
          <div className="space-y-5">
            <div>
              <p className="text-4xl font-black">Only 3 left</p>
              <p className="mt-2 text-muted">This warning has been preserved in its natural habitat.</p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs uppercase tracking-[0.18em] text-muted">
              <span className="border border-white/10 py-3">Urgency</span>
              <span className="border border-white/10 py-3">FOMO</span>
              <span className="border border-white/10 py-3">Doubt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
