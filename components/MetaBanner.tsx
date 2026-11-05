"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SESSION_KEY = "only3left-banner-dismissed";
const ROTATE_MS = 6000;

const banners = {
  en: [
    "🧠 You are being manipulated. By us. For educational purposes.",
    "🎯 Spot the dark pattern. There might be one on every page... or more.",
    "🕵️ This site is a field guide to deceptive UX. Yes, this banner is ironic.",
    "⚠️ Only 3 left? More like 46 dark patterns to explore.",
    "🔔 You have 1 new notification. It's this banner. It's always this banner.",
    "💡 Dark patterns work because they exploit cognitive biases. This one included.",
    "🔍 This site isn't broken. It's designed this way.",
    "🔄 You've seen 1 dark pattern. 45 more to go. (This one doesn't count.)",
    "🧪 This site is an interactive experiment. You are the subject. (Just kidding. Or not.)",
    "🧪 No users were harmed in this experiment. That we know of.",
  ],
  es: [
    "🧠 Estás siendo manipulado. Por nosotros. Con fines educativos.",
    "🎯 Encuentra el patrón oscuro. Puede que haya uno en cada página... o más.",
    "🕵️ Esta web es una guía de UX engañosa. Sí, este banner es irónico.",
    "⚠️ ¿Only 3 left? Más bien 46 patrones oscuros por explorar.",
    "🔔 Tienes 1 notificación nueva. Es este banner. Siempre es este banner.",
    "💡 Los patrones oscuros funcionan porque explotan sesgos cognitivos. Este también.",
    "🔍 Esta web no está rota. Está diseñada así.",
    "🔄 Has visto 1 patrón oscuro. Te quedan 45. (Este no cuenta.)",
    "🧪 Esta web es un experimento interactivo. Tú eres el sujeto. (Es broma. O no.)",
    "🧪 Ningún usuario ha sido dañado en este experimento. Que sepamos.",
  ],
};

export function MetaBanner({ locale = "en" }: { locale?: string }) {
  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const pathname = usePathname();

  const messages = banners[locale as keyof typeof banners] ?? banners.en;

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) setDismissed(true);
    } catch {
      /* storage unavailable */
    }
  }, []);

  // Each navigation restarts the rotation so the first message is predictable.
  useEffect(() => {
    setIndex(0);
  }, [pathname, locale]);

  useEffect(() => {
    if (dismissed || paused) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [dismissed, paused, messages.length]);

  if (dismissed) return null;

  return (
    <div
      className="border-b border-white/10 bg-white/[0.03]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="mx-auto flex min-h-11 max-w-6xl items-center justify-center gap-3 px-4 py-2">
        {/*
          The message container keeps a stable height and the text is swapped in
          place with a keyed fade, so rotation never shifts the page layout.
          No aria-live: a rotating region would re-announce every 6 seconds.
        */}
        <p className="flex-1 text-center text-xs leading-5 text-muted contrast-more:text-paper">
          <span key={index} className="motion-safe:animate-fade-in inline-block">
            {messages[index]}
          </span>
        </p>
        <button
          type="button"
          onClick={() => {
            setDismissed(true);
            try {
              sessionStorage.setItem(SESSION_KEY, "1");
            } catch {
              /* storage unavailable */
            }
          }}
          aria-label={locale === "es" ? "Cerrar este aviso" : "Dismiss this banner"}
          className="shrink-0 rounded p-1 text-xs text-muted transition hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent contrast-more:text-paper"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
