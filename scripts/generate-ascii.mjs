import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

// Offline only. Requires ffmpeg/ffprobe; run `pnpm generate:ascii --help`.
const root = new URL('../', import.meta.url);
const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    name: { type: 'string' },
    aspect: { type: 'string' },
    help: { type: 'boolean', short: 'h' },
  },
});
if (values.help) {
  console.log(
    'pnpm generate:ascii <video-path> [--name clover] [--aspect 1/1|16/9]\nFixed shorter visual axis: 96 columns for portrait, 48 rows for landscape. Default aspect: source ratio. Output: public/ascii/<video-name>.json. Existing outputs are replaced.',
  );
  process.exit(0);
}
if (positionals.length !== 1) throw new Error('Pass one input video path. See --help.');
const source = resolve(positionals[0]);
const stem = basename(source, extname(source));
if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(stem)) {
  throw new Error(
    'Use a video filename containing only letters, numbers, dots, hyphens or underscores.',
  );
}
const registryFile = new URL('src/components/ascii/render-ascii-variants.ts', root);
const registryText = readFileSync(registryFile, 'utf8');
const registryMatch = registryText.match(
  /export const renderAsciiVariants = ([\s\S]*?) as const satisfies/,
);
if (!registryMatch) throw new Error('Could not read the generated ASCII registry.');
const variants = JSON.parse(registryMatch[1]);
const src = `/ascii/${stem}.json`;
const name = values.name ?? Object.keys(variants).find((key) => variants[key].src === src) ?? stem;
if (
  !/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(name) ||
  ['__proto__', 'constructor', 'prototype'].includes(name)
) {
  throw new Error('Use a variant name containing letters, numbers, hyphens or underscores.');
}
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
const sourceRatio = probe.width / probe.height;
const aspect =
  values.aspect ??
  (Math.abs(sourceRatio - 1) < 0.01
    ? '1/1'
    : Math.abs(sourceRatio - 16 / 9) < 0.03
      ? '16/9'
      : `${probe.width}/${probe.height}`);
if (!/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/.test(aspect))
  throw new Error('Aspect must be a ratio such as 1/1 or 16/9.');
const [aspectWidth, aspectHeight] = aspect.split('/').map(Number);
const ratio = aspectWidth / aspectHeight;
if (!Number.isFinite(ratio) || aspectWidth <= 0 || aspectHeight <= 0)
  throw new Error('Aspect must be positive.');
// Normalize the shorter visual axis, accounting for 1:2 monospace cells.
const columns = ratio < 1 ? 96 : Math.round(96 * ratio);
const rows = ratio < 1 ? Math.round(48 / ratio) : 48;
// Center crop to the requested display aspect before sampling the normalized grid.
const crop = `crop=w=min(iw\\,ih*${ratio}):h=min(ih\\,iw/${ratio}):exact=1`;
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
    `fps=${fps},${crop},scale=${columns}:${rows}:flags=area`,
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
const output = new URL(`public/ascii/${stem}.json`, root);
mkdirSync(new URL('.', output), { recursive: true });
const variant = {
  src,
  fps,
  columns,
  rows,
  aspect,
  ramp,
  posterFrame,
  threshold,
  whitePoint,
  inverted,
};
// Keep aliases coherent when the same output is regenerated with new settings.
for (const key of Object.keys(variants)) {
  if (variants[key].src === src) variants[key] = variant;
}
variants[name] = variant;
const sortedVariants = Object.fromEntries(
  Object.entries(variants).sort(([a], [b]) => a.localeCompare(b)),
);
writeFileSync(output, JSON.stringify(frames) + '\n');
writeFileSync(
  registryFile,
  registryText.replace(
    registryMatch[0],
    `export const renderAsciiVariants = ${JSON.stringify(sortedVariants, null, 2)} as const satisfies`,
  ),
);
console.log(
  `${name} → ${fileURLToPath(output)}\n${frames.length} frames; ${columns}x${rows}; ${aspect}; ${fps} FPS; threshold ${threshold}; ${Buffer.byteLength(JSON.stringify(frames))} bytes`,
);
