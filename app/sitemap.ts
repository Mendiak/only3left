import type { MetadataRoute } from "next";
import { patterns } from "@/lib/patterns";
import { CONTENT_UPDATED, absoluteUrl, localePath } from "@/lib/seo";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

const staticPages: Array<{
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/patterns", priority: 0.9, changeFrequency: "weekly" },
  { path: "/categories", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" },
];

function entry(path: string, locale: "en" | "es", priority: number, changeFrequency: ChangeFrequency) {
  const en = absoluteUrl(localePath(path, "en"));
  const es = absoluteUrl(localePath(path, "es"));

  return {
    url: absoluteUrl(localePath(path, locale)),
    lastModified: CONTENT_UPDATED,
    changeFrequency,
    priority: locale === "es" ? Math.round(Math.max(priority - 0.1, 0.1) * 10) / 10 : priority,
    alternates: {
      languages: {
        en,
        es,
        "x-default": en,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.flatMap((page) => [
    entry(page.path, "en", page.priority, page.changeFrequency),
    entry(page.path, "es", page.priority, page.changeFrequency),
  ]);

  const patternEntries = patterns.flatMap((pattern) => [
    entry(`/patterns/${pattern.slug}`, "en", 0.8, "monthly"),
    entry(`/patterns/${pattern.slug}`, "es", 0.8, "monthly"),
  ]);

  return [...staticEntries, ...patternEntries];
}
