/** Compact, bounded memory: a weaker pass never renews a stronger mark. */
export class MotionAsciiField {
  readonly strength: Float32Array;
  readonly touched: Float64Array;
  readonly dx: Float32Array;
  readonly dy: Float32Array;
  readonly active = new Set<number>();

  constructor(
    count: number,
    readonly hold = 2000,
    readonly fade = 5000,
  ) {
    this.strength = new Float32Array(count);
    this.touched = new Float64Array(count);
    this.dx = new Float32Array(count);
    this.dy = new Float32Array(count);
  }

  value(index: number, now: number) {
    const progress = Math.min(1, Math.max(0, (now - this.touched[index] - this.hold) / this.fade));
    return this.strength[index] * (1 - progress * progress * (3 - 2 * progress));
  }

  paint(index: number, weight: number, dx: number, dy: number, now: number) {
    if (weight <= 0 || weight + 1e-7 < this.value(index, now)) return;
    this.strength[index] = Math.min(1, weight);
    this.touched[index] = now;
    this.dx[index] = dx;
    this.dy[index] = dy;
    this.active.add(index);
  }

  prune(now: number) {
    for (const index of this.active) {
      if (now >= this.touched[index] + this.hold + this.fade) {
        this.strength[index] = 0;
        this.active.delete(index);
      }
    }
  }
}

export function brushWeight(distance: number, radius: number) {
  const t = Math.min(1, Math.max(0, distance / radius));
  return (1 - t * t) ** 3;
}

export function motionScale(
  model: 'halftone' | 'pixels' | 'ascii',
  amount: number,
  factor: number,
) {
  return model === 'halftone'
    ? 1 + (factor - 1) * amount
    : model === 'pixels'
      ? 1 - (1 - 1 / factor) * amount
      : 1;
}
