export const SURFACE_BG: Record<number, string> = {
  1: 'bg-surface-1',
  2: 'bg-surface-2',
  3: 'bg-surface-3',
  4: 'bg-surface-4',
  5: 'bg-surface-5',
  6: 'bg-surface-6',
  7: 'bg-surface-7',
  8: 'bg-surface-8',
};

export const SURFACE_HOVER_BG: Record<number, string> = {
  1: 'hover:bg-surface-1',
  2: 'hover:bg-surface-2',
  3: 'hover:bg-surface-3',
  4: 'hover:bg-surface-4',
  5: 'hover:bg-surface-5',
  6: 'hover:bg-surface-6',
  7: 'hover:bg-surface-7',
  8: 'hover:bg-surface-8',
};

export function surfaceClasses(bgLevel: number): string {
  // Round after clamping so a fractional level can't index out of the lookup
  // tables (which would render "undefined undefined").
  const bg = Math.round(Math.max(1, Math.min(8, bgLevel)));
  return SURFACE_BG[bg];
}

/** The hover half of `surfaceClasses`: the level a surface rises to while the
 *  pointer is on it. Same literal-lookup reason as above — `hover:bg-surface-`
 *  plus a template expression generates nothing. */
export function surfaceHoverClasses(bgLevel: number): string {
  const bg = Math.round(Math.max(1, Math.min(8, bgLevel)));
  return SURFACE_HOVER_BG[bg];
}
