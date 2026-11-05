export type ReferenceKind = "regulation" | "regulator" | "research" | "reference";

export type Reference = {
  /** Stable identifier used from pages and JSON-LD. */
  id: string;
  label: string;
  url: string;
  publisher: string;
  kind: ReferenceKind;
  /** Human-readable note rendered next to the link when useful. */
  note?: string;
  /** Extra URL-language tag, used to pick the right Wikipedia article. */
  lang?: "en" | "es";
};

/**
 * Single registry for every outbound citation. Keeping them here means the same
 * regulation is written once, translated consistently, and can be audited for
 * link rot with `node scripts/check-links.mjs`.
 */
export const references = {
  brignull: {
    id: "brignull",
    label: "Deceptive Patterns — Harry Brignull",
    url: "https://deceptive.design/",
    publisher: "deceptive.design",
    kind: "reference",
    note: "The catalogue that named the field, maintained since 2010.",
  },
  wikipediaEn: {
    id: "wikipediaEn",
    label: "Dark pattern — Wikipedia",
    url: "https://en.wikipedia.org/wiki/Dark_pattern",
    publisher: "Wikipedia",
    kind: "reference",
    lang: "en",
  },
  wikipediaEs: {
    id: "wikipediaEs",
    label: "Patrón oscuro — Wikipedia",
    url: "https://es.wikipedia.org/wiki/Patr%C3%B3n_oscuro",
    publisher: "Wikipedia",
    kind: "reference",
    lang: "es",
  },
  ucpd: {
    id: "ucpd",
    label: "Directive 2005/29/EC on unfair commercial practices",
    url: "https://eur-lex.europa.eu/eli/dir/2005/29/oj",
    publisher: "EUR-Lex",
    kind: "regulation",
  },
  dsa: {
    id: "dsa",
    label: "Regulation (EU) 2022/2065 — Digital Services Act",
    url: "https://eur-lex.europa.eu/eli/reg/2022/2065/oj",
    publisher: "EUR-Lex",
    kind: "regulation",
  },
  dma: {
    id: "dma",
    label: "Regulation (EU) 2022/1925 — Digital Markets Act",
    url: "https://eur-lex.europa.eu/eli/reg/2022/1925/oj",
    publisher: "EUR-Lex",
    kind: "regulation",
  },
  aiAct: {
    id: "aiAct",
    label: "Regulation (EU) 2024/1689 — Artificial Intelligence Act",
    url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj",
    publisher: "EUR-Lex",
    kind: "regulation",
  },
  gdpr: {
    id: "gdpr",
    label: "Regulation (EU) 2016/679 — General Data Protection Regulation",
    url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
    publisher: "EUR-Lex",
    kind: "regulation",
  },
  ftc: {
    id: "ftc",
    label: "Bringing Dark Patterns to Light — FTC staff report (2022)",
    url: "https://www.ftc.gov/reports/bringing-dark-patterns-light",
    publisher: "Federal Trade Commission",
    kind: "regulator",
  },
  edpb: {
    id: "edpb",
    label: "Guidelines 03/2022 on deceptive design patterns in social media interfaces",
    url: "https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-032022-deceptive-design-patterns-social-media_en",
    publisher: "European Data Protection Board",
    kind: "regulator",
  },
  oecd: {
    id: "oecd",
    label: "Dark commercial patterns — OECD Digital Economy Papers",
    url: "https://www.oecd.org/digital/dark-commercial-patterns-44f5e846-en.htm",
    publisher: "OECD",
    kind: "regulator",
  },
  cma: {
    id: "cma",
    label: "Online Choice Architecture: how digital design can harm competition and consumers",
    url: "https://www.gov.uk/government/publications/online-choice-architecture-how-digital-design-can-harm-competition-and-consumers",
    publisher: "UK Competition and Markets Authority",
    kind: "regulator",
  },
  mathur2019: {
    id: "mathur2019",
    label: "Mathur et al., Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites (2019)",
    url: "https://arxiv.org/abs/1907.07032",
    publisher: "arXiv",
    kind: "research",
  },
  gray2018: {
    id: "gray2018",
    label: "Gray et al., The Dark (Patterns) Side of UX Design (CHI 2018)",
    url: "https://dl.acm.org/doi/10.1145/3173574.3174108",
    publisher: "ACM Digital Library",
    kind: "research",
    note: "ACM blocks automated requests; the link works in a browser.",
  },
  wcag22: {
    id: "wcag22",
    label: "Web Content Accessibility Guidelines (WCAG) 2.2",
    url: "https://www.w3.org/TR/WCAG22/",
    publisher: "W3C",
    kind: "regulation",
  },
} satisfies Record<string, Reference>;

export type ReferenceId = keyof typeof references;

export function getReference(id: ReferenceId): Reference {
  return references[id];
}

export function referenceUrl(id: ReferenceId): string {
  return references[id].url;
}
