// Weekly content health check: finds every external link in app/_data and checks it still works.
// Run locally with `node scripts/check-links.mjs`. Exits 1 and writes broken-links.md if any fail.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = "app/_data";
const urls = new Map();
for (const file of readdirSync(dir).filter(f => f.endsWith(".ts"))) {
  const text = readFileSync(join(dir, file), "utf8");
  for (const m of text.matchAll(/https:\/\/[^\s"'`)]+/g)) if (!m[0].includes("${")) urls.set(m[0], file);
  for (const m of text.matchAll(/yt\("([\w-]{11})"\)/g)) urls.set(`https://www.youtube.com/watch?v=${m[1]}`, file);
}

async function check(url) {
  const target = url.includes("youtube.com/watch") ? `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(url)}` : url;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch(target, { redirect: "follow", headers: { "User-Agent": "Mozilla/5.0 (KultKloud link check)" }, signal: AbortSignal.timeout(20000) });
      if (res.ok || [403, 429, 999].includes(res.status)) return null; // 403/429/999: site blocks bots but is up
      if (attempt === 1) return `${res.status}`;
    } catch (e) {
      if (attempt === 1) return e.name;
    }
  }
  return null;
}

const broken = [];
for (const [url, file] of urls) {
  const err = await check(url);
  if (err) broken.push(`- [ ] ${url} (${err}) in \`${file}\``);
}
console.log(`Checked ${urls.size} links, ${broken.length} broken.`);
if (broken.length) {
  writeFileSync("broken-links.md", `The weekly content check found ${broken.length} broken link(s):\n\n${broken.join("\n")}\n\nReplace each with a current free resource, then close this issue.`);
  process.exit(1);
}
