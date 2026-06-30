"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "only3left-consent";

function loadConsent(): boolean | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw !== null) return JSON.parse(raw) as boolean;
  } catch { /* ignore */ }
  return null;
}

function saveConsent(value: boolean) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); } catch { /* ignore */ }
}

export function useConsent() {
  const [consented, setConsented] = useState<boolean | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setConsented(loadConsent());
    setReady(true);
  }, []);
  const accept = () => { saveConsent(true); setConsented(true); };
  const reject = () => { saveConsent(false); setConsented(false); };
  return { consented, ready, accept, reject };
}

export function CookieBanner({
  locale = "en",
  onAccept,
  onReject,
  visible,
}: {
  locale?: string;
  onAccept: () => void;
  onReject: () => void;
  visible: boolean;
}) {
  const [dismissed, setDismissed] = useState(false);
  const [justActed, setJustActed] = useState<"accept" | "reject" | null>(null);

  if (!visible || dismissed) return null;

  const isES = locale === "es";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in border-t border-white/10 bg-[#0a0a0a] p-4 shadow-2xl shadow-black/60">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl space-y-1">
          <p className="text-sm font-black">{isES ? "🍪 Aviso de cookies" : "🍪 Cookie notice"}</p>
          <p className="text-xs text-muted leading-relaxed">
            {isES
              ? "Usamos cookies para analytics, personalización y, también, para juzgar tu gusto musical. Puedes aceptar o rechazar — ambas opciones funcionan de verdad. Prometido."
              : "We use cookies for analytics, personalisation and also to judge your taste in music. Both accept and reject genuinely work. Promised."}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={() => { onReject(); setJustActed("reject"); }}
            className="border border-white/20 px-5 py-2.5 text-sm font-bold text-paper transition hover:bg-white/5"
          >
            {isES ? "Rechazar todo" : "Reject all"}
          </button>
          <button
            onClick={() => { onAccept(); setJustActed("accept"); }}
            className="bg-accent px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-accent/80 active:scale-95"
          >
            {isES ? "Aceptar todo" : "Accept all"}
          </button>
        </div>
      </div>

      {justActed && (
        <div className="mx-auto mt-3 max-w-5xl animate-in border border-accent/20 bg-accent/5 px-4 py-2 text-xs text-muted">
          {justActed === "accept"
            ? isES
              ? "Consentimiento guardado. También, sabemos que te gustan los covers malos de los 90."
              : "Consent saved. Also, we know you like bad 90s covers."
            : isES
              ? "Preferencia guardada. Tranqui, no te vamos a mentir — aunque estéticamente duela."
              : "Preference saved. Don't worry, we won't lie to you — even if it's aesthetically painful."}
          <button onClick={() => setDismissed(true)} className="ml-3 text-muted/30 hover:text-muted">&times;</button>
        </div>
      )}
    </div>
  );
}
