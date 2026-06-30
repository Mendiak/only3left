"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    label: "PricingTrap",
    title: "Plan comparison",
    plans: [
      { name: "Basic", price: "5€", note: "Functional, austere, vaguely punished." },
      { name: "Pro", price: "19€", note: "MOST POPULAR" },
      { name: "Ultra", price: "199€", note: "For procurement committees and dramatic screenshots." },
    ],
    pattern: "Pattern: Decoy Pricing",
    explanation: "The extreme plan makes the target plan feel moderate.",
  },
  es: {
    label: "PricingTrap",
    title: "Comparación de planes",
    plans: [
      { name: "Básico", price: "5€", note: "Funcional, austero, vagamente castigado." },
      { name: "Pro", price: "19€", note: "MÁS POPULAR" },
      { name: "Ultra", price: "199€", note: "Para comités de compras y capturas dramáticas." },
    ],
    pattern: "Patrón: Precio señuelo",
    explanation: "El plan extremo hace que el plan objetivo parezca moderado.",
  },
};

export function PricingTrap({ locale = "en" }: { locale?: Locale }) {
  const [revealed, setRevealed] = useState(false);
  const t = copy[locale];

  return (
    <article className="border border-white/10 bg-ink p-5">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">{t.label}</p>
      <h3 className="mt-4 text-xl font-semibold">{t.title}</h3>
      <div className="my-6 grid gap-2">
        {t.plans.map((plan) => (
          <button
            key={plan.name}
            onClick={() => setRevealed(true)}
            className={`border p-4 text-left transition ${
              plan.name === "Pro" ? "border-accent bg-accent/10" : "border-white/10 bg-surface hover:border-accent"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-semibold">{plan.name}</span>
              <span className="text-2xl font-black">{plan.price}</span>
            </div>
            <p className={plan.name === "Pro" ? "mt-2 text-xs font-bold text-accent" : "mt-2 text-xs text-muted"}>{plan.note}</p>
          </button>
        ))}
      </div>
      {revealed && (
        <div className="border border-accent/40 bg-accent/10 p-4">
          <p className="font-semibold text-accent">{t.pattern}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{t.explanation}</p>
        </div>
      )}
    </article>
  );
}
