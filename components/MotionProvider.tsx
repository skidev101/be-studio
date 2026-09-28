"use client";

import { MotionConfig } from "framer-motion";

/**
 * Makes every Framer animation in the tree honour the OS reduce-motion
 * setting: transforms and layout animations are dropped, opacity still
 * animates, so an element's arrival stays legible without movement.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
