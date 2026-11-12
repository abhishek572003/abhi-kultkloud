"use client";

import Link from "next/link";
import type { Cert } from "../_data/certs";
import { toggleTask, useGame } from "../_lib/game";

const STEP_XP = 25;
function Arrow() { return <svg aria-hidden="true" viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M5.5 4H12v6.5" /></svg>; }
function Check() { return <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg>; }

export function CertProgress({ cert }: { cert: Cert }) {
  const game = useGame();
  const done = cert.steps.filter(s => game.done.includes(`cert:${cert.slug}:${s.id}`)).length;
  return <span className="kk-cert-progress" aria-label={`${done} of ${cert.steps.length} steps done`}>
    <span className="kk-progress-bar" aria-hidden="true"><span style={{ width: `${(done / cert.steps.length) * 100}%` }} /></span>
    {done}/{cert.steps.length}
  </span>;
}

export default function CertRoadmap({ cert }: { cert: Cert }) {
  const game = useGame();
  const ids = cert.steps.map(s => `cert:${cert.slug}:${s.id}`);
  const doneCount = ids.filter(id => game.done.includes(id)).length;

  return <div className="kk-roadmap">
    <div className="kk-progress">
      <div className="kk-progress-bar" aria-hidden="true"><span style={{ width: `${(doneCount / ids.length) * 100}%` }} /></div>
      <p><b>{doneCount} of {ids.length}</b> steps done · {STEP_XP} XP per step{doneCount === ids.length ? " · roadmap complete, go book that exam!" : ""}</p>
    </div>
    <ol className="kk-steps">
      {cert.steps.map((step, i) => {
        const id = ids[i];
        const isDone = game.done.includes(id);
        return <li key={step.id} className={`kk-step${isDone ? " is-done" : ""}`}>
          <button type="button" className="kk-step-check" aria-pressed={isDone}
            onClick={() => toggleTask(id, STEP_XP, `${cert.code}: ${step.title}`, all => ({ certDone: ids.every(x => all.includes(x)) }))}>
            {isDone ? <Check /> : <span>{i + 1}</span>}
            <span className="kk-sr">{isDone ? "Mark as not done" : "Mark as done"}: {step.title}</span>
          </button>
          <div className="kk-step-body">
            <h3>{step.title}</h3>
            <p>{step.why}</p>
            <ul className="kk-step-res">
              {step.resources.map(r => {
                const ext = r.href.startsWith("http");
                const inner = <><span className={`kk-res-kind kk-res-${r.kind.toLowerCase()}`}>{r.kind}</span><span className="kk-res-title">{r.title}</span>{r.note && <span className="kk-res-note">{r.note}</span>}<Arrow /></>;
                return <li key={r.href + r.title}>{ext ? <a href={r.href} target="_blank" rel="noreferrer">{inner}<span className="kk-sr">(opens in a new tab)</span></a> : <Link href={r.href}>{inner}</Link>}</li>;
              })}
            </ul>
          </div>
        </li>;
      })}
    </ol>
  </div>;
}
