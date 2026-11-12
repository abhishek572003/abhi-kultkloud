import type { FeedItem } from "../_lib/feeds";
import { Arrow } from "./Links";

const fmt = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });

export function LiveStamp({ fetchedAt, sourcesOk, total }: { fetchedAt: string; sourcesOk: number; total: number }) {
  const when = new Date(fetchedAt).toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", timeZone: "UTC" });
  return <p className="kk-live-stamp"><span className="kk-live-dot" aria-hidden="true" />Updated every day · last check {when} UTC · {sourcesOk}/{total} sources</p>;
}

export default function LiveFeed({ items, limit }: { items: FeedItem[]; limit?: number }) {
  const list = limit ? items.slice(0, limit) : items;
  if (!list.length) return <p className="kk-tool-note" style={{ padding: 12 }}>Today&apos;s update is on its way. Check back shortly.</p>;
  return <ul className="kk-feed">
    {list.map(item => <li key={item.url}>
      <a href={item.url} target="_blank" rel="noreferrer">
        <span className={`kk-tag kk-kind ${item.kind === "Video" ? "kk-tag-rose" : "kk-tag-sky"}`}>{item.kind}</span>
        <span className="kk-feed-title">{item.title}</span>
        <span className="kk-feed-meta">{item.source} · {fmt(item.date)}</span>
        <span className="kk-shelf-go"><Arrow /><span className="kk-sr">(opens in a new tab)</span></span>
      </a>
    </li>)}
  </ul>;
}
