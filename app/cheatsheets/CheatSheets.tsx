"use client";

import { useMemo, useState } from "react";
import CopyButton from "../_components/CopyButton";
import { sheets } from "../_data/cheatsheets";

export default function CheatSheets() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sheets
      .filter(s => active === "all" || s.id === active)
      .map(s => ({ ...s, groups: s.groups.map(g => ({ ...g, commands: g.commands.filter(c => !q || `${c.cmd} ${c.does}`.toLowerCase().includes(q)) })).filter(g => g.commands.length) }))
      .filter(s => s.groups.length);
  }, [active, query]);

  return <div>
    <div className="kk-pane kk-sheet-controls">
      <label className="kk-field">
        <span>Search commands</span>
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Try “logs”, “branch” or “port”" autoComplete="off" />
      </label>
      <div className="kk-presets" aria-label="Choose a tool">
        <button type="button" onClick={() => setActive("all")} aria-pressed={active === "all"}>All</button>
        {sheets.map(s => <button type="button" key={s.id} onClick={() => setActive(s.id)} aria-pressed={active === s.id}>{s.name}</button>)}
      </div>
    </div>
    {visible.length === 0 && <p className="kk-tool-note">Nothing matches “{query}”. Try a shorter word.</p>}
    {visible.map(sheet => <section key={sheet.id} className="kk-sheet" aria-labelledby={`sheet-${sheet.id}`}>
      <div className="kk-sheet-head"><h2 id={`sheet-${sheet.id}`}>{sheet.name}</h2><p>{sheet.intro}</p></div>
      <div className="kk-sheet-groups">
        {sheet.groups.map(g => <div key={g.title} className="kk-sheet-group">
          <h3>{g.title}</h3>
          <ul>{g.commands.map(c => <li key={c.cmd}>
            <code>{c.cmd}</code>
            <span>{c.does}</span>
            <CopyButton text={c.cmd} />
          </li>)}</ul>
        </div>)}
      </div>
    </section>)}
  </div>;
}
