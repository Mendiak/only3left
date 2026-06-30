"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

type CookieChoice = "accept" | "highlighted" | "manage" | null;

const copy = {
  en: {
    label: "CookieSimulator",
    title: "Consent banner",
    text: "We value your privacy and our thirty-four highly aligned advertising partners.",
    accept: "Accept",
    acceptHighlighted: "Accept highlighted",
    manage: "Manage 17 settings",
    pattern: "Pattern: Cookie Labyrinth",
    explanation: "Consent is shaped by unequal effort, unequal contrast, and a management path designed to tire out intent.",
  },
  es: {
    label: "CookieSimulator",
    title: "Banner de consentimiento",
    text: "Valoramos tu privacidad y a nuestros treinta y cuatro socios publicitarios estrechamente alineados.",
    accept: "Aceptar",
    acceptHighlighted: "Aceptar destacado",
    manage: "Gestionar 17 ajustes",
    pattern: "Patrón: Laberinto de cookies",
    explanation: "El consentimiento se moldea con esfuerzo desigual, contraste desigual y una ruta de gestión diseñada para agotar la intención.",
  },
};

export function CookieSimulator({ locale = "en" }: { locale?: Locale }) {
  const [choice, setChoice] = useState<CookieChoice>(null);
  const t = copy[locale];

  return (
    <article className="group border border-white/10 bg-ink p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">{t.label}</p>
      <h3 className="mt-4 text-xl font-semibold">{t.title}</h3>
      <div className="my-6 space-y-3 border border-white/10 bg-surface p-4">
        <p className="text-sm leading-6 text-muted">{t.text}</p>
        <div className="grid gap-2">
          <button onClick={() => setChoice("accept")} className="border border-white/20 px-3 py-2 text-left text-sm transition-all duration-200 hover:scale-[1.02] hover:border-accent active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            {t.accept}
          </button>
          <button onClick={() => setChoice("highlighted")} className="bg-accent px-3 py-2 text-left text-sm font-semibold text-ink transition-all duration-200 hover:bg-paper active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            {t.acceptHighlighted}
          </button>
          <button onClick={() => setChoice("manage")} className="border border-white/10 px-3 py-2 text-left text-sm text-muted transition-all duration-200 hover:scale-[1.02] hover:border-accent hover:text-paper active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            {t.manage}
          </button>
        </div>
      </div>
      {choice && (
        <div className="border border-accent/40 bg-accent/10 p-4 animate-fade-in-up">
          <p className="font-semibold text-accent">{t.pattern}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{t.explanation}</p>
        </div>
      )}
    </article>
  );
}
