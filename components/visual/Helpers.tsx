"use client";

import Image from "next/image";
import { type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

export function tx(locale: Locale, en: string, es: string) {
  return locale === "es" ? es : en;
}

export const photos = {
  hotel:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
  timer:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
  shopping:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
  lamp:
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
  phone:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
  workspace:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
  travel:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
  app:
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80",
  concert:
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1000&q=80",
  sneakers:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
  article:
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1000&q=80",
  course:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
  video:
    "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=80",
  fitness:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80",
  ai:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
  beauty:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80",
};

export const feedPhotos = [
  photos.shopping, photos.workspace, photos.travel, photos.phone,
  photos.sneakers, photos.concert, photos.hotel, photos.timer,
  photos.lamp, photos.app, photos.article, photos.course,
  photos.video, photos.fitness, photos.ai, photos.beauty,
  "https://images.unsplash.com/photo-1549388604-817d15aa0110?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
];

export function SpecimenFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border border-white/10 bg-surface p-4">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">{title}</p>
        <p className="text-xs text-muted">visual specimen</p>
      </div>
      {children}
    </div>
  );
}

export function Photo({ src, alt, small = false }: { src: string; alt: string; small?: boolean }) {
  return (
    <div className={`relative w-full overflow-hidden bg-white/10 ${small ? "h-32" : "h-48"}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
    </div>
  );
}

export function Button({ children, full = false, className = "", "aria-label": ariaLabel, ...props }: { children: ReactNode; full?: boolean; className?: string; "aria-label"?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-accent px-4 py-3 text-sm font-black text-ink transition hover:bg-paper disabled:cursor-not-allowed disabled:opacity-40 ${full ? "w-full" : ""} ${className}`}
      aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
      {...props}
    >
      {children}
    </button>
  );
}

export function Badge({ children, tone, "aria-label": ariaLabel }: { children: ReactNode; tone: "warning" | "neutral"; "aria-label"?: string }) {
  const className = tone === "warning" ? "border-accent/50 bg-accent/15 text-accent" : "border-white/10 bg-white/[0.04] text-muted";
  return <span className={`inline-flex border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${className}`} aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}>{children}</span>;
}

export function Rating({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-20 bg-accent p-2 text-center text-ink">
      <p className="text-lg font-black">{value}</p>
      <p className="text-[10px] font-bold uppercase">{label}</p>
    </div>
  );
}

export function CheckedRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 border border-white/10 bg-ink p-3 text-sm text-muted">
      <span className="grid h-5 w-5 shrink-0 place-items-center border border-accent bg-accent text-xs font-black text-ink">✓</span>
      <span>{label}</span>
    </div>
  );
}

export function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[290px] rounded-[2rem] border border-white/15 bg-[#050505] p-3 shadow-2xl shadow-black/50">
      <div className="mx-auto mb-3 h-1.5 w-20 rounded-full bg-white/20" />
      <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#101010]">{children}</div>
    </div>
  );
}

export function PriceLine({ label, value, muted = false }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className={`flex justify-between border-b border-white/10 pb-2 text-sm ${muted ? "text-muted" : "text-paper"}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

export function BasketRow({ title, price, badge }: { title: string; price: string; badge?: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border border-white/10 bg-ink p-3">
      <div>
        <p className="font-semibold">{title}</p>
        {badge && <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent">{badge}</p>}
      </div>
      <p className="font-black">{price}</p>
    </div>
  );
}

export function SearchResult({ title, label, mutedLabel = false, locale = "en" }: { title: string; label?: string; mutedLabel?: boolean; locale?: Locale }) {
  return (
    <article className="border border-white/10 bg-ink p-4">
      <div className="mb-2 flex items-center gap-2">
        {label && <span className={mutedLabel ? "text-[10px] uppercase tracking-[0.12em] text-muted" : "text-[10px] uppercase tracking-[0.12em] text-accent"}>{label}</span>}
        <span className="text-xs text-muted">example.com</span>
      </div>
      <p className="text-lg font-semibold">{title}</p>
      <p className="mt-1 text-sm text-muted">{tx(locale, "A carefully formatted result with familiar spacing and link styling.", "Un resultado con formato cuidado y estilo familiar.")}</p>
    </article>
  );
}
