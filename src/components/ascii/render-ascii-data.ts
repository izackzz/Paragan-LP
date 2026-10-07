import type { AsciiVariant } from './render-ascii-variants';

export const FRAME_RAMP = ' 123456';
export const CELL_WIDTH = 10;
export const DOT_TEXTURE_SIZE = 20;
export type RenderModel = 'ascii' | 'halftone' | 'pixels';
export type RenderFit = 'contain' | 'cover';
export interface DecodedAnimation {
  columns: number;
  rows: number;
  frames: Uint8Array[];
}
export interface AnimationRenderer {
  canvas: HTMLCanvasElement;
  draw(frame: number): void;
  resize(width: number, height: number, dpr: number): void;
  setTint(red: number, green: number, blue: number): void;
  destroy(): void;
}

export function fittedBox(width: number, height: number, aspect: string, fit: RenderFit) {
  const [aspectWidth, aspectHeight] = aspect.split('/').map(Number);
  const ratio = aspectWidth / aspectHeight;
  const scale = fit === 'cover' ? Math.max(width / ratio, height) : Math.min(width / ratio, height);
  const contentWidth = scale * ratio;
  return {
    x: (width - contentWidth) / 2,
    y: (height - scale) / 2,
    width: contentWidth,
    height: scale,
  };
}

export function cellProfile(model: 'halftone' | 'pixels', cellSize?: number) {
  const pitch = cellSize ?? (model === 'pixels' ? 8 : 6);
  if (!Number.isFinite(pitch) || pitch < 2)
    throw new Error('Cell size must be at least 2 CSS pixels');
  const size = pitch * (model === 'pixels' ? 0.75 : 0.5);
  return { pitch, size, gap: pitch - size };
}

export function adaptiveGrid(
  width: number,
  height: number,
  aspect: string,
  fit: RenderFit,
  pitch: number,
) {
  const box = fittedBox(width, height, aspect, fit);
  return { ...box, columns: Math.ceil(box.width / pitch), rows: Math.ceil(box.height / pitch) };
}

interface FrameGrid {
  version: 2;
  encoding: 'trimmed-rows';
  columns: number;
  rows: number;
  frames: unknown[];
}

// Precompute area weights once, not per frame. This preserves the image ratio
// when the square sample grid is displayed using taller monospace cells.
function rowWeights(sourceRows: number, targetRows: number) {
  return Array.from({ length: targetRows }, (_, row) => {
    const start = (row * sourceRows) / targetRows;
    const end = ((row + 1) * sourceRows) / targetRows;
    const weights: { row: number; weight: number }[] = [];
    for (let source = Math.floor(start); source < Math.ceil(end); source++) {
      weights.push({
        row: source,
        weight: (Math.min(source + 1, end) - Math.max(source, start)) / (end - start),
      });
    }
    return weights;
  });
}

export function decodeFrames(value: unknown, config: AsciiVariant, model: RenderModel) {
  const legacy = Array.isArray(value);
  const grid = (
    legacy ? { columns: config.columns, rows: config.rows, frames: value } : value
  ) as FrameGrid;
  if (
    !grid ||
    (!legacy && (grid.version !== 2 || grid.encoding !== 'trimmed-rows')) ||
    !Number.isSafeInteger(grid.columns) ||
    !Number.isSafeInteger(grid.rows) ||
    grid.columns !== config.columns ||
    grid.rows <= 0 ||
    config.ramp.length !== FRAME_RAMP.length ||
    !Array.isArray(grid.frames) ||
    !grid.frames.length
  )
    throw new Error('Invalid animation metadata');
  const [aspectWidth, aspectHeight] = config.aspect.split('/').map(Number);
  const squareRows = Math.round((grid.columns * aspectHeight) / aspectWidth);
  if (!legacy && grid.rows !== squareRows) throw new Error('Invalid square sample grid');
  const rows = model === 'ascii' ? config.rows : squareRows;
  const weights = rows === grid.rows ? null : rowWeights(grid.rows, rows);
  const frames = grid.frames.map((frame) => {
    const levels = new Uint8Array(grid.columns * grid.rows);
    if (legacy) {
      if (typeof frame !== 'string') throw new Error('Invalid legacy frame');
      const lines = frame.split('\n');
      if (lines.length !== grid.rows || lines.some((line) => line.length !== grid.columns)) {
        throw new Error('Invalid legacy frame dimensions');
      }
      const flat = frame.replaceAll('\n', '');
      for (let index = 0; index < flat.length; index++) {
        const level = config.ramp.indexOf(flat[index]);
        if (level < 0) throw new Error('Invalid legacy intensity');
        levels[index] = level;
      }
    } else {
      if (!Array.isArray(frame) || frame.length !== grid.rows) {
        throw new Error('Invalid frame dimensions');
      }
      frame.forEach((row, y) => {
        if (row === null) return;
        if (
          !Array.isArray(row) ||
          row.length !== 2 ||
          !Number.isSafeInteger(row[0]) ||
          row[0] < 0 ||
          typeof row[1] !== 'string' ||
          !row[1].length ||
          row[0] + row[1].length > grid.columns
        )
          throw new Error('Invalid packed row');
        for (let x = 0; x < row[1].length; x++) {
          const code = row[1].charCodeAt(x);
          if (code !== 32 && (code < 49 || code > 54)) {
            throw new Error('Invalid animation intensity');
          }
          levels[y * grid.columns + row[0] + x] = code === 32 ? 0 : code - 48;
        }
      });
    }
    if (!weights) return levels;
    const sampled = new Uint8Array(grid.columns * rows);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < grid.columns; x++) {
        let level = 0;
        for (const source of weights[y])
          level += levels[source.row * grid.columns + x] * source.weight;
        sampled[y * grid.columns + x] = Math.min(6, Math.ceil(level - 1e-9));
      }
    }
    return sampled;
  });
  return { columns: grid.columns, rows, frames };
}

export function gridLayout(columns: number, rows: number, aspect: string, model: RenderModel) {
  const [aspectWidth, aspectHeight] = aspect.split('/').map(Number);
  const gridWidth = columns * CELL_WIDTH;
  // ASCII preserves its existing 1:2 font metrics. Halftone never stretches cells.
  const gridHeight =
    model === 'ascii' ? (gridWidth * aspectHeight) / aspectWidth : rows * CELL_WIDTH;
  const cellHeight = gridHeight / rows;
  const characterScale = Math.min(1, cellHeight / DOT_TEXTURE_SIZE);
  return {
    gridWidth,
    gridHeight,
    cellWidth: CELL_WIDTH,
    cellHeight,
    // Largest dot diameter = 1x; center spacing = 2x; minimum clear gap = 1x.
    spriteWidth: model === 'ascii' ? CELL_WIDTH * characterScale : CELL_WIDTH / 2,
    spriteHeight: model === 'ascii' ? DOT_TEXTURE_SIZE * characterScale : CELL_WIDTH / 2,
  };
}
