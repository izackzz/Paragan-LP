import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { analyzePixels, contentCrop, encodePixels, packFrames } from './ascii-processing.mjs';

const root = new URL('../', import.meta.url);
const code = ts.transpileModule(
  readFileSync(new URL('src/components/ascii/render-ascii-data.ts', root), 'utf8'),
  { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } },
).outputText;
const exports = {};
runInNewContext(code, { exports, Uint8Array });
const { decodeFrames, gridLayout } = exports;
const config = { columns: 4, rows: 2, aspect: '1/1', ramp: ' .:-=+X' };
const rgb = (values) => Buffer.from(values.flatMap((value) => [value, value, value]));
const animation = (frames) => ({
  version: 2,
  encoding: 'trimmed-rows',
  columns: 4,
  rows: 4,
  frames: packFrames(frames, 4, 4),
});

test('numeric intensities preserve all six ASCII equivalents', () => {
  const encoded = encodePixels(rgb([0, 1, 50, 90, 130, 180, 220, 255]), 4, 2, {
    threshold: 0,
    whitePoint: 255,
    inverted: false,
  });
  assert.equal(encoded.frames[0], ' 1234566');
  assert.equal(
    [...encoded.frames[0]].map((level) => config.ramp[level === ' ' ? 0 : Number(level)]).join(''),
    ' .:-=+XX',
  );
});

test('packing removes empty margins without losing positions or internal spaces', () => {
  const source = '    ' + ' 1 6' + ' 23 ' + '    ';
  const packed = animation([source]);
  assert.deepEqual(packed.frames[0], [null, [1, '1 6'], [1, '23'], null]);
  assert.deepEqual(
    [...decodeFrames(packed, config, 'halftone').frames[0]],
    [...source].map((value) => (value === ' ' ? 0 : Number(value))),
  );
});

test('halftone uses square dots and exactly one maximum diameter of clear gap', () => {
  for (const [columns, rows, aspect] of [
    [96, 96, '1/1'],
    [171, 96, '16/9'],
    [96, 171, '9/16'],
  ]) {
    const layout = gridLayout(columns, rows, aspect, 'halftone');
    assert.equal(layout.cellWidth, layout.cellHeight);
    assert.equal(layout.spriteWidth, layout.spriteHeight);
    assert.equal(layout.cellWidth - layout.spriteWidth, layout.spriteWidth);
    assert.equal(layout.cellHeight - layout.spriteHeight, layout.spriteHeight);
    assert.ok(
      Math.abs(
        layout.gridWidth / layout.gridHeight -
          Number(aspect.split('/')[0]) / Number(aspect.split('/')[1]),
      ) < 0.01,
    );
  }
});

test('ASCII retains its original grid and monospace glyph dimensions', () => {
  const layout = gridLayout(96, 48, '1/1', 'ascii');
  assert.equal(layout.cellWidth, 10);
  assert.equal(layout.cellHeight, 20);
  assert.equal(layout.spriteWidth, 10);
  assert.equal(layout.spriteHeight, 20);
  assert.equal(layout.gridWidth, layout.gridHeight);
  const decoded = decodeFrames(animation(['66666666        ']), config, 'ascii');
  assert.equal(decoded.rows, 2);
  assert.deepEqual([...decoded.frames[0]], [6, 6, 6, 6, 0, 0, 0, 0]);
});

test('a circular source stays circular in both visual models', () => {
  const columns = 96;
  const frames = [''];
  for (let y = 0; y < 96; y++) {
    for (let x = 0; x < columns; x++) {
      frames[0] += Math.hypot(x - 47.5, y - 47.5) < 30 ? '6' : ' ';
    }
  }
  const data = {
    version: 2,
    encoding: 'trimmed-rows',
    columns,
    rows: 96,
    frames: packFrames(frames, columns, 96),
  };
  const circleConfig = { ...config, columns, rows: 48 };
  for (const model of ['ascii', 'halftone']) {
    const decoded = decodeFrames(data, circleConfig, model);
    const layout = gridLayout(columns, decoded.rows, '1/1', model);
    let left = columns,
      right = 0,
      top = decoded.rows,
      bottom = 0;
    decoded.frames[0].forEach((level, index) => {
      if (!level) return;
      const x = index % columns;
      const y = Math.floor(index / columns);
      left = Math.min(left, x);
      right = Math.max(right, x);
      top = Math.min(top, y);
      bottom = Math.max(bottom, y);
    });
    assert.equal((right - left + 1) * layout.cellWidth, (bottom - top + 1) * layout.cellHeight);
  }
});

test('legacy JSON stays byte-equivalent in ASCII and proportional in halftone', () => {
  const frames = [' .:-\n=+X '];
  assert.deepEqual([...decodeFrames(frames, config, 'ascii').frames[0]], [0, 1, 2, 3, 4, 5, 6, 0]);
  assert.deepEqual(
    [...decodeFrames(frames, config, 'halftone').frames[0]],
    [0, 1, 2, 3, 0, 1, 2, 3, 4, 5, 6, 0, 4, 5, 6, 0],
  );
});

test('crop unions motion bounds, preserves aspect and adds safety margin', () => {
  const signal = new Uint8Array(100 * 100 * 2);
  for (let frame = 0; frame < 2; frame++) {
    for (let y = 25; y < 75; y++) {
      for (let x = 20 + frame * 10; x < 70 + frame * 10; x++)
        signal[frame * 10000 + y * 100 + x] = 255;
    }
  }
  const crop = contentCrop(signal, 100, 100, 8, 1000, 1000, 1);
  assert.equal(crop.canvasWidth, crop.canvasHeight);
  assert.ok(crop.width < 1000);
  assert.ok(crop.x < 200 && crop.x + crop.width > 800);
  assert.ok(crop.y < 250 && crop.y + crop.height > 750);
  assert.ok(600 / crop.canvasWidth > 0.9);
});

test('content touching video borders is padded, never clipped', () => {
  const signal = new Uint8Array(100).fill(255);
  const crop = contentCrop(signal, 10, 10, 8, 100, 100, 16 / 9);
  assert.equal(crop.width, 100);
  assert.equal(crop.height, 100);
  assert.ok(crop.offsetX > 0 && crop.offsetY > 0);
  assert.ok(Math.abs(crop.canvasWidth / crop.canvasHeight - 16 / 9) < 0.02);
});

test('exposure is global and handles bright video backgrounds', () => {
  const pixels = new Array(100).fill(255);
  for (let y = 3; y < 7; y++) for (let x = 3; x < 7; x++) pixels[y * 10 + x] = 0;
  const exposure = analyzePixels(rgb(pixels), 10, 10);
  assert.equal(exposure.inverted, true);
  assert.equal(exposure.threshold, 8);
  assert.equal(exposure.whitePoint, 255);
  assert.equal(exposure.signal[33], 255);
});

test('reject malformed numeric rows, metadata and empty content', () => {
  const data = animation(['6666666666666666']);
  for (const row of [
    [-1, '6'],
    [4, '6'],
    [0, '7'],
    [0, 'X'],
    [0, '0'],
    [0, ''],
    [0.5, '6'],
  ]) {
    const invalid = structuredClone(data);
    invalid.frames[0][0] = row;
    assert.throws(() => decodeFrames(invalid, config, 'halftone'));
  }
  assert.throws(() => decodeFrames({ ...data, rows: 3 }, config, 'halftone'));
  assert.throws(() => contentCrop(new Uint8Array(100), 10, 10, 8, 100, 100, 1));
});

test('generated clover uses numeric square samples; other variants remain compatible', () => {
  const text = readFileSync(new URL('src/components/ascii/render-ascii-variants.ts', root), 'utf8');
  const variants = JSON.parse(
    text.match(/export const renderAsciiVariants = ([\s\S]*?) as const satisfies/)[1],
  );
  for (const [name, variant] of Object.entries(variants)) {
    const data = JSON.parse(readFileSync(new URL(`public${variant.src}`, root), 'utf8'));
    const ascii = decodeFrames(data, variant, 'ascii');
    const halftone = decodeFrames(data, variant, 'halftone');
    assert.equal(ascii.frames.length, halftone.frames.length);
    assert.equal(ascii.rows, variant.rows);
    if (name === 'clover') {
      assert.equal(data.version, 2);
      assert.equal(data.columns, 96);
      assert.equal(data.rows, 96);
      assert.equal(data.frames.length, 43);
      assert.equal(variant.crop.width, variant.crop.height);
      assert.ok(variant.crop.width < 500);
      for (const frame of halftone.frames) {
        for (let index = 0; index < frame.length; index++) {
          if (!frame[index]) continue;
          const x = index % halftone.columns;
          const y = Math.floor(index / halftone.columns);
          assert.ok(x > 0 && x < halftone.columns - 1 && y > 0 && y < halftone.rows - 1);
        }
      }
      const flatBytes = JSON.stringify({
        frames: halftone.frames.map((frame) =>
          [...frame].map((value) => (value ? String(value) : ' ')).join(''),
        ),
      }).length;
      assert.ok(JSON.stringify(data).length < flatBytes * 0.6);
    }
  }
});
