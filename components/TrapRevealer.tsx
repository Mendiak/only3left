"use client";

import { useState, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

const trapNotes: Record<string, { en: string; es: string }[]> = {
  "fake-scarcity": [
    { en: "The 'only X left' countdown is automated and resets", es: "El contador de 'solo X disponibles' es automático y se reinicia" },
    { en: "Viewer count is randomly generated", es: "El número de visitantes se genera aleatoriamente" },
    { en: "Booking failure leads to a more expensive upsell", es: "El error de reserva lleva a un upsell más caro" },
  ],
  "social-proof-inflation": [
    { en: "Customer count is artificially inflated", es: "El número de clientes está inflado artificialmente" },
    { en: "'X people bought' uses a static multiplier", es: "'X personas compraron' usa un multiplicador estático" },
  ],
  "decoy-pricing": [
    { en: "Ultra plan exists only to make Pro look cheap", es: "El plan Ultra existe solo para que Pro parezca barato" },
    { en: "Basic plan is deliberately under-featured", es: "El plan Básico está deliberadamente limitado" },
  ],
  "fake-activity": [
    { en: "User activity notifications are fabricated", es: "Las notificaciones de actividad son inventadas" },
    { en: "'X people viewing' is a random number", es: "'X personas viendo' es un número aleatorio" },
  ],
  "misdirection": [
    { en: "Key pricing info is revealed step by step", es: "La información clave de precio se revela paso a paso" },
    { en: "Cancelling or going back is deliberately hidden", es: "Cancelar o volver atrás está oculto" },
  ],
  "notification-addiction": [
    { en: "Badges auto-generate to trigger anxiety", es: "Las notificaciones se generan solas para provocar ansiedad" },
    { en: "Clearing notifications doesn't stop new ones", es: "Limpiar notificaciones no detiene las nuevas" },
  ],
  default: [
    { en: "Defaults are set to the most profitable option", es: "Las opciones por defecto son las más rentables" },
    { en: "Deselecting requires extra effort", es: "Desmarcar requiere esfuerzo extra" },
  ],
};

export function TrapRevealer({
  slug,
  children,
  locale = "en",
  title,
}: {
  slug: string;
  children: ReactNode;
  locale?: Locale;
  title: string;
}) {
  const [revealed, setRevealed] = useState(false);
  const notes = trapNotes[slug] || trapNotes.default;

  return (
    <div className="relative">
      <div className="relative">
        {revealed && (
          <div className="absolute inset-0 z-30 bg-black/40 flex items-center justify-center p-4 animate-in">
            <div className="max-w-sm border border-accent/30 bg-[#0a0a0a] p-5 space-y-3 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                {locale === "es" ? "¿Qué trampa es?" : "What's the trick?"}
              </p>
              <p className="text-sm font-black">{title}</p>
              <ul className="space-y-2">
                {notes.map((note, i) => (
                  <li key={i} className="flex gap-2 text-xs text-muted">
                    <span className="shrink-0 text-accent">#{i + 1}</span>
                    <span>{locale === "es" ? note.es : note.en}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setRevealed(false)}
                className="w-full border border-white/10 py-2 text-xs text-muted transition hover:bg-white/5"
              >
                {locale === "es" ? "Cerrar" : "Close"}
              </button>
            </div>
          </div>
        )}
        <div className={revealed ? "blur-sm pointer-events-none" : ""}>
          {children}
        </div>
      </div>
      <button
        onClick={() => setRevealed(!revealed)}
        className={`absolute bottom-3 right-3 z-30 border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition ${
          revealed
            ? "border-accent/50 bg-accent/20 text-accent"
            : "border-white/10 bg-black/60 text-muted hover:border-accent/50 hover:text-accent"
        }`}
      >
        {revealed
          ? (locale === "es" ? "Cerrar" : "Close")
          : (locale === "es" ? "¿Qué trampa?" : "What trick?")}
      </button>
    </div>
  );
}
