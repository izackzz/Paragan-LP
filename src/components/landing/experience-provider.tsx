'use client';

import { useEffect, type ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';
import Lenis from 'lenis';

export function ExperienceProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let lenis: Lenis | undefined;
    const sync = () => {
      lenis?.destroy();
      lenis = undefined;
      if (!preference.matches) {
        lenis = new Lenis({ autoRaf: true, duration: 0.95, smoothWheel: true, syncTouch: false });
      }
    };
    // Keep native hash/history/focus behavior; smooth only normal wheel scrolling.
    sync();
    preference.addEventListener('change', sync);
    return () => {
      lenis?.destroy();
      preference.removeEventListener('change', sync);
    };
  }, []);
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
