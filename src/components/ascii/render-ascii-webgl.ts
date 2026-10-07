import {
  cellProfile,
  fittedBox,
  type AnimationRenderer,
  type DecodedAnimation,
  type RenderFit,
} from './render-ascii-data';

const vertex = `
attribute vec2 aPosition;
void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }
`;

const fragment = `
precision highp float;
uniform sampler2D uFrame;
uniform vec2 uViewport;
uniform vec4 uContent;
uniform float uDpr;
uniform float uPitch;
uniform float uSize;
uniform float uPixels;
uniform vec3 uTint;
void main() {
  vec2 pixel = vec2(gl_FragCoord.x / uDpr, uViewport.y - gl_FragCoord.y / uDpr);
  vec2 count = ceil(uContent.zw / uPitch);
  vec2 origin = uContent.xy + (uContent.zw - count * uPitch) * 0.5;
  vec2 center = origin + (floor((pixel - origin) / uPitch) + 0.5) * uPitch;
  vec2 uv = (center - uContent.xy) / uContent.zw;
  if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) {
    gl_FragColor = vec4(0.0);
    return;
  }
  // Bilinear reconstruction adds display cells, not invented source detail.
  float level = floor(texture2D(uFrame, uv).r * 255.0 + 0.5);
  if (level < 0.5) { gl_FragColor = vec4(0.0); return; }
  float intensity = min(level / 6.0, 1.0);
  vec2 delta = abs(pixel - center);
  float distance = uPixels > 0.5 ? max(delta.x, delta.y) : length(delta);
  float radius = uSize * 0.5 * (uPixels > 0.5 ? 1.0 : sqrt(intensity));
  float aa = 0.5 / uDpr;
  float alpha = (1.0 - smoothstep(radius - aa, radius + aa, distance))
    * (uPixels > 0.5 ? intensity : 0.25 + 0.75 * intensity);
  gl_FragColor = vec4(uTint * alpha, alpha);
}
`;

// One full-canvas draw call. Grid density is computed in the fragment shader:
// no growing sprite pool, per-resize frame copies, or per-cell CPU animation.
export function createGridRenderer(
  data: DecodedAnimation,
  aspect: string,
  model: 'halftone' | 'pixels',
  fit: RenderFit,
  cellSize?: number,
): AnimationRenderer {
  const profile = cellProfile(model, cellSize);
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl', {
    alpha: true, antialias: false, premultipliedAlpha: true,
    depth: false, stencil: false, preserveDrawingBuffer: false,
    powerPreference: 'low-power',
  });
  if (!gl) throw new Error('WebGL is unavailable');
  let program: WebGLProgram | null = null;
  let buffer: WebGLBuffer | null = null;
  let texture: WebGLTexture | null = null;
  let uniforms: Record<string, WebGLUniformLocation | null> = {};
  let currentFrame = -1;
  let uploadedFrame = -1;
  let width = 1, height = 1, dpr = 1;
  let tint = [1, 1, 1];
  let destroyed = false;

  const shader = (type: number, source: string) => {
    const compiled = gl.createShader(type);
    if (!compiled) throw new Error('Could not allocate grid shader');
    gl.shaderSource(compiled, source);
    gl.compileShader(compiled);
    if (!gl.getShaderParameter(compiled, gl.COMPILE_STATUS)) {
      const error = gl.getShaderInfoLog(compiled);
      gl.deleteShader(compiled);
      throw new Error(`Could not compile grid shader: ${error}`);
    }
    return compiled;
  };

  const release = () => {
    gl.deleteTexture(texture);
    gl.deleteBuffer(buffer);
    gl.deleteProgram(program);
  };
  const initialize = () => {
    program = gl.createProgram();
    if (!program) throw new Error('Could not allocate grid program');
    const vertexShader = shader(gl.VERTEX_SHADER, vertex);
    const fragmentShader = shader(gl.FRAGMENT_SHADER, fragment);
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(`Could not link grid shader: ${gl.getProgramInfoLog(program)}`);
    }
    gl.useProgram(program);
    buffer = gl.createBuffer();
    texture = gl.createTexture();
    if (!buffer || !texture) throw new Error('Could not allocate grid buffers');
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, data.columns, data.rows, 0,
      gl.LUMINANCE, gl.UNSIGNED_BYTE, null);
    uniforms = Object.fromEntries(['uFrame', 'uViewport', 'uContent', 'uDpr', 'uPitch', 'uSize', 'uPixels', 'uTint']
      .map((name) => [name, gl.getUniformLocation(program, name)]));
    gl.uniform1i(uniforms.uFrame, 0);
    gl.uniform1f(uniforms.uPitch, profile.pitch);
    gl.uniform1f(uniforms.uSize, profile.size);
    gl.uniform1f(uniforms.uPixels, model === 'pixels' ? 1 : 0);
    uploadedFrame = -1;
  };

  const draw = (frame: number) => {
    currentFrame = frame;
    if (destroyed || gl.isContextLost()) return;
    gl.useProgram(program);
    if (uploadedFrame !== frame) {
      gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, data.columns, data.rows,
        gl.LUMINANCE, gl.UNSIGNED_BYTE, data.frames[frame]);
      uploadedFrame = frame;
    }
    const box = fittedBox(width, height, aspect, fit);
    gl.uniform2f(uniforms.uViewport, width, height);
    gl.uniform4f(uniforms.uContent, box.x, box.y, box.width, box.height);
    gl.uniform1f(uniforms.uDpr, dpr);
    gl.uniform3f(uniforms.uTint, tint[0], tint[1], tint[2]);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };
  const resize = (nextWidth: number, nextHeight: number, nextDpr: number) => {
    width = nextWidth; height = nextHeight; dpr = nextDpr;
    canvas.width = Math.max(1, Math.round(width * dpr));
    canvas.height = Math.max(1, Math.round(height * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
  };
  const onLost = (event: Event) => event.preventDefault();
  const onRestored = () => {
    if (destroyed) return;
    initialize();
    resize(width, height, dpr);
    if (currentFrame >= 0) draw(currentFrame);
  };
  canvas.addEventListener('webglcontextlost', onLost);
  canvas.addEventListener('webglcontextrestored', onRestored);
  try { initialize(); } catch (error) { release(); throw error; }
  return {
    canvas, draw, resize,
    setTint(red, green, blue) { tint = [red / 255, green / 255, blue / 255]; },
    destroy() {
      destroyed = true;
      canvas.removeEventListener('webglcontextlost', onLost);
      canvas.removeEventListener('webglcontextrestored', onRestored);
      release();
      canvas.remove();
    },
  };
}
