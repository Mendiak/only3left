"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks the user's reduced-motion preference so timed specimens can stay
 * static instead of animating indefinitely.
 */
export function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

/**
 * A pausable interval that honours prefers-reduced-motion and always calls the
 * latest version of the callback. Specimens can expose a pause control without
 * leaking timers or firing updates after unmount.
 */
export function usePausableInterval(callback: () => void, delay: number, enabled = true) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  const reducedMotion = usePrefersReducedMotion();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!enabled || paused || reducedMotion) return;

    const id = window.setInterval(() => callbackRef.current(), delay);
    return () => window.clearInterval(id);
  }, [delay, enabled, paused, reducedMotion]);

  return {
    paused,
    setPaused,
    reducedMotion,
    running: enabled && !paused && !reducedMotion,
  };
}
