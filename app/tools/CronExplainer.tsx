"use client";

import { useMemo, useState, useSyncExternalStore } from "react";

const noop = () => () => {};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const FIELDS = [
  { name: "minute", min: 0, max: 59 },
  { name: "hour", min: 0, max: 23 },
  { name: "day of month", min: 1, max: 31 },
  { name: "month", min: 1, max: 12, names: MONTHS.map(m => m.toUpperCase()) },
  { name: "day of week", min: 0, max: 7, names: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"] },
];
const PRESETS = [
  { cron: "*/5 * * * *", label: "Every 5 min" },
  { cron: "0 2 * * *", label: "Nightly 02:00" },
  { cron: "0 9 * * 1-5", label: "Weekdays 09:00" },
  { cron: "30 18 * * 0", label: "Sundays 18:30" },
  { cron: "0 0 1 * *", label: "Monthly" },
];

type Field = { set: Set<number>; any: boolean; raw: string };

function parseField(raw: string, i: number): Field {
  const f = FIELDS[i];
  const set = new Set<number>();
  const value = (s: string) => {
    const named = f.names?.indexOf(s.toUpperCase()) ?? -1;
    const v = named >= 0 ? named + (i === 3 ? 1 : 0) : Number(s);
    if (!Number.isInteger(v) || v < f.min || v > f.max) throw new Error(`"${s}" is not a valid ${f.name}`);
    return v;
  };
  for (const part of raw.split(",")) {
    const [range, stepRaw] = part.split("/");
    const step = stepRaw === undefined ? 1 : Number(stepRaw);
    if (!Number.isInteger(step) || step < 1) throw new Error(`Bad step in the ${f.name} field`);
    let lo: number, hi: number;
    if (range === "*") { lo = f.min; hi = f.max; }
    else if (range.includes("-")) { const [a, b] = range.split("-"); lo = value(a); hi = value(b); }
    else { lo = value(range); hi = stepRaw === undefined ? lo : f.max; }
    if (lo > hi) throw new Error(`The ${f.name} range runs backwards`);
    for (let v = lo; v <= hi; v += step) set.add(i === 4 && v === 7 ? 0 : v);
  }
  return { set, any: raw === "*", raw };
}

const pad = (n: number) => String(n).padStart(2, "0");
const list = (items: string[]) => items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

function describe([mi, ho, dom, mon, dow]: Field[]): string {
  const parts: string[] = [];
  const mins = [...mi.set].sort((a, b) => a - b);
  const hours = [...ho.set].sort((a, b) => a - b);
  if (!mi.any && !ho.any && mins.length * hours.length <= 6) {
    parts.push(`at ${list(hours.flatMap(h => mins.map(m => `${pad(h)}:${pad(m)}`)))}`);
  } else {
    if (mi.any) parts.push("every minute");
    else if (/^\*\/\d+$/.test(mi.raw)) parts.push(`every ${mi.raw.slice(2)} minutes`);
    else parts.push(`at minute ${list(mins.map(String))}`);
    if (!ho.any) {
      if (/^\*\/\d+$/.test(ho.raw)) parts.push(`every ${ho.raw.slice(2)} hours`);
      else if (/^\d+-\d+$/.test(ho.raw)) parts.push(`between ${pad(hours[0])}:00 and ${pad(hours[hours.length - 1])}:59`);
      else parts.push(`during hour ${list(hours.map(h => pad(h)))}`);
    }
  }
  const days: string[] = [];
  if (!dom.any) days.push(`on day ${list([...dom.set].sort((a, b) => a - b).map(String))} of the month`);
  if (!dow.any) {
    const d = [...dow.set].sort((a, b) => a - b);
    const text = /^\d-\d$/.test(dow.raw) ? `${DAYS[d[0]]} to ${DAYS[d[d.length - 1]]}` : list(d.map(x => DAYS[x]));
    days.push(`${dom.any ? "on" : "or on"} ${text}`);
  }
  parts.push(...days);
  if (!mon.any) parts.push(`in ${list([...mon.set].sort((a, b) => a - b).map(m => MONTHS[m - 1]))}`);
  const s = parts.join(", ");
  return s.charAt(0).toUpperCase() + s.slice(1) + ".";
}

function nextRuns(f: Field[], count: number) {
  const out: Date[] = [];
  const d = new Date();
  d.setSeconds(0, 0);
  d.setMinutes(d.getMinutes() + 1);
  const limit = 366 * 24 * 60;
  for (let i = 0; i < limit && out.length < count; i++) {
    const domOk = f[2].set.has(d.getDate());
    const dowOk = f[4].set.has(d.getDay());
    const dayOk = !f[2].any && !f[4].any ? domOk || dowOk : domOk && dowOk;
    if (f[0].set.has(d.getMinutes()) && f[1].set.has(d.getHours()) && f[3].set.has(d.getMonth() + 1) && dayOk) out.push(new Date(d));
    d.setMinutes(d.getMinutes() + 1);
  }
  return out;
}

export default function CronExplainer() {
  const [expr, setExpr] = useState("0 9 * * 1-5");
  // Run times depend on the visitor's clock, so only compute them in the browser.
  const inBrowser = useSyncExternalStore(noop, () => true, () => false);
  const result = useMemo(() => {
    const raw = expr.trim().split(/\s+/);
    if (raw.length !== 5) return { error: "A cron expression has five fields: minute hour day-of-month month day-of-week." };
    try {
      const fields = raw.map(parseField);
      return { text: describe(fields), runs: inBrowser ? nextRuns(fields, 5) : [] };
    } catch (e) {
      return { error: (e as Error).message + "." };
    }
  }, [expr, inBrowser]);

  return (
    <div className="kk-tool-body">
      <label className="kk-field">
        <span>Cron expression</span>
        <input className="kk-mono-input" value={expr} onChange={e => setExpr(e.target.value)} spellCheck={false} autoComplete="off" />
      </label>
      <div className="kk-presets" aria-label="Examples">{PRESETS.map(p => <button type="button" key={p.cron} onClick={() => setExpr(p.cron)} aria-pressed={expr === p.cron}>{p.label}</button>)}</div>
      <div className="kk-cron-legend" aria-hidden="true"><span>min</span><span>hour</span><span>day</span><span>month</span><span>weekday</span></div>
      {"error" in result ? <p className="kk-tool-error" role="alert">{result.error}</p> : <>
        <p className="kk-cron-text" aria-live="polite">{result.text}</p>
        <p className="kk-tool-label">Next runs (your local time)</p>
        <ol className="kk-runs">{result.runs.map(r => <li key={r.toISOString()}>{r.toLocaleString(undefined, { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</li>)}</ol>
        {inBrowser && result.runs.length === 0 && <p className="kk-tool-note">No run in the next year. Check the day and month fields.</p>}
      </>}
    </div>
  );
}
