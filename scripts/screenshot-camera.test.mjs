import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const source = readFileSync(
  new URL('../src/components/landing/screenshot-camera.ts', import.meta.url),
  'utf8',
);
const compiled = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 },
}).outputText;
const { screenshotCamera, SCREENSHOT_TOUR_DURATION: duration } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`
);

test('the tour visits all four corners without returning to an unzoomed overview', () => {
  const corners = Array.from({ length: 4 }, (_, i) => screenshotCamera((i * duration) / 4));
  assert(corners[0].x < 0.02 && corners[0].y < 0.02);
  assert(corners[1].x > 0.98 && corners[1].y < 0.02);
  assert(corners[2].x > 0.98 && corners[2].y > 0.98);
  assert(corners[3].x < 0.02 && corners[3].y > 0.98);
});

test('desktop and mobile stay completely filled, including the new checkout ratio', () => {
  for (const ratio of [2750 / 2450, 4096 / 2379]) {
    for (const [width, height, mobile] of [
      [1280, 720, false],
      [768, 432, false],
      [375, 500, true],
    ]) {
      const imageWidth = mobile ? height * ratio : width;
      const imageHeight = mobile ? height : width / ratio;
      for (let t = 0; t <= duration; t += 16) {
        const { x, y, zoom } = screenshotCamera(t);
        const left = x * (width - imageWidth * zoom);
        const top = y * (height - imageHeight * zoom);
        assert(zoom >= 1.8 - 1e-10 && zoom <= 1.96 + 1e-10);
        assert(left <= 1e-8 && top <= 1e-8);
        assert(left + imageWidth * zoom >= width - 1e-8);
        assert(top + imageHeight * zoom >= height - 1e-8);
      }
    }
  }
});

test('the loop is position/velocity continuous and pans faster between details', () => {
  const speed = (t) => {
    const a = screenshotCamera(t);
    const b = screenshotCamera(t + 1);
    return Math.hypot(b.x - a.x, b.y - a.y);
  };
  assert.deepEqual(screenshotCamera(0), screenshotCamera(duration));
  assert(Math.abs(speed(duration - 1) - speed(0)) < 1e-6);
  assert(speed(duration / 8) > speed(0) * 10);
  for (let t = 0; t < duration; t += 16) {
    assert(speed(t) > 1e-8, `Unexpected stop at ${t}ms`);
  }
});

test('all Next images request quality 100 and the optimizer only allows 100', () => {
  for (const file of [
    'primitives.tsx',
    'sections/hero-section.tsx',
    'sections/checkout-section.tsx',
  ]) {
    const component = readFileSync(
      new URL(`../src/components/landing/${file}`, import.meta.url),
      'utf8',
    );
    assert(component.includes('quality={100}'));
  }
  const config = readFileSync(new URL('../next.config.ts', import.meta.url), 'utf8');
  assert(config.includes('qualities: [100]'));
});

test('the 2750×2450 checkout source is displayed in a 16:9 desktop viewport', () => {
  const png = readFileSync(new URL('../public/assets/screenshots/checkout.png', import.meta.url));
  assert.equal(png.readUInt32BE(16), 2750);
  assert.equal(png.readUInt32BE(20), 2450);
  const assets = readFileSync(new URL('../src/config/illustrations.ts', import.meta.url), 'utf8');
  assert(assets.includes("checkoutJourney: asset('19', 2750, 2450,"));
  const checkout = readFileSync(
    new URL('../src/components/landing/sections/checkout-section.tsx', import.meta.url),
    'utf8',
  );
  assert(checkout.includes('viewportRatio="16 / 9"'));
});
