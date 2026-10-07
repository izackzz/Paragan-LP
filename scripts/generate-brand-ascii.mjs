import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Offline only. Requires ffmpeg/ffprobe; run with `pnpm generate:brand`.
const root = new URL('../', import.meta.url);
const source = fileURLToPath(new URL('docs/refs/video/ascii-clover.mp4', root));
const probe = JSON.parse(
  execFileSync(
    'ffprobe',
    [
      '-v',
      'error',
      '-select_streams',
      'v:0',
      '-show_entries',
      'stream=width,height,avg_frame_rate,sample_aspect_ratio',
      '-of',
      'json',
      source,
    ],
    { encoding: 'utf8' },
  ),
).streams[0];
const [numerator, denominator] = probe.avg_frame_rate.split('/').map(Number);
const fps = Math.min(30, numerator / denominator);
if (!Number.isFinite(fps) || fps <= 0) throw new Error('Invalid source FPS');
if (probe.sample_aspect_ratio && !['1:1', 'N/A'].includes(probe.sample_aspect_ratio)) {
  throw new Error('Normalize source pixel aspect ratio before generating ASCII');
}

// A monospace cell is twice as tall as it is wide. Sample accordingly, then
// restore that ratio in the player instead of stretching a square text grid.
const columns = Math.min(96, Math.floor(Math.min(probe.width, probe.height) / 2) * 2);
const rows = columns / 2;
const ramp = ' .:-=+X';
const raw = execFileSync(
  'ffmpeg',
  [
    '-v',
    'error',
    '-threads',
    '1',
    '-i',
    source,
    '-an',
    '-vf',
    `fps=${fps},crop=min(iw\\,ih):min(iw\\,ih),scale=${columns}:${rows}:flags=area`,
    '-f',
    'rawvideo',
    '-pix_fmt',
    'rgb24',
    '-threads',
    '1',
    'pipe:1',
  ],
  { maxBuffer: 64 * 1024 * 1024 },
);
const cells = columns * rows;
if (!raw.length || raw.length % (cells * 3)) throw new Error('Incomplete decoded frames');
const luminance = new Uint8Array(raw.length / 3);
const border = [];
for (let index = 0; index < luminance.length; index++) {
  luminance[index] = Math.round(
    raw[index * 3] * 0.2126 + raw[index * 3 + 1] * 0.7152 + raw[index * 3 + 2] * 0.0722,
  );
  const cell = index % cells;
  const x = cell % columns;
  const y = Math.floor(cell / columns);
  if (x < 2 || x >= columns - 2 || y < 2 || y >= rows - 2) border.push(luminance[index]);
}
const percentile = (values, fraction) => {
  const sorted = Array.from(values).sort((a, b) => a - b);
  return sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * fraction))];
};
const inverted = percentile(border, 0.5) > 127;
const signal = luminance.map((value) => (inverted ? 255 - value : value));
const noise = border.map((value) => (inverted ? 255 - value : value));
// One global exposure/threshold avoids brightness pumping between frames.
const threshold = Math.max(8, percentile(noise, 0.99) + 3);
const whitePoint = Math.max(threshold + 1, percentile(signal, 0.995));
const frames = [];
let posterFrame = 0;
let maximumCoverage = -1;
for (let start = 0; start < signal.length; start += cells) {
  const lines = [];
  let coverage = 0;
  for (let y = 0; y < rows; y++) {
    let line = '';
    for (let x = 0; x < columns; x++) {
      const value = signal[start + y * columns + x];
      const normalized = Math.min(1, Math.max(0, (value - threshold) / (whitePoint - threshold)));
      const level =
        normalized === 0 ? 0 : Math.min(ramp.length - 1, Math.ceil(normalized * (ramp.length - 1)));
      line += ramp[level];
      if (level > 0) coverage++;
    }
    lines.push(line);
  }
  if (coverage > maximumCoverage) {
    maximumCoverage = coverage;
    posterFrame = frames.length;
  }
  frames.push(lines.join('\n'));
}
const output = new URL('public/brand/trevo-ascii.json', root);
const config = new URL('src/app/brand/ascii-config.json', root);
mkdirSync(new URL('.', output), { recursive: true });
mkdirSync(new URL('.', config), { recursive: true });
writeFileSync(output, JSON.stringify(frames) + '\n');
writeFileSync(
  config,
  JSON.stringify(
    { fps, columns, rows, ramp, posterFrame, threshold, whitePoint, inverted },
    null,
    2,
  ) + '\n',
);
console.log(
  `${frames.length} frames; ${columns}x${rows}; ${fps} FPS; threshold ${threshold}; white point ${whitePoint}; ${Buffer.byteLength(JSON.stringify(frames))} bytes`,
);
