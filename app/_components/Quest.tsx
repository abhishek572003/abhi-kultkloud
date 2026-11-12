"use client";

// Client-side quest pieces: checklists that award XP, progress meters and goal picking.
import Link from "next/link";
import { setGoal, toggleTask, useGame, type Extra } from "../_lib/game";
import { ResourceLinks, type AnyRes } from "./Links";

function Check() { return <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" shapeRendering="crispEdges"><path fill="currentColor" d="M13 3h2v2h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H5v-1H4v-1H3V9H2V7h2v1h1v1h2V8h1V7h1V6h1V5h1V4h1V3z" /></svg>; }

export type QuestItem = { id: string; title: string; text: string; resources?: AnyRes[] };

/** A list of steps; ticking one gives XP. `kind` sets the id prefix and which badge completion unlocks. */
export function QuestList({ prefix, items, xp, labelPrefix, kind }: { prefix: string; items: QuestItem[]; xp: number; labelPrefix: string; kind: "path" | "project" | "cert" }) {
  const game = useGame();
  const ids = items.map(i => `${prefix}:${i.id}`);
  const done = ids.filter(id => game.done.includes(id)).length;
  const extra = (all: string[]): Extra => {
    const complete = ids.every(x => all.includes(x));
    return kind === "path" ? { pathDone: complete } : kind === "cert" ? { certDone: complete } : { projectDone: complete };
  };
  return <div>
    <div className="kk-progress kk-pane">
      <div className="kk-progress-bar" aria-hidden="true"><span style={{ width: `${(done / ids.length) * 100}%` }} /></div>
      <p><b>{done} of {ids.length}</b> done · {xp} XP each{done === ids.length ? " · complete!" : ""}</p>
    </div>
    <ol className="kk-steps">
      {items.map((item, i) => {
        const id = ids[i];
        const isDone = game.done.includes(id);
        return <li key={item.id} className={`kk-step${isDone ? " is-done" : ""}`}>
          <button type="button" className="kk-step-check" aria-pressed={isDone} onClick={() => toggleTask(id, xp, `${labelPrefix}: ${item.title}`, extra)}>
            {isDone ? <Check /> : <span>{i + 1}</span>}
            <span className="kk-sr">{isDone ? "Mark as not done" : "Mark as done"}: {item.title}</span>
          </button>
          <div className="kk-step-body">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.resources && item.resources.length > 0 && <ResourceLinks items={item.resources} />}
          </div>
        </li>;
      })}
    </ol>
  </div>;
}

/** Small progress meter for cards. */
export function TaskProgress({ ids }: { ids: string[] }) {
  const game = useGame();
  const done = ids.filter(id => game.done.includes(id)).length;
  return <span className="kk-cert-progress" aria-label={`${done} of ${ids.length} done`}>
    <span className="kk-progress-bar" aria-hidden="true"><span style={{ width: `${(done / ids.length) * 100}%` }} /></span>
    {done}/{ids.length}
  </span>;
}

export function GoalButton({ slug, title }: { slug: string; title: string }) {
  const game = useGame();
  const active = game.goal === slug;
  return <button type="button" className={`kk-button ${active ? "kk-button-quiet" : "kk-button-pixel"}`} aria-pressed={active} onClick={() => setGoal(slug, title)}>
    {active ? "This is your goal" : "Set as my goal"}
  </button>;
}

export function GoalNote() {
  const game = useGame();
  if (!game.goal) return null;
  return <p className="kk-tool-note">Your goal: <Link className="kk-linkish" href={`/careers/${game.goal}`}>{game.goal.replace(/-/g, " ")}</Link></p>;
}
