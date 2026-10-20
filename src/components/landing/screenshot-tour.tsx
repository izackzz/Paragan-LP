'use client';

import { useRef, type ReactNode } from 'react';
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import { screenshotTransform } from './screenshot-camera';
import styles from './screenshot-motion.module.css';

export function ScreenshotTour({
  width,
  height,
  viewportRatio = `${width} / ${height}`,
  className,
  children,
}: {
  width: number;
  height: number;
  viewportRatio?: string;
  className?: string;
  children: ReactNode;
}) {
  const viewport = useRef<HTMLDivElement>(null);
  const elapsed = useRef(0);
  const visible = useInView(viewport, { margin: '100px' });
  const reducedMotion = useReducedMotion();
  const transform = useMotionValue(screenshotTransform(0));

  useAnimationFrame((_, delta) => {
    if (!visible || reducedMotion !== false) return;
    elapsed.current += delta;
    transform.set(screenshotTransform(elapsed.current));
  });

  return (
    <div
      ref={viewport}
      className={cn(styles.viewport, className)}
      style={{ aspectRatio: viewportRatio }}
    >
      <motion.div
        className={styles.image}
        style={{
          aspectRatio: `${width} / ${height}`,
          transform: reducedMotion ? 'none' : transform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
