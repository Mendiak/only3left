"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState, type CSSProperties } from "react";
import type { Locale } from "@/lib/i18n";
import { localePath, ui } from "@/lib/i18n";
import { photos } from "./visual";

type TrapKey = "urgency" | "fomo" | "doubt";

const trapKeys: TrapKey[] = ["urgency", "fomo", "doubt"];

/**
 * The hero specimen is a fake hotel listing. Dissecting it does not just
 * highlight the manipulative elements: each one opens a small annotation with
 * an arrow pointing back at it, naming the dark pattern it belongs to.
 */
export function HeroSpecimen({ locale = "en" }: { locale?: Locale }) {
  const copy = ui[locale];
  const [active, setActive] = useState<Set<TrapKey>>(new Set());
  const baseId = useId();

  const labels: Record<TrapKey, string> = {
    urgency: copy.specimenUrgency,
    fomo: copy.specimenFomo,
    doubt: copy.specimenDoubt,
  };

  const patterns: Record<TrapKey, string> = {
    urgency: copy.specimenPatternUrgency,
    fomo: copy.specimenPatternFomo,
    doubt: copy.specimenPatternDoubt,
  };

  const notes: Record<TrapKey, string> = {
    urgency: copy.specimenNoteUrgency,
    fomo: copy.specimenNoteFomo,
    doubt: copy.specimenNoteDoubt,
  };

  const hrefs: Record<TrapKey, string> = {
    urgency: localePath(locale, "/patterns/fake-scarcity"),
    fomo: localePath(locale, "/patterns/fake-activity"),
    doubt: localePath(locale, "/patterns/fake-discount"),
  };

  const isOn = (key: TrapKey) => active.has(key);
  const allOn = active.size === trapKeys.length;

  const toggle = (key: TrapKey) =>
    setActive((previous) => {
      const next = new Set(previous);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const toggleAll = () => setActive(allOn ? new Set() : new Set(trapKeys));

  const zone = (key: TrapKey) =>
    `relative -ml-3 rounded-sm border-l-2 py-1 pl-3 transition-colors duration-200 ${
      isOn(key) ? "border-accent bg-accent/[0.06]" : "border-transparent"
    }`;

  const calloutId = (key: TrapKey) => `${baseId}-callout-${key}`;

  return (
    <figure className="relative self-center border border-white/10 bg-surface shadow-2xl shadow-black/40 animate-scale-in">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3">
        <span className="text-xs uppercase tracking-[0.28em] text-accent">{copy.specimenLabel}</span>
        <button
          type="button"
          onClick={toggleAll}
          aria-pressed={allOn}
          className={`border px-2.5 py-1.5 text-[10px] uppercase tracking-[0.18em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
            allOn
              ? "border-accent/60 bg-accent/15 text-accent"
              : "border-white/10 text-muted hover:border-accent/50 hover:text-accent"
          }`}
        >
          {allOn ? copy.specimenReset : copy.specimenRevealAll}
        </button>
      </div>

      <div className="relative h-36 w-full overflow-hidden bg-white/10">
        <Image
          src={photos.hotel}
          alt={copy.specimenPhotoAlt}
          fill
          priority
          sizes="(min-width: 1024px) 480px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute bottom-3 left-5 text-[10px] uppercase tracking-[0.22em] text-paper/70">
          {copy.specimenCaption}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="relative">
          <div className={zone("fomo")}>
            <span aria-hidden="true" className="absolute -left-3 top-0 grid size-6 place-items-center rounded-full border border-accent bg-ink text-[10px] font-black text-accent">1</span>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="inline-block size-1.5 rounded-full bg-green-400 animate-dot-blink" aria-hidden="true" />
                <span>5 {copy.peopleViewing}</span>
              </div>
              <div className="flex items-center gap-1" role="img" aria-label={copy.specimenRating}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} aria-hidden="true" className="size-3.5" viewBox="0 0 20 20" fill={i < 4 ? "#ffe44d" : "#333"}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-xs text-muted">4.2</span>
              </div>
            </div>
          </div>
          {isOn("fomo") && (
            <Callout
              id={calloutId("fomo")}
              index={1}
              pattern={patterns.fomo}
              note={notes.fomo}
              href={hrefs.fomo}
              seeLabel={copy.specimenSeePattern}
              closeLabel={copy.specimenClose}
              onClose={() => toggle("fomo")}
            />
          )}
        </div>

        <div className="relative">
          <div className={zone("urgency")}>
            <span aria-hidden="true" className="absolute -left-3 top-0 grid size-6 place-items-center rounded-full border border-accent bg-ink text-[10px] font-black text-accent">2</span>
            <p className="text-4xl font-black text-accent animate-glow-pulse">{copy.specimenTitle}</p>
            <p className="mt-1 text-sm text-muted">{copy.specimenDesc}</p>
            <div className="mt-3">
              <div className="mb-1.5 flex items-center justify-between text-xs text-muted">
                <span>{copy.roomsLeft}</span>
                <span>{copy.specimenBooked}</span>
              </div>
              <div
                className="h-2 w-full overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={11}
                aria-label={copy.roomsLeft}
              >
                <div
                  className="h-full rounded-full bg-accent animate-stock-drop"
                  style={{ "--stock-width": "11%" } as CSSProperties}
                />
              </div>
            </div>
          </div>
          {isOn("urgency") && (
            <Callout
              id={calloutId("urgency")}
              index={2}
              pattern={patterns.urgency}
              note={notes.urgency}
              href={hrefs.urgency}
              seeLabel={copy.specimenSeePattern}
              closeLabel={copy.specimenClose}
              onClose={() => toggle("urgency")}
            />
          )}
        </div>

        <div className="relative">
          <div className={zone("doubt")}>
            <span aria-hidden="true" className="absolute -left-3 top-0 grid size-6 place-items-center rounded-full border border-accent bg-ink text-[10px] font-black text-accent">3</span>
            <div className="flex items-baseline gap-2">
              <span className="text-lg text-muted line-through">€189</span>
              <span className="text-2xl font-bold text-paper">€94</span>
              <span className="rounded bg-red-500/20 px-1.5 py-0.5 text-xs font-semibold text-red-400">-50%</span>
            </div>
          </div>
          {isOn("doubt") && (
            <Callout
              id={calloutId("doubt")}
              index={3}
              pattern={patterns.doubt}
              note={notes.doubt}
              href={hrefs.doubt}
              seeLabel={copy.specimenSeePattern}
              closeLabel={copy.specimenClose}
              onClose={() => toggle("doubt")}
            />
          )}
        </div>

        <div aria-hidden="true" className="w-full select-none bg-accent py-3 text-center text-sm font-bold uppercase tracking-widest text-ink">
          {copy.bookNow}
        </div>
        <p className="sr-only">{copy.specimenDecorative}</p>

        <div className="grid grid-cols-3 gap-2 text-center text-[10px] uppercase tracking-[0.16em]">
          {trapKeys.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => toggle(key)}
              aria-expanded={isOn(key)}
              aria-controls={isOn(key) ? calloutId(key) : undefined}
              className={`flex min-h-11 items-center justify-center border py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                isOn(key)
                  ? "border-accent/60 bg-accent/15 text-accent"
                  : "border-white/10 text-muted hover:border-accent/50 hover:text-accent"
              }`}
            >
              {labels[key]}
            </button>
          ))}
        </div>

        <p className="text-xs leading-5 text-muted" aria-live="polite">
          {active.size === 0 ? copy.specimenHint : copy.specimenCalloutHint}
        </p>
      </div>

      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-muted">
        <span>{copy.specimenPlacard}</span>
        <span className="flex items-center gap-3">
          <span>
            {copy.specimenSeverity} <span className="text-accent">5/5</span>
          </span>
          <Link
            href={localePath(locale, "/patterns/fake-scarcity")}
            className="normal-case tracking-normal text-accent link-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {copy.specimenSeePattern}
          </Link>
        </span>
      </figcaption>
    </figure>
  );
}

function Callout({
  id,
  index,
  pattern,
  note,
  href,
  seeLabel,
  closeLabel,
  onClose,
}: {
  id: string;
  index: number;
  pattern: string;
  note: string;
  href: string;
  seeLabel: string;
  closeLabel: string;
  onClose: () => void;
}) {
  return (
    <div
      id={id}
      className="relative mt-3 border border-accent/40 bg-[#0a0a0a] p-3 shadow-xl shadow-black/50 animate-fade-in-up"
    >
      <span aria-hidden="true" className="absolute -top-3 left-3 h-3 w-px bg-accent/40" />
      <span
        aria-hidden="true"
        className="absolute -top-[7px] left-[7px] size-3 rotate-45 border-l border-t border-accent/40 bg-[#0a0a0a]"
      />
      <div className="flex items-start justify-between gap-2">
        <p className="text-[10px] uppercase tracking-[0.18em] text-accent">
          <span className="mr-1.5 font-black">{index}</span>
          {pattern}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="-mr-1 -mt-1 grid size-6 place-items-center text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <p className="mt-1 text-xs leading-5 text-muted">{note}</p>
      <Link
        href={href}
        className="mt-2 inline-block text-[10px] uppercase tracking-[0.16em] text-accent link-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {seeLabel} →
      </Link>
    </div>
  );
}
