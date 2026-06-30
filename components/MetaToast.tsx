"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "only3left-toast-shown";

const messages = {
  en: [
    "🕵️ This page contains a dark pattern. Oh wait — you came here to see it.",
    "⚠️ You have been manipulated. 3 times. This session only.",
    "🤨 Are you sure you wanted to click that?",
    "🧠 This site uses dark patterns to teach you about dark patterns. We're meta like that.",
    "🎯 Dark pattern detected. The irony is not lost on us.",
    "💡 Fun fact: every pattern on this site has been used against real users.",
    "🔄 You just experienced a dark pattern. Want to see how it works? You already are.",
    "🍪 This website uses cookies, trackers, and critical thinking.",
  ],
  es: [
    "🕵️ Esta página contiene un patrón oscuro. Espera — tú viniste a verlo.",
    "⚠️ Has sido manipulado. 3 veces. Solo en esta sesión.",
    "🤨 ¿Seguro que querías hacer clic ahí?",
    "🧠 Esta web usa patrones oscuros para enseñarte patrones oscuros. Somos meta así.",
    "🎯 Patrón oscuro detectado. La ironía no se nos escapa.",
    "💡 Dato curioso: cada patrón de esta web se ha usado contra usuarios reales.",
    "🔄 Acabas de experimentar un patrón oscuro. ¿Quieres ver cómo funciona? Ya lo estás haciendo.",
    "🍪 Esta web usa cookies, trackers y pensamiento crítico.",
  ],
};

export function MetaToast({ locale = "en" }: { locale?: string }) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (alreadyShown) return;

    const msgs = messages[locale as keyof typeof messages] ?? messages.en;
    setMessage(msgs[Math.floor(Math.random() * msgs.length)]);

    const showTimer = setTimeout(() => setVisible(true), 2500);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* ignore */ }
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [locale]);

  if (!visible) return null;

  return (
    <div
      onClick={() => { setVisible(false); try { sessionStorage.setItem(SESSION_KEY, "1"); } catch { /* ignore */ } }}
      className="fixed bottom-20 right-4 z-40 max-w-[280px] animate-in cursor-pointer border border-accent/20 bg-[#0a0a0a] px-4 py-3 shadow-xl shadow-black/40 transition hover:border-accent/40 sm:bottom-24 sm:right-8"
    >
      <p className="text-xs text-muted leading-relaxed">{message}</p>
    </div>
  );
}
