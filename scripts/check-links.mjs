/**
 * Checks every outbound URL in lib/references.ts.
 *
 * References live in a single TypeScript registry, so this script reads the
 * source and extracts the URLs instead of duplicating the list. Runs with plain
 * Node, no build step and no dependencies.
 *
 * Usage: node scripts/check-links.mjs
 */

import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../lib/references.ts", import.meta.url), "utf8");

const entries = [...source.matchAll(/id:\s*"([^"]+)"[\s\S]{0,400}?url:\s*"([^"]+)"/g)].map(
  ([, id, url]) => ({ id, url })
);

if (entries.length === 0) {
  throw new Error("No references found — did lib/references.ts change shape?");
}

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36";

// Some publishers block automated clients with 403/429 even though the page is
// fine in a browser. These are reported separately instead of failing the run.
const BLOCKED = new Set([401, 403, 405, 429]);

let failures = 0;

for (const { id, url } of entries) {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: { "user-agent": UA, accept: "text/html,application/xhtml+xml" },
      signal: AbortSignal.timeout(20000),
    });

    if (response.ok) {
      console.log(`  200  ${id.padEnd(14)} ${url}`);
    } else if (BLOCKED.has(response.status)) {
      console.log(`  ${response.status}* ${id.padEnd(14)} ${url}  (bot-blocked, check manually)`);
    } else {
      failures += 1;
      console.log(`  ${response.status}  ${id.padEnd(14)} ${url}`);
    }
  } catch (error) {
    failures += 1;
    console.log(`  ERR  ${id.padEnd(14)} ${url}  (${error.message})`);
  }
}

console.log(`\n${entries.length} references checked, ${failures} broken.`);

if (failures > 0) {
  process.exitCode = 1;
}
