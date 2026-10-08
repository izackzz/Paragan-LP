import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { parseArgs } from 'node:util';
import { encodePixels, packFrames } from './ascii-processing.mjs';

// Next already supplies sharp; generation remains offline, never in the browser.
const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve('next/package.json'))('sharp');
const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: { name: { type: 'string' }, samples: { type: 'string', default: '96' } },
});
const name = values.name;
if (
  positionals.length !== 1 ||
  !name ||
  !/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(name) ||
  ['__proto__', 'constructor', 'prototype'].includes(name)
) {
  throw new Error(
    'Usage: node scripts/generate-static-ascii.mjs <svg-or-brand-tsx> --name <variant>',
  );
}
const input = readFileSync(resolve(positionals[0]), 'utf8');
const viewBox = input.match(/viewBox="([\d.\s-]+)"/)?.[1];
const paths = [...input.matchAll(/<path\b[\s\S]*?\/>/g)].map(([path]) =>
  path
    .replaceAll('currentColor', '#ffffff')
    .replaceAll('fillRule=', 'fill-rule=')
    .replaceAll('clipRule=', 'clip-rule=')
    .replaceAll('fillOpacity=', 'fill-opacity='),
);
if (!viewBox || !paths.length)
  throw new Error('Source must contain a viewBox and static SVG paths');
const [, , width, height] = viewBox.split(/\s+/).map(Number);
const samples = Number(values.samples);
if (!Number.isSafeInteger(samples) || samples < 16 || samples > 512 || width <= 0 || height <= 0) {
  throw new Error('Invalid dimensions or sample count (16–512)');
}
const columns = Math.round((samples * width) / Math.min(width, height));
const rows = Math.round((samples * height) / Math.min(width, height));
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox}">${paths.join('')}</svg>`;
const raw = await sharp(Buffer.from(svg))
  .resize(columns, rows, { fit: 'fill' })
  .flatten({ background: '#000000' })
  .removeAlpha()
  .raw()
  .toBuffer();
const encoded = encodePixels(raw, columns, rows, {
  inverted: false,
  threshold: 8,
  whitePoint: 255,
});
const root = new URL('../', import.meta.url);
writeFileSync(
  new URL(`public/ascii/${name}.json`, root),
  JSON.stringify({
    version: 2,
    encoding: 'trimmed-rows',
    columns,
    rows,
    frames: packFrames(encoded.frames, columns, rows),
  }),
);
const registryFile = new URL('src/components/ascii/render-ascii-variants.ts', root);
const registry = readFileSync(registryFile, 'utf8');
const pattern = /export const renderAsciiVariants = ([\s\S]*?) as const satisfies/;
const match = registry.match(pattern);
if (!match) throw new Error('Generated registry not found');
const variants = JSON.parse(match[1]);
variants[name] = {
  src: `/ascii/${name}.json`,
  fps: 1,
  columns,
  rows: Math.round(rows / 2),
  aspect: `${width}/${height}`,
  ramp: ' .:-=+X',
  posterFrame: 0,
  threshold: 8,
  whitePoint: 255,
  inverted: false,
  format: 2,
};
writeFileSync(
  registryFile,
  registry.replace(
    pattern,
    `export const renderAsciiVariants = ${JSON.stringify(variants, null, 2)} as const satisfies`,
  ),
);
console.log(`Generated ${name}: ${columns}×${rows}, one static frame`);
