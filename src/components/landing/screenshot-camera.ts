export const SCREENSHOT_TOUR_DURATION = 32_000;

// Cubic Bézier (0, 0), (1/3, 0), (2/3, 1), (1, 1): x(t) = t.
// Composing it softens the corners without introducing holds or discontinuities.
function bezierWave(t: number) {
  return t * t * (3 - 2 * t);
}

export function screenshotCamera(elapsed: number) {
  const phase =
    ((elapsed % SCREENSHOT_TOUR_DURATION) / SCREENSHOT_TOUR_DURATION) * 2 * Math.PI + Math.PI / 4;
  const focus = (value: number) => bezierWave(bezierWave(bezierWave((1 - value) / 2)));

  return {
    x: focus(Math.cos(phase)),
    y: focus(Math.sin(phase)),
    zoom: 1.88 + 0.08 * Math.sin(4 * phase),
  };
}

export function screenshotTransform(elapsed: number) {
  const { x, y, zoom } = screenshotCamera(elapsed);

  // Translation uses the full, uncropped image dimensions. Each focus coordinate
  // stays inside [0, 1], so every viewport corner remains covered at every scale.
  return `translate3d(calc(${x * 100}cqw - ${x * zoom * 100}%), calc(${y * 100}cqh - ${y * zoom * 100}%), 0) scale(${zoom})`;
}
