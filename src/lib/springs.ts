export const spring = {
  fast: {
    type: "spring" as const,
    duration: 0.08,
    bounce: 0,
    exit: { duration: 0.06 },
  },
  // Critically damped: same perceived speed as a bouncier tier, but lands
  // exactly with no overshoot — for short travel and panels/sheets that must
  // settle precisely (dropdowns, tabs, drawers, merged selection backgrounds).
  moderate: {
    type: "spring" as const,
    duration: 0.16,
    bounce: 0,
    exit: { duration: 0.12 },
  },
  slow: {
    type: "spring" as const,
    duration: 0.24,
    bounce: 0.12,
    exit: { duration: 0.16 },
  },
} as const;

// Backward-compatible enter-only export used by existing BoringUI primitives.
// Keep this alongside the newer enter/exit `spring` tokens so older consumers
// continue to install and render without a migration shim.
export const springs = {
  fast: {
    type: spring.fast.type,
    duration: spring.fast.duration,
    bounce: spring.fast.bounce,
  },
  moderate: {
    type: spring.moderate.type,
    duration: spring.moderate.duration,
    bounce: spring.moderate.bounce,
  },
  slow: {
    type: spring.slow.type,
    duration: spring.slow.duration,
    bounce: spring.slow.bounce,
  },
} as const;

// Fallback delay (ms) for deferred-unmount timers that guard an exit tween:
// popups keep their portal mounted until onAnimationComplete fires, but a
// throttled/background tab can stall the animation, so a timer force-unmounts
// after the tier's exit duration plus a safety buffer. Deriving it here keeps
// the timers in step with the tokens above.
export const exitFallbackMs = (tier: { exit: { duration: number } }) =>
  Math.round(tier.exit.duration * 1000) + 100;
