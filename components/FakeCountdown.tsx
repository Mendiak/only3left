"use client";

import { useEffect, useState } from "react";

export function FakeCountdown() {
  const [seconds, setSeconds] = useState(12);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (seconds === 0) {
      setExpired(true);
      return;
    }

    const timer = window.setTimeout(() => setSeconds((value) => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [seconds]);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainingSeconds = String(seconds % 60).padStart(2, "0");

  return (
    <article className="border border-white/10 bg-ink p-5">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">FakeCountdown</p>
      <h3 className="mt-4 text-xl font-semibold">Limited offer timer</h3>
      <div className="my-6 border border-white/10 bg-surface p-5 text-center">
        <p className="text-sm text-muted">Offer expires in</p>
        <p className="mt-2 text-5xl font-black tabular-nums">{minutes}:{remainingSeconds}</p>
      </div>
      {expired ? (
        <div className="space-y-2 border border-accent/40 bg-accent/10 p-4">
          <p className="font-semibold text-accent">Nothing happened.</p>
          <p className="text-sm text-muted">Pattern: Fake Urgency.</p>
        </div>
      ) : (
        <p className="leading-7 text-muted">A deadline appears, confidence quietly leaves the room.</p>
      )}
    </article>
  );
}
