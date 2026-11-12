"use client";

import { useState } from "react";
import CopyButton from "../_components/CopyButton";

const WHO = ["Owner", "Group", "Others"] as const;
const BITS = [{ key: "r", label: "Read", value: 4 }, { key: "w", label: "Write", value: 2 }, { key: "x", label: "Execute", value: 1 }] as const;
const PRESETS = [
  { mode: "644", hint: "Normal files" },
  { mode: "755", hint: "Scripts, folders" },
  { mode: "600", hint: "Private keys" },
  { mode: "700", hint: "Private folders" },
  { mode: "400", hint: "Read-only secret" },
];

export default function ChmodCalculator() {
  const [mode, setMode] = useState([7, 5, 5]);
  const [draft, setDraft] = useState("755");

  const octal = mode.join("");
  const symbolic = mode.map(v => BITS.map(b => (v & b.value ? b.key : "-")).join("")).join("");

  function toggle(who: number, bit: number) {
    const next = [...mode];
    next[who] ^= bit;
    setMode(next);
    setDraft(next.join(""));
  }
  function fromOctal(value: string) {
    setDraft(value);
    if (/^[0-7]{3}$/.test(value)) setMode(value.split("").map(Number));
  }
  const describe = (v: number) => BITS.filter(b => v & b.value).map(b => b.label.toLowerCase()).join(", ") || "nothing";

  return (
    <div className="kk-tool-body">
      <div className="kk-chmod-grid" role="group" aria-label="Permissions">
        <span aria-hidden="true" />
        {BITS.map(b => <span key={b.key} className="kk-chmod-head" aria-hidden="true">{b.label}</span>)}
        {WHO.map((who, wi) => <div key={who} className="kk-chmod-row" role="group" aria-label={who}>
          <span className="kk-chmod-who">{who}</span>
          {BITS.map(b => <label key={b.key} className="kk-check">
            <input type="checkbox" checked={Boolean(mode[wi] & b.value)} onChange={() => toggle(wi, b.value)} />
            <span className="kk-sr">{who} {b.label}</span>
            <span aria-hidden="true" className="kk-check-box">{b.key}</span>
          </label>)}
        </div>)}
      </div>
      <div className="kk-field-row">
        <label className="kk-field kk-field-small">
          <span>Octal</span>
          <input className="kk-mono-input" value={draft} onChange={e => fromOctal(e.target.value)} maxLength={3} inputMode="numeric" aria-invalid={!/^[0-7]{3}$/.test(draft)} />
        </label>
        <div className="kk-field"><span>Symbolic</span><output className="kk-mono-out">-{symbolic}</output></div>
      </div>
      <div className="kk-presets" aria-label="Common modes">{PRESETS.map(p => <button type="button" key={p.mode} onClick={() => fromOctal(p.mode)} aria-pressed={octal === p.mode}>{p.mode} <small>{p.hint}</small></button>)}</div>
      <div className="kk-command"><code>chmod {octal} &lt;file&gt;</code><CopyButton text={`chmod ${octal} <file>`} /></div>
      <p className="kk-tool-note">Owner can {describe(mode[0])}. Group can {describe(mode[1])}. Everyone else can {describe(mode[2])}.</p>
    </div>
  );
}
