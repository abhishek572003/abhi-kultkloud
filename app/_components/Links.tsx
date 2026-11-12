import Link from "next/link";

export function Arrow({ size = 14 }: { size?: number }) {
  return <svg aria-hidden="true" viewBox="0 0 16 16" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><path d="M4 12L12 4M6 4h6v6" /></svg>;
}

export type AnyRes = { title: string; kind: string; href: string; by?: string; note?: string };

export function ResourceLinks({ items }: { items: AnyRes[] }) {
  return <ul className="kk-step-res">
    {items.map(r => {
      const ext = r.href.startsWith("http");
      const inner = <>
        <span className={`kk-res-kind kk-res-${r.kind.toLowerCase().replace(/\s+/g, "-")}`}>{r.kind}</span>
        <span className="kk-res-title">{r.title}</span>
        {(r.by || r.note) && <span className="kk-res-by">{[r.by, r.note].filter(Boolean).join(" · ")}</span>}
        <Arrow />
      </>;
      return <li key={r.href + r.title}>{ext ? <a href={r.href} target="_blank" rel="noreferrer">{inner}<span className="kk-sr">(opens in a new tab)</span></a> : <Link href={r.href}>{inner}</Link>}</li>;
    })}
  </ul>;
}

