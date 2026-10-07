export const FRAME_RAMP = ' 123456';

function percentile(histogram, fraction) {
  const total = histogram.reduce((sum, count) => sum + count, 0);
  const target = Math.min(total - 1, Math.floor(total * fraction));
  let count = 0;
  for (let value = 0; value < histogram.length; value++) {
    count += histogram[value];
    if (count > target) return value;
  }
  throw new Error('Cannot measure empty pixels');
}

export function readLuminance(raw, columns, rows) {
  const cells = columns * rows;
  if (!raw.length || raw.length % (cells * 3)) throw new Error('Incomplete decoded frames');
  return Uint8Array.from({ length: raw.length / 3 }, (_, index) =>
    Math.round(raw[index * 3] * 0.2126 + raw[index * 3 + 1] * 0.7152 + raw[index * 3 + 2] * 0.0722),
  );
}

export function analyzePixels(raw, columns, rows) {
  const luminance = readLuminance(raw, columns, rows);
  const cells = columns * rows;
  const border = new Uint32Array(256);
  const all = new Uint32Array(256);
  for (let index = 0; index < luminance.length; index++) {
    const x = (index % cells) % columns;
    const y = Math.floor((index % cells) / columns);
    all[luminance[index]]++;
    if (x < 2 || x >= columns - 2 || y < 2 || y >= rows - 2) border[luminance[index]]++;
  }
  const inverted = percentile(border, 0.5) > 127;
  const noise = inverted ? border.slice().reverse() : border;
  const histogram = inverted ? all.slice().reverse() : all;
  const threshold = Math.max(8, percentile(noise, 0.99) + 3);
  const whitePoint = Math.max(threshold + 1, percentile(histogram, 0.995));
  return {
    signal: luminance.map((value) => (inverted ? 255 - value : value)),
    threshold,
    whitePoint,
    inverted,
  };
}

// One union over the whole timeline: no frame-by-frame zoom or moving crop.
export function contentCrop(signal, columns, rows, threshold, width, height, ratio) {
  let left = columns;
  let top = rows;
  let right = -1;
  let bottom = -1;
  const cells = columns * rows;
  for (let index = 0; index < signal.length; index++) {
    if (signal[index] <= threshold) continue;
    const x = (index % cells) % columns;
    const y = Math.floor((index % cells) / columns);
    left = Math.min(left, x);
    right = Math.max(right, x);
    top = Math.min(top, y);
    bottom = Math.max(bottom, y);
  }
  if (right < 0) throw new Error('No visible content above the animation threshold');
  const contentWidth = ((right - left + 1) * width) / columns;
  const contentHeight = ((bottom - top + 1) * height) / rows;
  // At least one analysis cell of safety on every side, plus 2.5% of content.
  const safeWidth = contentWidth + 2 * Math.max(width / columns, contentWidth * 0.025);
  const safeHeight = contentHeight + 2 * Math.max(height / rows, contentHeight * 0.025);
  const canvasWidth = Math.ceil(Math.max(safeWidth, safeHeight * ratio));
  const canvasHeight = Math.ceil(canvasWidth / ratio);
  const centerX = ((left + right + 1) * width) / (2 * columns);
  const centerY = ((top + bottom + 1) * height) / (2 * rows);
  const wantedX = Math.floor(centerX - canvasWidth / 2);
  const wantedY = Math.floor(centerY - canvasHeight / 2);
  const x = Math.max(0, wantedX);
  const y = Math.max(0, wantedY);
  return {
    x,
    y,
    width: Math.min(width, wantedX + canvasWidth) - x,
    height: Math.min(height, wantedY + canvasHeight) - y,
    canvasWidth,
    canvasHeight,
    offsetX: x - wantedX,
    offsetY: y - wantedY,
  };
}

export function encodePixels(raw, columns, rows, { inverted, threshold, whitePoint }) {
  const luminance = readLuminance(raw, columns, rows);
  const cells = columns * rows;
  const frames = [];
  let posterFrame = 0;
  let maximumCoverage = -1;
  for (let start = 0; start < luminance.length; start += cells) {
    let frame = '';
    let coverage = 0;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        const value = luminance[start + y * columns + x];
        const signal = inverted ? 255 - value : value;
        const normalized = Math.min(
          1,
          Math.max(0, (signal - threshold) / (whitePoint - threshold)),
        );
        const level = normalized === 0 ? 0 : Math.ceil(normalized * 6);
        frame += FRAME_RAMP[level];
        if (level) coverage++;
      }
    }
    if (coverage > maximumCoverage) {
      maximumCoverage = coverage;
      posterFrame = frames.length;
    }
    frames.push(frame);
  }
  return { columns, rows, frames, posterFrame };
}

// Preserve coordinates without writing unused padding on every row/frame.
export function packFrames(frames, columns, rows) {
  return frames.map((frame) =>
    Array.from({ length: rows }, (_, y) => {
      const row = frame.slice(y * columns, (y + 1) * columns);
      const start = row.search(/[1-6]/);
      return start < 0 ? null : [start, row.trimEnd().slice(start)];
    }),
  );
}
