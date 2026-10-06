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
    camera.position.set(0, 1.25, 4);
    camera.lookAt(0, 0, 0);

    const tilt = THREE.MathUtils.degToRad(23.5);
    const axis = new THREE.Group();
    axis.rotation.z = -tilt;
    scene.add(axis);
    const globe = new THREE.Group();
    axis.add(globe);

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
    const lineMaterial = new LineMaterial({
      linewidth: 1,
      worldUnits: false,
      depthWrite: false,
    });
    const lines = new LineSegments2(lineGeometry, lineMaterial);
    globe.add(lines);

    // The sphere's depth separates the faint rear grid from the visible front grid.
    const rearMaterial = new LineMaterial({
      linewidth: 1,
      worldUnits: false,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
      depthFunc: THREE.GreaterDepth,
    });
    const rearLines = new LineSegments2(lineGeometry, rearMaterial);
    rearLines.renderOrder = 1;
    globe.add(rearLines);

    let activePointer: number | null = null;
    let previousX = 0;
    let previousY = 0;
    const pointerDown = (event: PointerEvent) => {
      if (activePointer !== null || !event.isPrimary || event.button !== 0) return;
      activePointer = event.pointerId;
      previousX = event.clientX;
      previousY = event.clientY;
      container.setPointerCapture(event.pointerId);
      container.style.cursor = 'grabbing';
    };
    const pointerMove = (event: PointerEvent) => {
      if (event.pointerId !== activePointer) return;
      const distance =
        (event.clientX - previousX) * Math.cos(tilt) +
        (event.clientY - previousY) * Math.sin(tilt);
      globe.rotation.y += (distance / Math.max(container.clientWidth, 1)) * Math.PI * 2;
      previousX = event.clientX;
      previousY = event.clientY;
    };
    const pointerEnd = (event: PointerEvent) => {
      if (event.pointerId !== activePointer) return;
      activePointer = null;
      container.style.cursor = '';
      if (container.hasPointerCapture(event.pointerId)) {
        container.releasePointerCapture(event.pointerId);
      }
    };
    container.addEventListener('pointerdown', pointerDown);
    container.addEventListener('pointermove', pointerMove);
    container.addEventListener('pointerup', pointerEnd);
    container.addEventListener('pointercancel', pointerEnd);
    container.addEventListener('lostpointercapture', pointerEnd);

    let previousTime: number | null = null;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    renderer.setAnimationLoop((time) => {
      const delta = previousTime === null ? 0 : Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;
      if (activePointer === null && !reducedMotion.matches) {
        // Positive local-Y rotation is counterclockwise when viewed from the north pole.
        globe.rotation.y += delta * 0.08;
      }
      renderer.render(scene, camera);
    });

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
        rearMaterial.color.copy(lineMaterial.color);
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
      renderer.setAnimationLoop(null);
      container.removeEventListener('pointerdown', pointerDown);
      container.removeEventListener('pointermove', pointerMove);
      container.removeEventListener('pointerup', pointerEnd);
      container.removeEventListener('pointercancel', pointerEnd);
      container.removeEventListener('lostpointercapture', pointerEnd);
      if (activePointer !== null && container.hasPointerCapture(activePointer)) {
        container.releasePointerCapture(activePointer);
      }
      container.style.cursor = '';
      resizeObserver.disconnect();
      themeObserver.disconnect();
      colorScheme.removeEventListener('change', render);
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      rearMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <main className="grid min-h-svh place-items-center overflow-hidden bg-background p-4 text-foreground">
      <div
        ref={containerRef}
        role="img"
        aria-label="Globo inclinado a 23,5 graus com linhas de latitude e longitude; arraste para girar"
        className="aspect-square w-full max-w-[min(90svh,800px)] cursor-grab touch-none select-none"
      />
    </main>
  );
}
