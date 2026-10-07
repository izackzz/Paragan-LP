import {
  CELL_WIDTH, DOT_TEXTURE_SIZE, gridLayout,
  type AnimationRenderer, type DecodedAnimation, type RenderFit,
} from './render-ascii-data';
import type { AsciiVariant } from './render-ascii-variants';

export async function createAsciiRenderer(
  data: DecodedAnimation, config: AsciiVariant, fit: RenderFit,
): Promise<AnimationRenderer> {
  const PIXI = await import('pixi.js');
  const app = new PIXI.Application();
  await app.init({
    width: 1, height: 1, autoStart: false, sharedTicker: false, autoDensity: true,
    resolution: window.devicePixelRatio || 1, backgroundAlpha: 0, preference: 'webgl',
    powerPreference: 'low-power', antialias: false,
  });
  const atlas = document.createElement('canvas');
  const atlasScale = Math.max(2, Math.ceil(window.devicePixelRatio || 1));
  atlas.width = CELL_WIDTH * config.ramp.length * atlasScale;
  atlas.height = DOT_TEXTURE_SIZE * atlasScale;
  const context = atlas.getContext('2d');
  if (!context) {
    app.destroy({ removeView: true }, { children: true });
    throw new Error('Canvas 2D unavailable');
  }
  context.scale(atlasScale, atlasScale);
  context.fillStyle = '#ffffff';
  context.font = '16px monospace';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  [...config.ramp].forEach((char, index) => {
    if (index) context.fillText(char, (index + 0.5) * CELL_WIDTH, DOT_TEXTURE_SIZE / 2);
  });
  const atlasTexture = PIXI.Texture.from(atlas);
  const textures = [...config.ramp].map((_, index) => new PIXI.Texture({
    source: atlasTexture.source,
    frame: new PIXI.Rectangle(index * CELL_WIDTH * atlasScale, 0,
      CELL_WIDTH * atlasScale, DOT_TEXTURE_SIZE * atlasScale),
  }));
  const glyphs = new PIXI.Container();
  glyphs.eventMode = 'none';
  app.stage.addChild(glyphs);
  const { columns, rows, frames } = data;
  const { gridWidth, gridHeight, cellWidth, cellHeight, spriteWidth, spriteHeight } =
    gridLayout(columns, rows, config.aspect, 'ascii');
  const occupied = new Uint8Array(columns * rows);
  for (const cells of frames) cells.forEach((level, index) => { if (level) occupied[index] = 1; });
  const sprites = Array.from(occupied.keys()).filter((index) => occupied[index]).map((index) => {
    const sprite = new PIXI.Sprite(textures[0]);
    sprite.width = spriteWidth; sprite.height = spriteHeight;
    sprite.position.set((index % columns) * cellWidth + (cellWidth - spriteWidth) / 2,
      Math.floor(index / columns) * cellHeight + (cellHeight - spriteHeight) / 2);
    glyphs.addChild(sprite);
    return { sprite, index };
  });
  let paintedFrame = -1;
  return {
    canvas: app.canvas,
    draw(frame) {
      if (paintedFrame !== frame) {
        const cells = frames[frame];
        sprites.forEach(({ sprite, index }) => {
          sprite.visible = cells[index] !== 0;
          if (sprite.texture !== textures[cells[index]]) sprite.texture = textures[cells[index]];
        });
        paintedFrame = frame;
      }
      app.render();
    },
    resize(width, height, dpr) {
      app.renderer.resize(width, height, dpr);
      const scale = fit === 'cover' ? Math.max(width / gridWidth, height / gridHeight)
        : Math.min(width / gridWidth, height / gridHeight);
      glyphs.scale.set(scale);
      glyphs.position.set((width - gridWidth * scale) / 2, (height - gridHeight * scale) / 2);
    },
    setTint(red, green, blue) { glyphs.tint = (red << 16) | (green << 8) | blue; },
    destroy() {
      app.destroy({ removeView: true }, { children: true });
      textures.forEach((texture) => texture.destroy());
      atlasTexture.destroy(true);
    },
  };
}
