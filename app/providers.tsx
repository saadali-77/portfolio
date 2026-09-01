"use client";

import { MotionConfig } from "framer-motion";
import { EASE_OUT } from "@/lib/motion";

/**
 * App-wide motion defaults. `reducedMotion="user"` makes every framer-motion
 * animation honour the OS "reduce motion" setting without per-component code.
 */
export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: EASE_OUT }}>
      {children}
    </MotionConfig>
  );
}
