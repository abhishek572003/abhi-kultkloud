"use client";

import Link from "next/link";
import DomainGlyph from "./DomainGlyph";
import { domains } from "../_data/discovery";
import { toggleTask, useGame } from "../_lib/game";

function Arrow() { return <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L12 4M5.5 4H12v6.5" /></svg>; }

export default function RouteTracker() {
  const game = useGame();
  const mapped = domains.filter(d => d.href);
  const done = mapped.filter(d => game.done.includes(`route:${d.name}`)).map(d => d.name);
  const count = done.length;
  const nextStop = mapped.find(d => !done.includes(d.name));

  function toggle(name: string) {
    toggleTask(`route:${name}`, 50, `Finished ${name}`, all => ({ routeDone: mapped.every(d => all.includes(`route:${d.name}`)) }));
  }

  return <div className="kk-tracker">
    <div className="kk-progress" aria-live="polite">
      <div className="kk-progress-bar" aria-hidden="true"><span style={{ width: `${(count / mapped.length) * 100}%` }} /></div>
      <p><b>{count} of {mapped.length}</b> stops done{nextStop ? <> · next up: <a href={nextStop.href}>{nextStop.name}</a></> : " · route complete"}</p>
      <p className="kk-progress-note">Each stop is worth 50 XP. Progress is saved in this browser, no account needed.</p>
    </div>
    <ol className="kk-route">
      {domains.map((domain, index) => {
        const isDone = done.includes(domain.name);
        return <li key={domain.name} className={`kk-route-item${domain.href ? "" : " is-pending"}${isDone ? " is-done" : ""}`}>
          <span className="kk-stop" aria-hidden="true">{isDone ? <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 8.5l3 3 6-7" /></svg> : index + 1}</span>
          <span className="kk-glyph"><DomainGlyph icon={domain.icon} /></span>
          <div className="kk-route-main">
            {domain.href ? <Link className="kk-route-name" href={domain.href}>{domain.name}<Arrow /></Link> : <span className="kk-route-name">{domain.name}</span>}
            <span className="kk-route-summary">{domain.summary}</span>
            <span className="kk-chips">{domain.topics.map(topic => <span key={topic}>{topic}</span>)}</span>
          </div>
          <div className="kk-route-side">
            <span className="kk-route-meta">{domain.meta}</span>
            {domain.href && <button type="button" className="kk-done-toggle" aria-pressed={isDone} onClick={() => toggle(domain.name)}>{isDone ? "Done" : "Mark done"}<span className="kk-sr"> {domain.name}</span></button>}
          </div>
        </li>;
      })}
    </ol>
  </div>;
}
