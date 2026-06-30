"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

type Dimension = {
  key: string;
  label: { en: string; es: string };
  score: number;
};

export function manipulationDimensions(category: string, severity: number): Dimension[] {
  const base = severity / 5;
  const dims: Record<string, Omit<Dimension, "key">> = {
    emotional: {
      label: { en: "Emotional Pressure", es: "Presión emocional" },
      score: Math.min(1, base + 0.2),
    },
    urgency: {
      label: { en: "False Urgency", es: "Falsa urgencia" },
      score: Math.min(1, category === "urgency-pricing" ? base + 0.3 : base + 0.1),
    },
    social: {
      label: { en: "Social Proof Abuse", es: "Abuso de prueba social" },
      score: Math.min(1, category === "privacy-social" ? base + 0.3 : base + 0.05),
    },
    choice: {
      label: { en: "Choice Restriction", es: "Restricción de elección" },
      score: Math.min(1, category === "subscription-interface" ? base + 0.3 : base + 0.1),
    },
    hidden: {
      label: { en: "Hidden Information", es: "Información oculta" },
      score: Math.min(1, category === "trust-mobile" ? base + 0.3 : base + 0.15),
    },
  };

  return Object.entries(dims).map(([key, val]) => ({ key, ...val }));
}

export function ManipulationMeter({
  category,
  severity,
  locale = "en",
}: {
  category: string;
  severity: number;
  locale?: Locale;
}) {
  const [expanded, setExpanded] = useState(false);
  const dims = manipulationDimensions(category, severity);

  return (
    <div className="border border-white/10 bg-ink p-4 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.22em] text-muted">
          {locale === "es" ? "Dimensiones de manipulación" : "Manipulation dimensions"}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[10px] text-accent underline transition hover:text-accent/80"
        >
          {expanded
            ? (locale === "es" ? "Resumen" : "Summary")
            : (locale === "es" ? "Ver detalle" : "Show details")}
        </button>
      </div>

      <div className="space-y-2">
        {dims.map((d) => (
          <div key={d.key} className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted">{locale === "es" ? d.label.es : d.label.en}</span>
              <span className={`font-mono ${d.score > 0.7 ? "text-red-400" : d.score > 0.4 ? "text-yellow-400" : "text-muted/50"}`}>
                {Math.round(d.score * 100)}%
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${d.score * 100}%`,
                  background: d.score > 0.7 ? "#ff4444" : d.score > 0.4 ? "#ffe44d" : "#ffffff30",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {expanded && (
        <p className="text-[10px] text-muted/30 leading-relaxed">
          {locale === "es"
            ? "Estas cinco dimensiones miden cómo el patrón explota diferentes sesgos cognitivos. Cada patrón puntúa distinto según su categoría."
            : "These five dimensions measure how the pattern exploits different cognitive biases. Each pattern scores differently based on its category."}
        </p>
      )}
    </div>
  );
}
