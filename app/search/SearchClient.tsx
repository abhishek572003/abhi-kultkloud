"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { platformItems } from "../_data/platform";
import { Arrow } from "../_components/Links";

export default function SearchClient() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? platformItems.filter(i => [i.title, i.description, i.type, ...i.topics].join(" ").toLowerCase().includes(q)) : platformItems;
  }, [query]);
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); inputRef.current?.focus(); } }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return <div style={{ marginTop: 32 }}>
    <label className="kk-field kk-pane" style={{ padding: 16 }}>
      <span>Search everything</span>
      <input ref={inputRef} value={query} onChange={e => setQuery(e.target.value)} placeholder="Try “Kubernetes”, “AWS”, “salary” or “Terraform”" autoComplete="off" autoFocus />
    </label>
    <p className="kk-tool-note" style={{ margin: "16px 0" }} aria-live="polite">{query ? `${results.length} result${results.length === 1 ? "" : "s"}` : `${platformItems.length} things to explore`}</p>
    <div className="kk-pane kk-feed-wrap" style={{ marginTop: 0 }}>
      <ul className="kk-feed">{results.map(i => <li key={i.slug}><Link href={i.href}>
        <span className="kk-tag kk-tag-lilac kk-kind">{i.type}</span>
        <span className="kk-feed-title">{i.title}<br /><span className="kk-feed-meta" style={{ whiteSpace: "normal" }}>{i.description}</span></span>
        <span />
        <span className="kk-shelf-go"><Arrow /></span>
      </Link></li>)}</ul>
      {results.length === 0 && <p className="kk-tool-note" style={{ padding: 16 }}>Nothing matches “{query}”. Try a shorter word.</p>}
    </div>
  </div>;
}
