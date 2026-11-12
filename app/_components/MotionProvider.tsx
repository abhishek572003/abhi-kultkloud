"use client";

import { MotionConfig } from "motion/react";

// Every motion animation respects the visitor's reduced-motion setting.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
