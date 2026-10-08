/** C2-continuous easing: zero velocity and acceleration at both endpoints. */
export function easeInOut(value: number) {
  const t = Math.min(1, Math.max(0, value));
  return Math.min(1, Math.max(0, t * t * t * (10 + t * (-15 + t * 6))));
}

/** Finite inertial trajectories, without distance clamps or per-frame allocation. */
export class MotionAsciiField {
  readonly strength: Float32Array;
  readonly touched: Float64Array;
  readonly dx: Float32Array;
  readonly dy: Float32Array;
  readonly offsetX: Float32Array;
  readonly offsetY: Float32Array;
  readonly velocityX: Float32Array;
  readonly velocityY: Float32Array;
  private readonly originX: Float32Array;
  private readonly originY: Float32Array;
  private readonly initialVelocityX: Float32Array;
  private readonly initialVelocityY: Float32Array;
  private readonly destinationX: Float32Array;
  private readonly destinationY: Float32Array;
  private readonly initialColor: Float32Array;
  readonly active = new Set<number>();

  constructor(
    count: number,
    readonly hold = 2000,
    readonly fade = 3000,
  ) {
    this.strength = new Float32Array(count);
    this.touched = new Float64Array(count);
    this.dx = new Float32Array(count);
    this.dy = new Float32Array(count);
    this.offsetX = new Float32Array(count);
    this.offsetY = new Float32Array(count);
    this.velocityX = new Float32Array(count);
    this.velocityY = new Float32Array(count);
    this.originX = new Float32Array(count);
    this.originY = new Float32Array(count);
    this.initialVelocityX = new Float32Array(count);
    this.initialVelocityY = new Float32Array(count);
    this.destinationX = new Float32Array(count);
    this.destinationY = new Float32Array(count);
    this.initialColor = new Float32Array(count);
  }

  value(index: number, now: number) {
    const age = Math.max(0, now - this.touched[index]);
    const color =
      this.initialColor[index] +
      (this.strength[index] - this.initialColor[index]) * easeInOut(age / 180);
    return color * (1 - easeInOut((age - this.hold) / this.fade));
  }

  paint(
    index: number,
    weight: number,
    dx: number,
    dy: number,
    now: number,
    impulse = 120,
    retrigger = false,
  ) {
    if (weight <= 0) return;
    const flying = this.active.has(index) && now < this.touched[index] + this.hold + this.fade;
    // A stationary pointer must not restart departure every frame. A stronger
    // new impulse can steer a flight, preserving its current position/velocity.
    if (flying && !retrigger && weight <= this.strength[index] + 1e-7) return;
    this.advance(index, now);
    this.initialColor[index] = this.value(index, now);
    this.originX[index] = this.offsetX[index];
    this.originY[index] = this.offsetY[index];
    this.initialVelocityX[index] = this.velocityX[index];
    this.initialVelocityY[index] = this.velocityY[index];
    this.strength[index] = Math.min(1, Math.max(weight, this.initialColor[index]));
    this.touched[index] = now;
    this.dx[index] = dx;
    this.dy[index] = dy;
    this.destinationX[index] = this.offsetX[index] + dx * impulse * Math.min(1, weight);
    this.destinationY[index] = this.offsetY[index] + dy * impulse * Math.min(1, weight);
    this.active.add(index);
  }

  advance(index: number, now: number) {
    const age = Math.max(0, now - this.touched[index]);
    if (age >= this.hold + this.fade || !this.active.has(index)) {
      this.offsetX[index] = this.offsetY[index] = 0;
      this.velocityX[index] = this.velocityY[index] = 0;
      return;
    }
    if (age < this.hold) {
      const t = age / this.hold;
      const s = easeInOut(t);
      const ds = 30 * t * t * (1 - t) ** 2;
      // Quintic Hermite term carries existing momentum through a new impulse.
      const momentum = t - 6 * t ** 3 + 8 * t ** 4 - 3 * t ** 5;
      const derivative = 1 - 18 * t * t + 32 * t ** 3 - 15 * t ** 4;
      const seconds = this.hold / 1000;
      this.offsetX[index] =
        this.originX[index] * (1 - s) +
        this.destinationX[index] * s +
        this.initialVelocityX[index] * seconds * momentum;
      this.offsetY[index] =
        this.originY[index] * (1 - s) +
        this.destinationY[index] * s +
        this.initialVelocityY[index] * seconds * momentum;
      this.velocityX[index] =
        ((this.destinationX[index] - this.originX[index]) * ds) / seconds +
        this.initialVelocityX[index] * derivative;
      this.velocityY[index] =
        ((this.destinationY[index] - this.originY[index]) * ds) / seconds +
        this.initialVelocityY[index] * derivative;
    } else {
      const t = (age - this.hold) / this.fade;
      const remaining = 1 - easeInOut(t);
      const velocity = t === 0 ? 0 : (-30 * t * t * (1 - t) ** 2) / (this.fade / 1000);
      this.offsetX[index] = this.destinationX[index] * remaining;
      this.offsetY[index] = this.destinationY[index] * remaining;
      this.velocityX[index] = this.destinationX[index] * velocity;
      this.velocityY[index] = this.destinationY[index] * velocity;
    }
  }

  prune(now: number) {
    for (const index of this.active) {
      if (now >= this.touched[index] + this.hold + this.fade) {
        this.strength[index] = 0;
        this.offsetX[index] = this.offsetY[index] = 0;
        this.velocityX[index] = this.velocityY[index] = 0;
        this.active.delete(index);
      }
    }
  }
}

export function brushWeight(distance: number, radius: number) {
  const t = Math.min(1, Math.max(0, distance / radius));
  // Broad Gaussian softness, feathered to exactly zero at the outer edge.
  return Math.exp(-2 * t * t) * (1 - easeInOut((t - 0.55) / 0.45));
}

export function motionScale(
  model: 'halftone' | 'pixels' | 'ascii',
  amount: number,
  factor: number,
) {
  return model === 'pixels' ? 1 - (1 - 1 / factor) * amount : 1;
}

export function usesPrimaryColor(base: ArrayLike<number>, primary: ArrayLike<number>) {
  return [0, 1, 2, 3].every((index) => Math.abs(base[index] - primary[index]) <= 1);
}
