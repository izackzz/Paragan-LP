'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

export default function GlobePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.display = 'block';
    renderer.domElement.setAttribute('aria-hidden', 'true');
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1.06, 1.06, 1.06, -1.06, 0.1, 10);
    camera.position.set(0, 0, 4);

    const globe = new THREE.Group();
    globe.rotation.set(THREE.MathUtils.degToRad(18), 0, THREE.MathUtils.degToRad(-8));
    scene.add(globe);

    // Depth-only surface hides the far hemisphere without adding a fill color.
    const sphereGeometry = new THREE.SphereGeometry(1, 128, 96);
    const sphereMaterial = new THREE.MeshBasicMaterial({ colorWrite: false });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.renderOrder = -1;
    globe.add(sphere);

    const positions: number[] = [];
    const radius = 1.0005;
    const segments = 256;
    const addCircle = (point: (angle: number) => number[]) => {
      for (let segment = 0; segment < segments; segment++) {
        positions.push(
          ...point((segment / segments) * Math.PI * 2),
          ...point(((segment + 1) / segments) * Math.PI * 2),
        );
      }
    };

    // Twelve great circles form twenty-four meridians, spaced at fifteen degrees.
    for (let meridian = 0; meridian < 12; meridian++) {
      const longitude = (meridian / 12) * Math.PI;
      addCircle((angle) => [
        radius * Math.sin(angle) * Math.cos(longitude),
        radius * Math.cos(angle),
        radius * Math.sin(angle) * Math.sin(longitude),
      ]);
    }

    for (let latitude = -75; latitude <= 75; latitude += 15) {
      const angle = THREE.MathUtils.degToRad(latitude);
      const ringRadius = radius * Math.cos(angle);
      addCircle((longitude) => [
        ringRadius * Math.cos(longitude),
        radius * Math.sin(angle),
        ringRadius * Math.sin(longitude),
      ]);
    }

    const lineGeometry = new LineSegmentsGeometry();
    lineGeometry.setPositions(positions);
    const lineMaterial = new LineMaterial({ linewidth: 1, worldUnits: false });
    const lines = new LineSegments2(lineGeometry, lineMaterial);
    globe.add(lines);

    // Resolve CSS colors through Canvas so theme tokens can use oklch as well as rgb.
    const colorCanvas = document.createElement('canvas');
    colorCanvas.width = colorCanvas.height = 1;
    const colorContext = colorCanvas.getContext('2d', { willReadFrequently: true });
    const render = () => {
      if (colorContext) {
        colorContext.clearRect(0, 0, 1, 1);
        colorContext.fillStyle = getComputedStyle(container).color;
        colorContext.fillRect(0, 0, 1, 1);
        const [red, green, blue] = colorContext.getImageData(0, 0, 1, 1).data;
        lineMaterial.color.setRGB(red / 255, green / 255, blue / 255, THREE.SRGBColorSpace);
      }
      renderer.render(scene, camera);
    };

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      render();
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const themeObserver = new MutationObserver(render);
    for (let element: HTMLElement | null = container; element; element = element.parentElement) {
      themeObserver.observe(element, {
        attributes: true,
        attributeFilter: ['class', 'style', 'data-theme'],
      });
    }
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    colorScheme.addEventListener('change', render);
    resize();

    return () => {
      resizeObserver.disconnect();
      themeObserver.disconnect();
      colorScheme.removeEventListener('change', render);
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <main className="grid min-h-svh place-items-center overflow-hidden bg-background p-4 text-foreground">
      <div
        ref={containerRef}
        role="img"
        aria-label="Globo com linhas de latitude e longitude"
        className="aspect-square w-full max-w-[min(90svh,800px)]"
      />
    </main>
  );
}
