"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SESSION_KEY = "only3left-banner-dismissed";
const ROTATE_MS = 6000;

const banners = {
  en: [
    "🧠 You are being manipulated. By us. For educational purposes.",
    "🎯 Spot the dark pattern. There's one on every page.",
    "🕵️ This site is a field guide to deceptive UX. Yes, this banner is ironic.",
    "⚠️ Only 3 left? More like 46 dark patterns to explore.",
    "💡 Dark patterns work because they exploit cognitive biases. This one included.",
    "🔍 Every UI element here was designed to trick you. That's the point.",
    "🔄 You've seen 1 dark pattern. 45 more to go. (This one doesn't count.)",
    "🧪 This site is an interactive experiment. You are the subject. (Just kidding. Or not.)",
  ],
  es: [
    "🧠 Estás siendo manipulado. Por nosotros. Con fines educativos.",
    "🎯 Encuentra el patrón oscuro. Hay uno en cada página.",
    "🕵️ Esta web es una guía de UX engañosa. Sí, este banner es irónico.",
    "⚠️ ¿Only 3 left? Más bien 46 patrones oscuros por explorar.",
    "💡 Los patrones oscuros funcionan porque explotan sesgos cognitivos. Este incluido.",
    "🔍 Cada elemento UI aquí fue diseñado para engañarte. De eso se trata.",
    "🔄 Has visto 1 patrón oscuro. Te quedan 45. (Este no cuenta.)",
    "🧪 Esta web es un experimento interactivo. Tú eres el sujeto. (Es broma. O no.)",
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
        <p className="flex-1 text-center text-xs leading-5 text-muted/80">
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
          className="shrink-0 rounded p-1 text-xs text-muted/40 transition hover:text-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
