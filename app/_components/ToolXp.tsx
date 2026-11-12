"use client";

import { awardOnce } from "../_lib/game";

/** Gives a one-time XP bonus the first time someone actually uses a tool. */
export default function ToolXp({ id, name, children }: { id: string; name: string; children: React.ReactNode }) {
  const award = () => awardOnce(`tool:${id}`, 15, `Tried the ${name}`);
  return <div onInput={award} onClick={e => { if ((e.target as HTMLElement).closest("button")) award(); }}>{children}</div>;
}
