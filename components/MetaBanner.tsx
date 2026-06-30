"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SESSION_KEY = "only3left-banner-dismissed";

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
  const [message, setMessage] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) {
      setDismissed(true);
      return;
    }
    const msgs = banners[locale as keyof typeof banners] ?? banners.en;
    setMessage(msgs[Math.floor(Math.random() * msgs.length)]);
    setDismissed(false);
  }, [pathname, locale]);

  if (dismissed) return null;

  return (
    <div className="border-b border-accent/10 bg-accent/[0.03] px-4 py-2 text-center">
      <p className="text-[11px] text-muted/50 inline">{message}</p>
      <button
        onClick={() => { setDismissed(true); try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* ignore */ } }}
        className="ml-2 text-[11px] text-muted/20 transition hover:text-muted/50"
      >
        ✕
      </button>
    </div>
  );
}
