"use client";

import type { InputHTMLAttributes, ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

export function SpecimenCaption({ children }: { children: ReactNode }) {
  return <p className="text-[10px] leading-4 text-muted/70">{children}</p>;
}

export function SpecimenProgress({
  value,
  label,
  tone = "accent",
}: {
  value: number;
  label: string;
  tone?: "accent" | "danger";
}) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamped)}
      className="h-2 w-full overflow-hidden rounded-full bg-white/10"
    >
      <div
        className={`h-full rounded-full transition-all duration-300 ${tone === "danger" ? "bg-red-400" : "bg-accent"}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

export function ActivityToast({ initial, children }: { initial: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 border border-white/10 bg-ink px-3 py-2 text-sm text-muted">
      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-[10px] font-black text-ink">
        {initial}
      </span>
      <span className="min-w-0">{children}</span>
    </div>
  );
}

export function SpecimenField({ label, className = "", ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block text-left">
      <span className="mb-1 block text-[10px] uppercase tracking-[0.12em] text-muted">{label}</span>
      <input
        {...props}
        className={`w-full border border-white/10 bg-[#101010] px-3 py-2 text-sm text-paper outline-none transition focus:border-accent/60 ${className}`}
      />
    </label>
  );
}

export function OptionRow({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onChange}
      className="flex w-full items-center gap-3 border border-white/10 bg-ink p-3 text-left text-sm text-muted transition hover:border-white/20 focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent"
    >
      <span
        aria-hidden="true"
        className={`grid size-5 shrink-0 place-items-center border text-xs font-black ${
          checked ? "border-accent bg-accent text-ink" : "border-white/20 text-transparent"
        }`}
      >
        ✓
      </span>
      <span className="min-w-0">{children}</span>
    </button>
  );
}

export function DemoPauseButton({
  paused,
  onToggle,
  locale,
}: {
  paused: boolean;
  onToggle: () => void;
  locale: Locale;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={paused}
      className="text-[10px] uppercase tracking-[0.12em] text-muted/70 underline underline-offset-2 transition hover:text-paper focus-visible:outline focus-visible:outline-1 focus-visible:outline-accent"
    >
      {paused
        ? locale === "es"
          ? "Reanudar"
          : "Resume"
        : locale === "es"
          ? "Pausar"
          : "Pause"}
    </button>
  );
}
