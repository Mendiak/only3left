import type { MetadataRoute } from "next";
import { patterns } from "@/lib/patterns";

const baseUrl = "https://only3left.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/categories`, lastModified: new Date() },
    { url: `${baseUrl}/patterns`, lastModified: new Date() },
    { url: `${baseUrl}/es`, lastModified: new Date() },
    { url: `${baseUrl}/es/about`, lastModified: new Date() },
    { url: `${baseUrl}/es/categories`, lastModified: new Date() },
    { url: `${baseUrl}/es/patterns`, lastModified: new Date() },
  ];

  const patternPages = patterns.flatMap((pattern) => [
    { url: `${baseUrl}/patterns/${pattern.slug}`, lastModified: new Date() },
    { url: `${baseUrl}/es/patterns/${pattern.slug}`, lastModified: new Date() },
  ]);

  return [...staticPages, ...patternPages];
}
