"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { levelOf, recordVisit, streakOf, useGame, type XpEvent } from "../_lib/game";

/** Compact level / XP / streak chip for the header, plus the "+XP" toasts. */
export default function GameHud() {
  const game = useGame();
  const lv = levelOf(game.xp);
  const streak = streakOf(game.days);
  const [toasts, setToasts] = useState<(XpEvent & { id: number })[]>([]);

  useEffect(() => {
    recordVisit();
    function onXp(e: Event) {
      const detail = (e as CustomEvent<XpEvent>).detail;
      const id = Date.now() + Math.random();
      setToasts(t => [...t.slice(-2), { ...detail, id }]);
      window.setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), detail.levelUp || detail.badge ? 4200 : 2400);
    }
    window.addEventListener("kk-xp", onXp);
    return () => window.removeEventListener("kk-xp", onXp);
  }, []);

  return <>
    <Link href="/quest" className="kk-hud" aria-label={`Level ${lv.index}, ${lv.name}. ${game.xp} XP. ${streak}-day streak. Open your quest log.`}>
      <span className="kk-hud-level" aria-hidden="true">Lv {lv.index}</span>
      <span className="kk-hud-bar" aria-hidden="true"><span style={{ width: `${Math.round(lv.progress * 100)}%` }} /></span>
      <span className="kk-hud-xp" aria-hidden="true">{game.xp} XP</span>
      {streak > 0 && <span className="kk-hud-streak" aria-hidden="true"><svg viewBox="0 0 8 10" width="10" height="12" shapeRendering="crispEdges"><path fill="#ffb03a" d="M3 0h1v1h1v2h1v1h1v4H6v1H5v1H3V9H2V8H1V4h1V2h1z" /><path fill="#ffe27a" d="M3 5h2v3H3z" /></svg>{streak}</span>}
    </Link>
    <div className="kk-toasts" aria-live="polite">
      <AnimatePresence>
        {toasts.map(t => <motion.div key={t.id} className={`kk-toast${t.levelUp || t.badge ? " is-big" : ""}`}
          initial={{ opacity: 0, y: 24, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 420, damping: 26 }}>
          <b>+{t.amount} XP</b><span>{t.label}</span>
          {t.levelUp && <span className="kk-toast-extra">Level up! You are now a {t.levelUp}.</span>}
          {t.badge && <span className="kk-toast-extra">Badge unlocked: {t.badge}</span>}
        </motion.div>)}
      </AnimatePresence>
    </div>
  </>;
}
