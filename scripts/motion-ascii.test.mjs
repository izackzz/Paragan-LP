import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync(
  new URL('../src/components/ascii/motion-ascii-field.ts', import.meta.url),
  'utf8',
);
const compiled = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 },
}).outputText;
const { MotionAsciiField, brushWeight, motionScale, easeInOut, usesPrimaryColor } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`
);

test('radial brush is continuous, including one-percent influences', () => {
  assert.equal(brushWeight(0, 100), 1);
  assert.equal(brushWeight(100, 100), 0);
  assert.equal(brushWeight(200, 100), 0);
  assert.ok(brushWeight(98, 100) > 0);
  assert.ok(brushWeight(50, 100) > 0.6);
  assert.ok(brushWeight(20, 100) > brushWeight(80, 100));
});

test('color eases in, holds for two seconds and restores over the next three', () => {
  const field = new MotionAsciiField(2);
  field.paint(0, 1, 1, 0, 100);
  field.paint(1, 0.01, 0, 1, 1100);
  assert.equal(field.value(0, 2100), 1);
  assert.equal(field.value(0, 100), 0);
  assert.equal(field.value(0, 190), 0.5);
  assert.equal(field.value(0, 3600), 0.5);
  assert.equal(field.value(0, 5100), 0);
  assert.ok(field.value(1, 5100) > 0);
  field.prune(5100);
  assert.deepEqual([...field.active], [1]);
  field.prune(6100);
  assert.equal(field.active.size, 0);
});

test('weak contact cannot renew a strong mark or accumulate to full strength', () => {
  const field = new MotionAsciiField(1);
  field.paint(0, 0.8, 1, 0, 100);
  field.paint(0, 0.01, 0, 1, 1000);
  assert.equal(field.touched[0], 100);
  assert.equal(field.dx[0], 1);
  for (let n = 0; n < 100; n++) field.paint(0, 0.01, 0, 1, 8000 + n);
  assert.ok(Math.abs(field.strength[0] - 0.01) < 1e-7);
  assert.equal(field.touched[0], 8000);
});

test('stationary hover cannot reset an inertial flight every frame', () => {
  const field = new MotionAsciiField(1);
  field.paint(0, 0.1, 1, 0, 0);
  field.paint(0, 0.1, 1, 0, 1000);
  assert.equal(field.touched[0], 0);
});

test('mode transforms respect both factors and fully return to one', () => {
  for (const factor of [2, 3]) {
    assert.equal(motionScale('halftone', 1, factor), 1);
    assert.ok(Math.abs(motionScale('pixels', 1, factor) - 1 / factor) < 1e-10);
    for (const model of ['halftone', 'pixels', 'ascii'])
      assert.equal(motionScale(model, 0, factor), 1);
  }
  assert.equal(motionScale('ascii', 1, 3), 1);
});

test('particles depart for two seconds then smoothly return, retaining direction', () => {
  const field = new MotionAsciiField(1);
  field.paint(0, 1, 0.6, 0.8, 100, 240);
  field.advance(0, 100);
  assert.equal(field.offsetX[0], 0);
  assert.equal(field.velocityX[0], 0);
  field.advance(0, 1100);
  assert.ok(Math.abs(field.offsetX[0] - 72) < 1e-5);
  assert.ok(Math.abs(field.offsetY[0] - 96) < 1e-5);
  assert.ok(field.velocityX[0] > 0);
  field.advance(0, 2100);
  assert.ok(Math.abs(field.offsetX[0] - 144) < 1e-5);
  assert.equal(field.velocityX[0], 0);
  field.advance(0, 3600);
  assert.ok(Math.abs(field.offsetX[0] - 72) < 1e-5);
  assert.ok(field.velocityX[0] < 0);
  field.advance(0, 5100);
  assert.equal(field.offsetX[0], 0);
  assert.equal(field.offsetY[0], 0);
  assert.equal(field.velocityX[0], 0);
});

test('a stronger impulse preserves position and velocity rather than teleporting', () => {
  const field = new MotionAsciiField(1);
  field.paint(0, 0.5, 1, 0, 100, 240);
  field.advance(0, 1100);
  const x = field.offsetX[0],
    vx = field.velocityX[0];
  field.paint(0, 1, 0, 1, 1100, 240);
  field.advance(0, 1100);
  assert.equal(field.offsetX[0], x);
  assert.equal(field.velocityX[0], vx);
  field.advance(0, 1110);
  assert.ok(field.offsetX[0] > x);
});

test('easing is symmetric and color selection follows resolved theme tokens', () => {
  assert.equal(easeInOut(0), 0);
  assert.equal(easeInOut(0.5), 0.5);
  assert.equal(easeInOut(1), 1);
  assert.ok(Math.abs(easeInOut(0.2) + easeInOut(0.8) - 1) < 1e-10);
  assert.equal(usesPrimaryColor([200, 100, 50, 255], [200, 100, 50, 255]), true);
  assert.equal(usesPrimaryColor([50, 100, 200, 255], [200, 100, 50, 255]), false);
});

test('a click adds a fresh impulse without losing existing momentum', () => {
  const field = new MotionAsciiField(1);
  field.paint(0, 1, 1, 0, 100, 240);
  field.advance(0, 1100);
  const x = field.offsetX[0],
    vx = field.velocityX[0];
  field.paint(0, 0.5, 0, -1, 1100, 240, true);
  field.advance(0, 1100);
  assert.equal(field.offsetX[0], x);
  assert.equal(field.velocityX[0], vx);
  assert.equal(field.value(0, 1100), 1);
  field.advance(0, 2100);
  assert.ok(field.offsetY[0] < 0);
});

test('footer JSON preserves the SVG ratio and contains exactly one frame', () => {
  const data = JSON.parse(
    readFileSync(new URL('../public/ascii/paragan-wordmark.json', import.meta.url), 'utf8'),
  );
  assert.equal(data.version, 2);
  assert.equal(data.encoding, 'trimmed-rows');
  assert.equal(data.frames.length, 1);
  assert.equal(data.rows, 96);
  assert.equal(data.columns, Math.round((96 * 1225) / 250));
  assert.equal(data.frames[0].length, 96);
  assert.ok(data.frames[0].some((row) => row !== null));
  for (const row of data.frames[0])
    if (row) {
      assert.ok(row[0] >= 0 && row[0] + row[1].length <= data.columns);
      assert.match(row[1], /^[ 1-6]+$/);
    }
});

test('static footer JSON decodes through the existing contract in all three modes', async () => {
  const dataSource = readFileSync(
    new URL('../src/components/ascii/render-ascii-data.ts', import.meta.url),
    'utf8',
  );
  const javascript = ts.transpileModule(dataSource, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 },
  }).outputText;
  const { decodeFrames } = await import(
    `data:text/javascript;base64,${Buffer.from(javascript).toString('base64')}`
  );
  const registry = readFileSync(
    new URL('../src/components/ascii/render-ascii-variants.ts', import.meta.url),
    'utf8',
  );
  const config = JSON.parse(
    registry.match(/export const renderAsciiVariants = ([\s\S]*?) as const satisfies/)[1],
  )['paragan-wordmark'];
  const json = JSON.parse(
    readFileSync(new URL('../public/ascii/paragan-wordmark.json', import.meta.url), 'utf8'),
  );
  for (const model of ['halftone', 'pixels', 'ascii']) {
    const decoded = decodeFrames(json, config, model);
    assert.equal(decoded.frames.length, 1);
    assert.equal(decoded.columns, json.columns);
    assert.equal(decoded.rows, model === 'ascii' ? config.rows : json.rows);
    assert.equal(decoded.frames[0].length, decoded.columns * decoded.rows);
    assert.ok(decoded.frames[0].some((level) => level > 0));
  }
});
