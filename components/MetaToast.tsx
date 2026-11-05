"use client";

import { useEffect, useState, useCallback, useRef } from "react";

/*
 * Contrast floor for this demo toast:
 * - Any readable copy uses `text-muted` (#888888): 5.58:1 on the ink/surface
 *   background, which passes WCAG AA for normal text.
 * - Never drop informational text below `text-muted/80` (3.94:1) and reserve
 *   anything under 3:1 for purely decorative elements.
 * - The tiny close target in "hard-close" is intentional (that is the dark
 *   pattern), but it stays perceivable and keyboard reachable.
 * - `contrast-more:` overrides bump the weakest text for users who request it.
 */

type Toast = {
  id: string;
  type: "prize" | "urgency" | "confirmshaming" | "fake-notif" | "hard-close";
  dismissCount: number;
};

const STORAGE_KEY = "only3left-darktoast-shown";

function makeToast(locale: string): Toast {
  const types: Toast["type"][] = ["prize", "urgency", "confirmshaming", "fake-notif", "hard-close"];
  return {
    id: crypto.randomUUID?.() ?? Math.random().toString(36),
    type: types[Math.floor(Math.random() * types.length)],
    dismissCount: 0,
  };
}

function Message({
  toast,
  locale,
  onClose,
}: {
  toast: Toast;
  locale: string;
  onClose: () => void;
}) {
  const isES = locale === "es";
  const [countdown, setCountdown] = useState(10);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [spots, setSpots] = useState(3);
  const [timer, setTimer] = useState(300);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (toast.type !== "prize") return;
    const t = setInterval(() => {
      setCountdown((c) => (c <= 1 ? 10 : c - 1));
    }, 1000);
    return () => clearInterval(t);
  }, [toast.type]);

  useEffect(() => {
    if (toast.type !== "urgency") return;
    const t = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setExpired(true);
          setTimeout(() => {
            setExpired(false);
            setTimer(300);
          }, 1500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [toast.type]);

  useEffect(() => {
    if (toast.type !== "urgency") return;
    const t = setInterval(() => {
      setSpots(Math.floor(Math.random() * 3) + 1);
    }, 3500);
    return () => clearInterval(t);
  }, [toast.type]);

  switch (toast.type) {
    case "prize":
      return (
        <div className="space-y-3">
          <p className="text-center text-2xl">🎉</p>
          <p className="text-sm font-black text-accent text-center">
            {isES ? "¡Eres el visitante 1000!" : "You're visitor #1000!"}
          </p>
          <p className="text-xs text-muted text-center">
            {isES
              ? `Reclama tu premio en ${countdown}s`
              : `Claim your prize in ${countdown}s`}
          </p>
          {buttonClicked ? (
            <div className="motion-safe:animate-fade-in space-y-2 border border-red-500/30 bg-red-500/10 p-3 text-center">
              <p className="text-xs font-bold text-accent">
                {isES ? "Iluso..." : "Oh, sweet summer child..."}
              </p>
              <p className="text-[11px] text-muted">
                {isES
                  ? "Nunca fuiste el visitante 1000. El contador solo existe para que sientas urgencia y hagas clic sin pensar."
                  : "You were never visitor #1000. The counter only exists to create urgency so you click without thinking."}
              </p>
            </div>
          ) : (
            <button
              onClick={() => { setButtonClicked(true); setTimeout(onClose, 2000); }}
              className="w-full border border-accent/30 bg-accent/10 py-2 text-xs font-bold text-accent transition hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {isES ? "Reclamar" : "Claim prize"}
            </button>
          )}
        </div>
      );

    case "urgency":
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;

      if (expired) {
        return (
          <div className="space-y-2 text-center">
            <p className="text-sm font-black text-red-500 animate-pulse">
              {isES ? "⏰ OFERTA TERMINADA" : "⏰ OFFER EXPIRED"}
            </p>
            <p className="text-[10px] text-muted contrast-more:text-paper">
              {isES ? "(por un momento)" : "(just for a moment)"}
            </p>
          </div>
        );
      }

      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-black text-red-400">
              ⚠️ {isES ? `Quedan ${spots} plazas a este precio` : `Only ${spots} spots at this price`}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-muted">⏱</span>
            <span className="font-black text-red-400 font-mono">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
            <span className="text-muted contrast-more:text-paper">
              {isES ? "restantes" : "remaining"}
            </span>
          </div>
          <p className="text-[10px] text-muted contrast-more:text-paper">
            {isES
              ? "* Los tiempos de reacción no afectan a este contador"
              : "* Reaction times do not affect this counter"}
          </p>
        </div>
      );

    case "confirmshaming":
      return (
        <div className="space-y-3">
          <p className="text-xs text-muted leading-relaxed contrast-more:text-paper">
            {isES
              ? "Tranqui, no pasa nada si no entiendes los patrones oscuros. No todo el mundo los capta."
              : "Don't worry, it's okay if you don't understand dark patterns. Not everyone gets them."}
          </p>
          <button
            onClick={onClose}
            className="w-full bg-accent py-2 text-xs font-black text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper"
          >
            {isES ? "Aprender más" : "Learn more"}
          </button>
          <p className="text-[10px] text-center text-muted contrast-more:text-paper">
            {isES ? "No hay forma de cerrar sin hacer clic" : "No way to dismiss without clicking"}
          </p>
        </div>
      );

    case "fake-notif":
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">🔋</span>
            <p className="text-sm font-black">{isES ? "Batería baja" : "Low battery"}</p>
          </div>
          <p className="text-xs text-muted contrast-more:text-paper">
            {isES ? "Tu batería está al 5%. Conecta ahora." : "Your battery is at 5%. Plug in now."}
          </p>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-red-500" style={{ width: `${Math.random() * 10 + 2}%` }} />
          </div>
          <p className="text-[10px] text-muted contrast-more:text-paper">
            {isES ? "No es real. Solo una notificación falsa." : "Not real. Just a fake notification."}
          </p>
        </div>
      );

    case "hard-close":
      return (
        <div className="relative space-y-2">
          <p className="pr-4 text-xs font-bold text-paper">
            {isES ? "🔥 Oferta exclusiva para ti" : "🔥 Exclusive offer just for you"}
          </p>
          <p className="text-xs text-muted contrast-more:text-paper">
            {isES ? "50% off si cierras esta ventana... espera, no." : "50% off if you close this window... wait, no."}
          </p>
          <button
            onClick={onClose}
            aria-label={isES ? "Cerrar oferta" : "Close offer"}
            className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center border border-white/20 bg-ink text-[10px] text-muted transition hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent contrast-more:border-white/40 contrast-more:text-paper"
            style={{ padding: 0, minWidth: 0 }}
          >
            ✕
          </button>
          <p className="text-[10px] text-muted contrast-more:text-paper">
            {isES ? "Intenta darle a la ✕ pequeña" : "Try hitting the tiny ✕"}
          </p>
        </div>
      );
  }
}

export function MetaToast({ locale = "en" }: { locale?: string }) {
  const [toast, setToast] = useState<Toast | null>(null);
  const [exiting, setExiting] = useState(false);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Unmount only after the exit animation so the toast never disappears abruptly.
  const leave = useCallback((after?: () => void) => {
    setExiting(true);
    if (exitTimer.current) clearTimeout(exitTimer.current);
    exitTimer.current = setTimeout(() => {
      setExiting(false);
      setToast(null);
      after?.();
    }, 180);
  }, []);

  useEffect(() => () => {
    if (exitTimer.current) clearTimeout(exitTimer.current);
  }, []);

  const close = useCallback(() => {
    // A manual close opts the visitor out for the rest of the session.
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch { /* ignore */ }
    leave();
  }, [leave]);

  const dismiss = useCallback(() => {
    if (!toast) return;
    const next = { ...toast, dismissCount: toast.dismissCount + 1 };
    const isLast = next.dismissCount >= 2;
    if (isLast) {
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch { /* ignore */ }
    }
    leave(() => {
      if (!isLast) setTimeout(() => setToast(next), 3000);
    });
  }, [toast, leave]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const t = setTimeout(() => {
      setToast(makeToast(locale));
    }, 4000);

    return () => clearTimeout(t);
  }, [locale]);

  if (!toast) return null;

  return (
    <div
      role="region"
      aria-label={locale === "es" ? "Demo: toast de patrón oscuro" : "Demo: dark pattern toast"}
      className={`fixed bottom-20 right-4 z-40 w-[260px] border border-white/15 bg-surface px-4 py-3 shadow-xl shadow-black/40 ring-1 ring-white/5 contrast-more:border-white/40 sm:bottom-24 sm:right-8 ${
        exiting ? "motion-safe:animate-toast-out" : "motion-safe:animate-toast-in"
      }`}
    >
      {toast.type !== "confirmshaming" && toast.type !== "hard-close" && (
        <button
          onClick={dismiss}
          aria-label={locale === "es" ? "Cerrar este aviso" : "Dismiss this toast"}
          className="absolute right-1.5 top-1.5 grid h-6 w-6 place-items-center rounded text-xs text-muted transition hover:bg-white/5 hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent contrast-more:text-paper"
        >
          ✕
        </button>
      )}
      <div className={toast.type === "confirmshaming" || toast.type === "hard-close" ? undefined : "pr-6"}>
        <Message toast={toast} locale={locale} onClose={close} />
      </div>
      <p className="mt-2 text-[10px] text-center text-muted uppercase tracking-widest contrast-more:text-paper">
        {locale === "es" ? "Este toast es un patrón oscuro" : "This toast is a dark pattern"}
      </p>
    </div>
  );
}
