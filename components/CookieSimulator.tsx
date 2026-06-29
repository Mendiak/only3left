"use client";

import { useState } from "react";

type CookieChoice = "accept" | "highlighted" | "manage" | null;

export function CookieSimulator() {
  const [choice, setChoice] = useState<CookieChoice>(null);

  return (
    <article className="border border-white/10 bg-ink p-5">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">CookieSimulator</p>
      <h3 className="mt-4 text-xl font-semibold">Consent banner</h3>
      <div className="my-6 space-y-3 border border-white/10 bg-surface p-4">
        <p className="text-sm leading-6 text-muted">
          We value your privacy and our thirty-four highly aligned advertising partners.
        </p>
        <div className="grid gap-2">
          <button onClick={() => setChoice("accept")} className="border border-white/20 px-3 py-2 text-left text-sm transition hover:border-accent">
            Accept
          </button>
          <button onClick={() => setChoice("highlighted")} className="bg-accent px-3 py-2 text-left text-sm font-semibold text-ink transition hover:bg-paper">
            Accept highlighted
          </button>
          <button onClick={() => setChoice("manage")} className="border border-white/10 px-3 py-2 text-left text-sm text-muted transition hover:border-accent hover:text-paper">
            Manage 17 settings
          </button>
        </div>
      </div>
      {choice && (
        <div className="border border-accent/40 bg-accent/10 p-4">
          <p className="font-semibold text-accent">Pattern: Cookie Labyrinth</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Consent is shaped by unequal effort, unequal contrast, and a management path designed to tire out intent.
          </p>
        </div>
      )}
    </article>
  );
}
