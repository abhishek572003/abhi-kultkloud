import type { FeedItem } from "../_lib/feeds";

const fmt = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
function Arrow() { return <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M5.5 4H12v6.5" /></svg>; }

export function LiveStamp({ fetchedAt, sourcesOk, total }: { fetchedAt: string; sourcesOk: number; total: number }) {
  const when = new Date(fetchedAt).toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", timeZone: "UTC" });
  return <p className="kk-live-stamp"><span className="kk-live-dot" aria-hidden="true" />Auto-updated every 6 hours · last refresh {when} UTC · {sourcesOk} of {total} sources live</p>;
}

export default function LiveFeed({ items, limit }: { items: FeedItem[]; limit?: number }) {
  const list = limit ? items.slice(0, limit) : items;
  if (!list.length) return <p className="kk-tool-note">The live sources did not answer on the last refresh. The next automatic refresh will try again.</p>;
  return <ul className="kk-feed">
    {list.map(item => <li key={item.url}>
      <a href={item.url} target="_blank" rel="noreferrer">
        <span className={`kk-kind kk-kind-${item.kind === "Video" ? "video" : "docs"}`}>{item.kind}</span>
        <span className="kk-feed-title">{item.title}</span>
        <span className="kk-feed-meta">{item.source} · {fmt(item.date)}</span>
        <span className="kk-shelf-go"><Arrow /><span className="kk-sr">(opens in a new tab)</span></span>
      </a>
    </li>)}
  </ul>;
}
