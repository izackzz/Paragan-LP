import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { analyzePixels, contentCrop, encodePixels, packFrames } from './ascii-processing.mjs';

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
    'pnpm generate:ascii <video-path> [--name clover] [--aspect 1/1|16/9]\nSquare numeric grid; fixed shorter axis: 96 samples. One content crop across all frames, with safety margin and aspect preserved. ASCII keeps 1:2 cells. Output: public/ascii/<video-name>.json. Existing outputs are replaced.',
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
// Analyze a square-pixel grid before cropping, without distorting the source.
const analysisColumns = sourceRatio < 1 ? 96 : Math.round(96 * sourceRatio);
const analysisRows = Math.round(analysisColumns / sourceRatio);
const ramp = ' .:-=+X';
const decode = (filter) =>
  execFileSync(
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
      `fps=${fps},${filter}`,
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
const analysis = analyzePixels(
  decode(`scale=${analysisColumns}:${analysisRows}:flags=area`),
  analysisColumns,
  analysisRows,
);
const { threshold, whitePoint, inverted } = analysis;
const crop = contentCrop(
  analysis.signal,
  analysisColumns,
  analysisRows,
  threshold,
  probe.width,
  probe.height,
  ratio,
);
// Pad only if the aspect/safety margin exceeds the video boundary; never trim useful pixels.
const transform = `format=rgb24,crop=${crop.width}:${crop.height}:${crop.x}:${crop.y}:exact=1,pad=${crop.canvasWidth}:${crop.canvasHeight}:${crop.offsetX}:${crop.offsetY}:color=${inverted ? 'white' : 'black'}`;
const squareRows = Math.round(columns / ratio);
const { frames, posterFrame } = encodePixels(
  decode(`${transform},scale=${columns}:${squareRows}:flags=area`),
  columns,
  squareRows,
  analysis,
);
const animation = {
  version: 2,
  encoding: 'trimmed-rows',
  columns,
  rows: squareRows,
  frames: packFrames(frames, columns, squareRows),
};
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
  format: 2,
  crop,
};
// Keep aliases coherent when the same output is regenerated with new settings.
for (const key of Object.keys(variants)) {
  if (variants[key].src === src) variants[key] = variant;
}
variants[name] = variant;
const sortedVariants = Object.fromEntries(
  Object.entries(variants).sort(([a], [b]) => a.localeCompare(b)),
);
const json = JSON.stringify(animation) + '\n';
writeFileSync(output, json);
writeFileSync(
  registryFile,
  registryText.replace(
    registryMatch[0],
    `export const renderAsciiVariants = ${JSON.stringify(sortedVariants, null, 2)} as const satisfies`,
  ),
);
console.log(
  `${name} → ${fileURLToPath(output)}\n${frames.length} frames; square ${columns}x${squareRows}; ASCII ${columns}x${rows}; ${aspect}; ${fps} FPS; threshold ${threshold}; crop ${crop.width}x${crop.height} at ${crop.x},${crop.y}; ${Buffer.byteLength(json)} bytes`,
);
