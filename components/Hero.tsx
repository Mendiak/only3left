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
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-muted">{copy.heroTagline}</p>
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

        <div className="self-center border border-white/10 bg-surface shadow-2xl shadow-black/40">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <span className="text-xs uppercase tracking-[0.28em] text-accent">{copy.specimenLabel}</span>
            <span className="text-xs text-muted">{copy.specimenCaption}</span>
          </div>

          <div className="space-y-4 p-5">
            <div className="flex items-center gap-2 text-xs text-muted">
              <span className="inline-block size-1.5 rounded-full bg-green-400 animate-dot-blink" />
              <span>5 {copy.peopleViewing}</span>
            </div>

            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="size-3.5" viewBox="0 0 20 20" fill={i < 4 ? "#ffe44d" : "#333"}>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1.5 text-xs text-muted">4.2</span>
            </div>

            <div>
              <p className="text-4xl font-black text-accent animate-glow-pulse">{copy.specimenTitle}</p>
              <p className="mt-1 text-sm text-muted">{copy.specimenDesc}</p>
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg text-muted line-through">€189</span>
                <span className="text-2xl font-bold text-paper">€94</span>
                <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-xs font-semibold text-red-400">-50%</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-muted">
                <span>{copy.roomsLeft}</span>
                <span>89%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-accent animate-stock-drop"
                  style={{ "--stock-width": "11%" } as React.CSSProperties}
                />
              </div>
            </div>

            <button className="w-full bg-accent py-3 text-sm font-bold uppercase tracking-widest text-ink transition hover:bg-paper">
              {copy.bookNow}
            </button>

            <div className="grid grid-cols-3 gap-2 text-center text-xs uppercase tracking-[0.18em] text-muted">
              <span className="border border-white/10 py-2">{copy.specimenUrgency}</span>
              <span className="border border-white/10 py-2">{copy.specimenFomo}</span>
              <span className="border border-white/10 py-2">{copy.specimenDoubt}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
