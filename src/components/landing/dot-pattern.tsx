import { cn } from '@/lib/utils';
import * as React from 'react';

/**
 * Decorative dot-pattern background used behind `FeatureCard` and
 * `ServiceCard` (see `card-families.md`). Ported from the reference card
 * library's `feature-cards/dot-pattern.tsx` — visual asset only. The dots use
 * `currentColor`, so callers can control them with Tailwind text color classes.
 *
 * Each mounted instance needs a unique `id` (SVG `<mask>`/`<pattern>`/
 * `<linearGradient>` ids must not collide in the same document) — callers
 * that render more than one of these on a page should pass a stable, unique
 * id per instance. `FeatureCard`/`ServiceCard` generate one automatically via
 * `React.useId()` so consumers don't have to think about it.
 */
const DOT_OPACITIES: number[][] = [
  [0.216, 0.489, 0.366, 0.305, 0.514, 0.129, 0.431, 0.142, 0.288, 0.144, 0.313, 0.214],
  [0.4, 0.13, 0.498, 0.473, 0.386, 0.248, 0.168, 0.193, 0.528, 0.307, 0.314, 0.444],
  [0.33, 0.438, 0.477, 0.434, 0.47, 0.383, 0.514, 0.287, 0.346, 0.52, 0.524, 0.126],
  [0.259, 0.281, 0.311, 0.212, 0.524, 0.353, 0.34, 0.417, 0.258, 0.158, 0.388, 0.184],
  [0.491, 0.417, 0.231, 0.209, 0.305, 0.287, 0.353, 0.513, 0.483, 0.455, 0.483, 0.189],
  [0.264, 0.295, 0.51, 0.305, 0.438, 0.289, 0.322, 0.196, 0.486, 0.388, 0.489, 0.208],
  [0.239, 0.463, 0.539, 0.408, 0.527, 0.357, 0.362, 0.151, 0.324, 0.347, 0.299, 0.127],
  [0.476, 0.461, 0.377, 0.415, 0.217, 0.297, 0.258, 0.296, 0.276, 0.182, 0.422, 0.392],
  [0.273, 0.143, 0.338, 0.264, 0.218, 0.29, 0.336, 0.313, 0.514, 0.289, 0.25, 0.507],
  [0.346, 0.208, 0.313, 0.365, 0.491, 0.121, 0.472, 0.281, 0.297, 0.33, 0.463, 0.447],
  [0.217, 0.467, 0.297, 0.303, 0.497, 0.201, 0.5, 0.458, 0.165, 0.36, 0.329, 0.419],
  [0.47, 0.161, 0.191, 0.341, 0.279, 0.387, 0.173, 0.537, 0.218, 0.368, 0.5, 0.414],
];

export interface DotPatternProps {
  id?: string;
  solid?: boolean;
  grow?: 'x' | 'y';
  color?: string;
  opacity?: number;
  className?: string;
}

function DotPatternTile({
  id,
  solid = false,
  grow = false,
}: {
  id: string;
  solid?: boolean;
  grow?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 240 136"
      className={cn('transition-all duration-300', grow ? 'size-full' : 'size-28 w-auto shrink-0')}
      fill="none"
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 'var(--card-dot-pattern-opacity)' } as React.CSSProperties}
    >
      <defs>
        {!solid && (
          <mask
            id={`${id}-mask`}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="240"
            height="136"
            style={{ maskType: 'alpha' } as React.CSSProperties}
          >
            <rect width="240" height="136" fill={`url(#${id}-gradient)`} />
          </mask>
        )}
        <linearGradient
          id={`${id}-gradient`}
          x1="0"
          y1="0"
          x2="83.8613"
          y2="95.7483"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.538873" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity={solid ? '1' : '0'} />
        </linearGradient>
        <pattern
          id={`${id}-pattern`}
          patternUnits="userSpaceOnUse"
          patternTransform="matrix(48 0 0 48 0 0)"
          preserveAspectRatio="none"
          viewBox="0 0 48 48"
          width="1"
          height="1"
        >
          <g fill="currentColor">
            {DOT_OPACITIES.map((row, rowIdx) =>
              row.map((opacity, colIdx) => (
                <rect
                  key={`${rowIdx}-${colIdx}`}
                  x={colIdx * 4}
                  y={rowIdx * 4}
                  width="2"
                  height="2"
                  fillOpacity={opacity}
                />
              )),
            )}
          </g>
        </pattern>
      </defs>
      {solid ? (
        <rect width="240" height="136" fill={`url(#${id}-pattern)`} />
      ) : (
        <g mask={`url(#${id}-mask)`}>
          <rect width="240" height="136" fill={`url(#${id}-pattern)`} />
        </g>
      )}
    </svg>
  );
}

export function DotPattern({
  id,
  solid = false,
  grow,
  color = 'text-foreground',
  opacity = 20,
  className,
}: DotPatternProps) {
  const generatedId = React.useId();
  const patternId = id ?? generatedId;
  const normalizedOpacity = Math.min(100, Math.max(0, opacity)) / 100;

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 z-0 transition-opacity duration-300',
        color,
        className,
      )}
      style={
        {
          '--card-dot-pattern-opacity': normalizedOpacity,
        } as React.CSSProperties
      }
    >
      {grow ? (
        <DotPatternTile id={patternId} solid={solid} grow />
      ) : (
        <DotPatternTile id={patternId} solid={solid} />
      )}
    </div>
  );
}
