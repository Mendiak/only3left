"use client";

import { useEffect, useState, useCallback } from "react";

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
  onDismiss,
  onClose,
}: {
  toast: Toast;
  locale: string;
  onDismiss: () => void;
  onClose: () => void;
}) {
  const isES = locale === "es";
  const [countdown, setCountdown] = useState(10);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (toast.type !== "prize" && toast.type !== "urgency") return;
    const t = setInterval(() => {
      setCountdown((c) => (c <= 1 ? 10 : c - 1));
    }, 1000);
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
            <div className="animate-in space-y-2 border border-red-500/30 bg-red-500/10 p-3 text-center">
              <p className="text-xs font-bold text-accent">
                {isES ? "Iluso..." : "Oh, sweet summer child..."}
              </p>
              <p className="text-[10px] text-muted">
                {isES
                  ? "Nunca fuiste el visitante 1000. El contador solo existe para que sientas urgencia y hagas clic sin pensar."
                  : "You were never visitor #1000. The counter only exists to create urgency so you click without thinking."}
              </p>
            </div>
          ) : (
            <button
              onClick={() => { setButtonClicked(true); setTimeout(onClose, 2000); }}
              className="w-full border border-accent/30 bg-accent/10 py-2 text-xs font-bold text-accent transition hover:bg-accent/20"
            >
              {isES ? "Reclamar" : "Claim prize"}
            </button>
          )}
        </div>
      );

    case "urgency":
      return (
        <div className="space-y-2">
          <p className="text-sm font-black text-red-400">
            ⚠️ {isES ? "Quedan 3 plazas" : "Only 3 spots left"}
          </p>
          <p className="text-xs text-muted">
            {isES
              ? `${countdown} personas están viendo esto ahora`
              : `${countdown} people are viewing this right now`}
          </p>
          <p className="text-[9px] text-muted/20">
            {isES ? "El contador no para de reiniciarse" : "The counter keeps resetting"}
          </p>
        </div>
      );

    case "confirmshaming":
      return (
        <div className="space-y-3">
          <p className="text-xs text-muted leading-relaxed">
            {isES
              ? "Tranqui, no pasa nada si no entiendes los patrones oscuros. No todo el mundo los capta."
              : "Don't worry, it's okay if you don't understand dark patterns. Not everyone gets them."}
          </p>
          <button
            onClick={onClose}
            className="w-full bg-accent py-2 text-xs font-black text-ink"
          >
            {isES ? "Aprender más" : "Learn more"}
          </button>
          <p className="text-[9px] text-center text-muted/20">
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
          <p className="text-xs text-muted">
            {isES ? "Tu batería está al 5%. Conecta ahora." : "Your battery is at 5%. Plug in now."}
          </p>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-red-500" style={{ width: `${Math.random() * 10 + 2}%` }} />
          </div>
          <p className="text-[9px] text-muted/20">
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
          <p className="text-xs text-muted">
            {isES ? "50% off si cierras esta ventana... espera, no." : "50% off if you close this window... wait, no."}
          </p>
          <button
            onClick={onClose}
            className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center border border-white/10 bg-ink text-[8px] text-muted/30 transition hover:text-muted/60"
            style={{ padding: 0, minWidth: 0 }}
          >
            ✕
          </button>
          <p className="text-[9px] text-muted/20">
            {isES ? "Intenta darle a la ✕ pequeña" : "Try hitting the tiny ✕"}
          </p>
        </div>
      );
  }
}

export function MetaToast({ locale = "en" }: { locale?: string }) {
  const [toast, setToast] = useState<Toast | null>(null);

  const close = useCallback(() => {
    setToast(null);
  }, []);

  const dismiss = useCallback(() => {
    if (!toast) return;
    const next = { ...toast, dismissCount: toast.dismissCount + 1 };
    if (next.dismissCount >= 3) {
      setToast(null);
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch { /* ignore */ }
      return;
    }
    setToast(null);
    setTimeout(() => setToast(next), 3000);
  }, [toast]);

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
    <div className="fixed bottom-20 right-4 z-40 w-[260px] animate-in border border-white/10 bg-[#0a0a0a] px-4 py-3 shadow-xl shadow-black/40 sm:bottom-24 sm:right-8">
      <Message toast={toast} locale={locale} onDismiss={dismiss} onClose={close} />
      {toast.type !== "confirmshaming" && toast.type !== "hard-close" && (
        <button
          onClick={dismiss}
          className="mt-2 w-full text-[9px] text-muted/30 transition hover:text-muted/60"
        >
          {locale === "es" ? "✕ Cerrar" : "✕ Dismiss"}
        </button>
      )}
      <p className="mt-1.5 text-[8px] text-center text-muted/10 uppercase tracking-widest">
        {locale === "es" ? "🍪 Este toast es un patrón oscuro" : "🍪 This toast is a dark pattern"}
      </p>
    </div>
  );
}
