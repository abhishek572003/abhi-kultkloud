// Live content feed. Runs on the server; pages using it set `revalidate`, so on Vercel
// the content refreshes itself in the background (incremental static regeneration).
export const FEED_REFRESH_SECONDS = 6 * 60 * 60;

export type FeedItem = { title: string; url: string; date: string; source: string; kind: "Video" | "News"; topics: string[] };
type Source = { name: string; url: string; kind: "Video" | "News"; filter?: RegExp; max: number };

const RELEVANT = /\b(aws|azure|gcp|google cloud|cloud|kubernetes|k8s|docker|container|devops|terraform|linux|bash|git|github actions|ci\/cd|ansible|helm|observability|prometheus|serverless|llm|ai engineer|mlops|platform engineering|sre)\b/i;

export const SOURCES: Source[] = [
  { name: "TechWorld with Nana", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCdngmbVKX1Tgre699-XLlUA", kind: "Video", max: 4 },
  { name: "KodeKloud", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UCSWj8mqQCcrcBlXPi4ThRDQ", kind: "Video", max: 4 },
  { name: "freeCodeCamp", url: "https://www.youtube.com/feeds/videos.xml?channel_id=UC8butISFwT-Wl7EV0hUK0BQ", kind: "Video", filter: RELEVANT, max: 4 },
  { name: "Kubernetes Blog", url: "https://kubernetes.io/feed.xml", kind: "News", max: 3 },
  { name: "AWS What's New", url: "https://aws.amazon.com/about-aws/whats-new/recent/feed/", kind: "News", max: 4 },
  { name: "HashiCorp Blog", url: "https://www.hashicorp.com/blog/feed.xml", kind: "News", max: 3 },
  { name: "CNCF", url: "https://www.cncf.io/feed/", kind: "News", max: 3 },
];

const TOPICS: [string, RegExp][] = [
  ["aws", /\b(aws|amazon|ec2|s3|lambda|eks)\b/i],
  ["azure", /\b(azure|microsoft|aks|entra)\b/i],
  ["kubernetes", /\b(kubernetes|k8s|kubectl|helm|eks|aks|gke|cncf|pod)\b/i],
  ["terraform", /\b(terraform|hashicorp|iac|infrastructure as code|opentofu)\b/i],
  ["docker", /\b(docker|container)\b/i],
  ["ai", /\b(ai|llm|agent|mcp|rag|gpu|model)\b/i],
];

const decode = (s: string) => s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#39;|&apos;/g, "'").replace(/<[^>]+>/g, "").trim();
const tag = (block: string, name: string) => block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`))?.[1];

function parse(xml: string, source: Source): FeedItem[] {
  const blocks = xml.match(/<entry[\s>][\s\S]*?<\/entry>/g) ?? xml.match(/<item[\s>][\s\S]*?<\/item>/g) ?? [];
  const items: FeedItem[] = [];
  for (const b of blocks) {
    const title = decode(tag(b, "title") ?? "");
    const url = b.match(/<link[^>]*href="([^"]+)"/)?.[1] ?? decode(tag(b, "link") ?? "");
    const raw = tag(b, "published") ?? tag(b, "pubDate") ?? tag(b, "updated") ?? "";
    const date = new Date(decode(raw));
    if (!title || !url.startsWith("http") || Number.isNaN(date.getTime())) continue;
    if (source.filter && !source.filter.test(title)) continue;
    const topics = TOPICS.filter(([, re]) => re.test(`${title} ${source.name}`)).map(([t]) => t);
    items.push({ title, url, date: date.toISOString(), source: source.name, kind: source.kind, topics });
    if (items.length >= source.max) break;
  }
  return items;
}

export async function getFeed(): Promise<{ items: FeedItem[]; fetchedAt: string; sourcesOk: number }> {
  const results = await Promise.all(SOURCES.map(async s => {
    try {
      const res = await fetch(s.url, { next: { revalidate: FEED_REFRESH_SECONDS }, headers: { "User-Agent": "KultKloud feed reader" }, signal: AbortSignal.timeout(8000) });
      if (!res.ok) return null;
      return parse(await res.text(), s);
    } catch {
      return null;
    }
  }));
  const items = results.flatMap(r => r ?? []).sort((a, b) => b.date.localeCompare(a.date));
  return { items, fetchedAt: new Date().toISOString(), sourcesOk: results.filter(Boolean).length };
}
