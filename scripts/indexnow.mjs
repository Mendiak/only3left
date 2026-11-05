/**
 * Submits the site's URLs to IndexNow (Bing, Yandex, Seznam, Naver).
 * Google does not participate, but Bing indexing is fast and free.
 *
 * Usage: node scripts/indexnow.mjs [baseUrl]
 */

const BASE = process.argv[2] ?? "https://only3left.vercel.app";
const KEY = "8f2c1d6a4b9e4f7c9a3d5e8b1c2f7a4d";

const sitemap = await fetch(`${BASE}/sitemap.xml`).then((response) => response.text());
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

if (urls.length === 0) {
  throw new Error("No URLs found in sitemap");
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(BASE).host,
    key: KEY,
    keyLocation: `${BASE}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`Submitted ${urls.length} URLs to IndexNow — HTTP ${response.status}`);
