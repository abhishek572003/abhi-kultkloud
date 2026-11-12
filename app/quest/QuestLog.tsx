"use client";

import Link from "next/link";
import { BADGES, LEVELS, levelOf, resetGame, streakOf, useGame } from "../_lib/game";
import { certs } from "../_data/certs";

// Pixel badge icons, 10x10, one colour each.
const ICONS: Record<string, string> = {
  boot: "M2 1h4v5h3v3H1V6h1z", flame: "M4 0h2v2h1v2h1v4H7v1H3V8H2V4h1V2h1z", flame2: "M4 0h2v2h1v2h1v4H7v1H3V8H2V4h1V2h1zM4 5h2v3H4z",
  wrench: "M6 0h3v1H7v2h2v1H8v1H6v1L2 10H0V8l4-4V3h1V1h1z", flag: "M1 0h1v10H1zM2 1h6l-2 2 2 2H2z",
  scroll: "M2 1h6v1h1v6H8v1H2V8H1V2h1zM3 3h4v1H3zM3 5h4v1H3z", crown: "M0 2l2 2 3-3 3 3 2-2v6H0zM0 9h10v1H0z",
};

export default function QuestLog() {
  const game = useGame();
  const lv = levelOf(game.xp);
  const streak = streakOf(game.days);
  const certSteps = game.done.filter(d => d.startsWith("cert:")).length;
  const totalCertSteps = certs.reduce((n, c) => n + c.steps.length, 0);

  return <div className="kk-quest">
    <section className="kk-quest-card" aria-label="Your level">
      <h2>{lv.name}</h2>
      <div className="kk-xpbar" aria-hidden="true"><span style={{ width: `${Math.round(lv.progress * 100)}%` }} /></div>
      <p className="kk-tool-note"><span className="kk-quest-level">Level {lv.index}</span> · {game.xp} XP{lv.next ? ` · ${lv.next - game.xp} XP to ${LEVELS[lv.index].name}` : " · maximum level reached"}</p>
      <dl className="kk-quest-stats">
        <div><dt>Day streak</dt><dd>{streak}</dd></div>
        <div><dt>Route stops</dt><dd>{game.done.filter(d => d.startsWith("route:")).length}/5</dd></div>
        <div><dt>Cert steps</dt><dd>{certSteps}/{totalCertSteps}</dd></div>
        <div><dt>Tools tried</dt><dd>{game.done.filter(d => d.startsWith("tool:")).length}/4</dd></div>
      </dl>
    </section>
    <section aria-labelledby="badges-title">
      <h2 id="badges-title" className="kk-quest-h">Badges</h2>
      <ul className="kk-badges">
        {BADGES.map(b => {
          const got = game.badges.includes(b.id);
          return <li key={b.id} className={got ? "is-got" : undefined}>
            <svg viewBox="0 0 10 10" width="40" height="40" shapeRendering="crispEdges" aria-hidden="true"><path d={ICONS[b.icon]} fill="currentColor" /></svg>
            <b>{b.name}</b><span>{got ? "Unlocked" : b.how}</span>
          </li>;
        })}
      </ul>
    </section>
    <section aria-labelledby="earn-title">
      <h2 id="earn-title" className="kk-quest-h">How to earn XP</h2>
      <ul className="kk-earn">
        <li><b>+50</b> finish a stop on the <Link href="/#route">learning route</Link></li>
        <li><b>+25</b> tick off a step in a <Link href="/certifications">certification quest</Link></li>
        <li><b>+15</b> try each tool in the <Link href="/tools">toolkit</Link> for the first time</li>
        <li><b>+5</b> come back on a new day (keeps your streak alive)</li>
      </ul>
    </section>
    <p className="kk-tool-note">Your progress is saved in this browser only, nothing is sent anywhere. <button type="button" className="kk-linkish" onClick={() => { if (window.confirm("Reset all XP, badges and progress in this browser?")) resetGame(); }}>Reset progress</button></p>
  </div>;
}
