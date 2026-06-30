"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "only3left-recent";

export type RecentPattern = { slug: string; title: string; category: string };

export function useRecentPatterns(): RecentPattern[] {
  const [recent, setRecent] = useState<RecentPattern[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setRecent(JSON.parse(raw) as RecentPattern[]);
    } catch { /* ignore */ }
  }, []);

  return recent;
}

export function addRecentPattern(pattern: RecentPattern) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const list: RecentPattern[] = raw ? JSON.parse(raw) : [];
    const filtered = list.filter((p) => p.slug !== pattern.slug);
    const updated = [pattern, ...filtered].slice(0, 5);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch { /* ignore */ }
}
