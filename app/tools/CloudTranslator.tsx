"use client";

import { useMemo, useState } from "react";
import { cloudMap } from "../_data/cloudMap";

const categories = ["All", ...Array.from(new Set(cloudMap.map(r => r.category)))];

export default function CloudTranslator() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cloudMap.filter(r => (category === "All" || r.category === category) && (!q || [r.need, r.aws, r.azure, r.gcp, r.category].join(" ").toLowerCase().includes(q)));
  }, [query, category]);

  return (
    <div className="kk-tool-body">
      <label className="kk-field">
        <span>Search a service or a need</span>
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Try “Lambda”, “queue” or “BigQuery”" autoComplete="off" />
      </label>
      <div className="kk-presets" aria-label="Filter by category">{categories.map(c => <button type="button" key={c} onClick={() => setCategory(c)} aria-pressed={category === c}>{c}</button>)}</div>
      <div className="kk-table-wrap" tabIndex={0} aria-label="Cloud service equivalents">
        <table className="kk-table">
          <thead><tr><th scope="col">You need</th><th scope="col">AWS</th><th scope="col">Azure</th><th scope="col">Google Cloud</th></tr></thead>
          <tbody>{rows.map(r => <tr key={r.need}><th scope="row">{r.need}</th><td>{r.aws}</td><td>{r.azure}</td><td>{r.gcp}</td></tr>)}</tbody>
        </table>
        {rows.length === 0 && <p className="kk-tool-note">No match. Try a broader word like “storage” or “database”.</p>}
      </div>
      <p className="kk-tool-note">Closest equivalents, not exact matches: features, limits and pricing differ between clouds.</p>
    </div>
  );
}
