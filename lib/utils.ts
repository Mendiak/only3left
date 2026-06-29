import type { Pattern } from "@/lib/types";

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function randomPattern(patterns: Pattern[]) {
  return patterns[Math.floor(Math.random() * patterns.length)];
}

export function toxicityLabel(severity: Pattern["severity"]) {
  const labels: Record<Pattern["severity"], string> = {
    1: "Mild nudge",
    2: "Questionable",
    3: "Manipulative",
    4: "Hostile",
    5: "Radioactive",
  };

  return labels[severity];
}
