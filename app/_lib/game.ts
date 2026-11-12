"use client";

import { useSyncExternalStore } from "react";

// Progress lives in this browser only (localStorage). No account, nothing sent anywhere.
export type GameState = { xp: number; done: string[]; badges: string[]; days: string[] };
const KEY = "kk-game-v1";
const EMPTY: GameState = { xp: 0, done: [], badges: [], days: [] };

export const LEVELS = [
  { min: 0, name: "Localhost" },
  { min: 60, name: "Shell Explorer" },
  { min: 160, name: "Container Wrangler" },
  { min: 320, name: "Pipeline Pilot" },
  { min: 540, name: "Cluster Captain" },
  { min: 820, name: "Cloud Architect" },
  { min: 1200, name: "Kloud Legend" },
];

export const BADGES = [
  { id: "first-step", name: "First step", how: "Complete any task", icon: "boot" },
  { id: "streak-3", name: "On a roll", how: "Visit 3 days in a row", icon: "flame" },
  { id: "streak-7", name: "Habit formed", how: "Visit 7 days in a row", icon: "flame2" },
  { id: "tinkerer", name: "Tool tinkerer", how: "Try all four toolkit tools", icon: "wrench" },
  { id: "route-runner", name: "Route runner", how: "Finish all five route stops", icon: "flag" },
  { id: "cert-starter", name: "Cert chaser", how: "Tick off a step in any certification roadmap", icon: "scroll" },
  { id: "cert-ready", name: "Exam ready", how: "Finish every step of one certification roadmap", icon: "crown" },
] as const;

const listeners = new Set<() => void>();
let cache: { raw: string; state: GameState } | null = null;

function readRaw() { try { return localStorage.getItem(KEY) ?? ""; } catch { return ""; } }
function parse(raw: string): GameState {
  if (cache?.raw === raw) return cache.state;
  let state = EMPTY;
  try { if (raw) state = { ...EMPTY, ...JSON.parse(raw) }; } catch { state = EMPTY; }
  cache = { raw, state };
  return state;
}
function save(state: GameState) {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage blocked */ }
  listeners.forEach(fn => fn());
}
function subscribe(fn: () => void) {
  listeners.add(fn);
  const onStorage = (e: StorageEvent) => { if (e.key === KEY) fn(); };
  window.addEventListener("storage", onStorage);
  return () => { listeners.delete(fn); window.removeEventListener("storage", onStorage); };
}

export function useGame(): GameState {
  return useSyncExternalStore(subscribe, () => parse(readRaw()), () => EMPTY);
}

export function levelOf(xp: number) {
  let i = 0;
  while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1].min) i++;
  const next = LEVELS[i + 1];
  return { index: i + 1, name: LEVELS[i].name, min: LEVELS[i].min, next: next?.min ?? null, progress: next ? (xp - LEVELS[i].min) / (next.min - LEVELS[i].min) : 1 };
}

export function streakOf(days: string[]) {
  const set = new Set(days);
  let n = 0;
  const d = new Date();
  for (;;) {
    const key = d.toISOString().slice(0, 10);
    if (!set.has(key)) break;
    n++; d.setDate(d.getDate() - 1);
  }
  return n;
}

export type XpEvent = { amount: number; label: string; levelUp?: string; badge?: string };
function announce(e: XpEvent) { window.dispatchEvent(new CustomEvent<XpEvent>("kk-xp", { detail: e })); }

function checkBadges(s: GameState, extra: { tools?: number; routeDone?: boolean; certDone?: boolean } = {}) {
  const earned: string[] = [];
  const give = (id: string, cond: boolean) => { if (cond && !s.badges.includes(id)) earned.push(id); };
  give("first-step", s.done.length > 0);
  const streak = streakOf(s.days);
  give("streak-3", streak >= 3);
  give("streak-7", streak >= 7);
  give("tinkerer", s.done.filter(d => d.startsWith("tool:")).length >= 4);
  give("route-runner", Boolean(extra.routeDone));
  give("cert-starter", s.done.some(d => d.startsWith("cert:")));
  give("cert-ready", Boolean(extra.certDone));
  return earned;
}

/** Toggle a task. Completing gives XP once; un-ticking takes it back. */
export function toggleTask(id: string, xp: number, label: string, extra?: (done: string[]) => { routeDone?: boolean; certDone?: boolean }) {
  const s = parse(readRaw());
  const isDone = s.done.includes(id);
  const done = isDone ? s.done.filter(d => d !== id) : [...s.done, id];
  const before = levelOf(s.xp).index;
  const next: GameState = { ...s, done, xp: Math.max(0, s.xp + (isDone ? -xp : xp)) };
  const earned = isDone ? [] : checkBadges(next, extra?.(done));
  next.badges = [...next.badges, ...earned];
  save(next);
  if (!isDone) {
    const lv = levelOf(next.xp);
    announce({ amount: xp, label, levelUp: lv.index > before ? lv.name : undefined, badge: earned.length ? BADGES.find(b => b.id === earned[0])?.name : undefined });
  }
}

/** Give XP once for an action (e.g. first use of a tool). */
export function awardOnce(id: string, xp: number, label: string) {
  const s = parse(readRaw());
  if (s.done.includes(id)) return;
  toggleTask(id, xp, label);
}

/** Record today's visit; +5 XP once per day. */
export function recordVisit() {
  const s = parse(readRaw());
  const today = new Date().toISOString().slice(0, 10);
  if (s.days.includes(today)) return;
  const next: GameState = { ...s, days: [...s.days.slice(-60), today], xp: s.xp + 5 };
  const earned = checkBadges(next);
  next.badges = [...next.badges, ...earned];
  save(next);
  if (s.days.length) announce({ amount: 5, label: `Daily visit · ${streakOf(next.days)}-day streak`, badge: earned.length ? BADGES.find(b => b.id === earned[0])?.name : undefined });
}

export function resetGame() { save(EMPTY); }
