import { categories } from "@/lib/categories";
import { patterns } from "@/lib/patterns";
import { SITE_URL } from "@/lib/seo";

/**
 * Open dataset. Published as a stable, machine-readable file so researchers,
 * journalists and other catalogues can cite and reuse it — with attribution.
 */
export function GET() {
  const body = {
    name: "ONLY 3 LEFT dark pattern catalogue",
    version: "1.0.0",
    updated: "2026-11-05",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    attribution: "ONLY 3 LEFT — https://only3left.vercel.app",
    source: `${SITE_URL}/dark-patterns`,
    count: patterns.length,
    categories: categories.map((category) => ({
      slug: category.slug,
      title: category.title,
      description: category.description,
      url: `${SITE_URL}/categories/${category.slug}`,
      patterns: patterns.filter((pattern) => pattern.category === category.title).length,
    })),
    patterns: patterns.map((pattern) => ({
      slug: pattern.slug,
      title: pattern.title,
      category: pattern.category,
      summary: pattern.summary,
      description: pattern.description,
      severity: pattern.severity,
      psychology: pattern.psychology,
      examples: pattern.examples,
      ethicalAlternative: pattern.ethicalAlternative,
      origin: pattern.origin,
      url: `${SITE_URL}/patterns/${pattern.slug}`,
    })),
  };

  return Response.json(body, {
    headers: {
      "cache-control": "public, max-age=3600, s-maxage=86400",
      "access-control-allow-origin": "*",
    },
  });
}
