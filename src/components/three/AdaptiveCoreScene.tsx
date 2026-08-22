import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type AdaptiveCoreSceneProps = {
  className?: string;
};

/**
 * The hero's 3D "adaptive core": a faceted knowledge core wrapped in two
 * learning-path rings and a shell of level nodes. Pointer movement tilts the
 * whole assembly so the depth reads as real rather than decorative.
 */
export function AdaptiveCoreScene({ className = '' }: AdaptiveCoreSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.3, 8.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    const disposables: Array<{dispose: () => void;}> = [];
    const root = new THREE.Group();
    scene.add(root);

    // --- core -------------------------------------------------------------
    const coreGeometry = new THREE.IcosahedronGeometry(1.75, 0);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x282140,
      roughness: 0.32,
      metalness: 0.12,
      flatShading: true
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    root.add(core);
    disposables.push(coreGeometry, coreMaterial);

    const edgeGeometry = new THREE.EdgesGeometry(coreGeometry);
    const edgeMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.45
    });
    const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    core.add(edges);
    disposables.push(edgeGeometry, edgeMaterial);

    // --- learning-path rings ---------------------------------------------
    const ringConfigs: Array<{radius: number;color: number;rotation: [number, number, number];}> = [
    { radius: 2.85, color: 0xD5EF74, rotation: [Math.PI / 2.2, 0.2, 0] },
    { radius: 3.5, color: 0xFF9D84, rotation: [Math.PI / 1.7, 0, Math.PI / 5] }];

    const rings = ringConfigs.map(({ radius, color, rotation }) => {
      const geometry = new THREE.TorusGeometry(radius, 0.018, 12, 160);
      const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5 });
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.set(rotation[0], rotation[1], rotation[2]);
      root.add(ring);
      disposables.push(geometry, material);
      return ring;
    });

    // --- level nodes on a fibonacci shell ---------------------------------
    const nodeCount = 18;
    const nodeGeometry = new THREE.SphereGeometry(0.115, 20, 20);
    const nodeMaterials = [
    new THREE.MeshStandardMaterial({ color: 0xD5EF74, roughness: 0.3, metalness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0xFF9D84, roughness: 0.3, metalness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x9EDBD3, roughness: 0.5, metalness: 0 })];

    disposables.push(nodeGeometry, ...nodeMaterials);

    const nodes: Array<{mesh: THREE.Mesh;base: THREE.Vector3;phase: number;}> = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < nodeCount; i += 1) {
      const y = 1 - i / (nodeCount - 1) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = golden * i;
      const shell = 3.05;
      const base = new THREE.Vector3(
        Math.cos(theta) * radiusAtY * shell,
        y * shell * 0.72,
        Math.sin(theta) * radiusAtY * shell
      );
      const mesh = new THREE.Mesh(nodeGeometry, nodeMaterials[i % nodeMaterials.length]);
      mesh.position.copy(base);
      const scale = 0.7 + i % 4 * 0.22;
      mesh.scale.setScalar(scale);
      root.add(mesh);
      nodes.push({ mesh, base, phase: i * 0.7 });
    }

    // --- lighting ---------------------------------------------------------
    const ambient = new THREE.AmbientLight(0xffffff, 0.85);
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    keyLight.position.set(4, 6, 6);
    const rimLight = new THREE.PointLight(0xFF9D84, 28, 22);
    rimLight.position.set(-5, -2.5, 3);
    const fillLight = new THREE.PointLight(0xD5EF74, 22, 20);
    fillLight.position.set(4, -3, -4);
    scene.add(ambient, keyLight, rimLight, fillLight);

    // --- interaction ------------------------------------------------------
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const handlePointerLeave = () => {
      target.x = 0;
      target.y = 0;
    };
    window.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerleave', handlePointerLeave);

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      if (!clientWidth || !clientHeight) return;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    let frame = 0;
    let running = true;
    const clock = new THREE.Clock();

    const render = () => {
      if (!running) return;
      frame = requestAnimationFrame(render);
      const elapsed = clock.getElapsedTime();

      pointer.x += (target.x - pointer.x) * 0.06;
      pointer.y += (target.y - pointer.y) * 0.06;

      if (!reduceMotion) {
        root.rotation.y = elapsed * 0.18 + pointer.x * 0.45;
        root.rotation.x = Math.sin(elapsed * 0.22) * 0.07 + pointer.y * 0.28;
        core.rotation.y = elapsed * 0.24;
        core.rotation.x = elapsed * 0.12;
        rings[0].rotation.z = elapsed * 0.25;
        rings[1].rotation.z = -elapsed * 0.18;
        nodes.forEach(({ mesh, base, phase }) => {
          const bob = Math.sin(elapsed * 0.9 + phase) * 0.14;
          mesh.position.set(base.x, base.y + bob, base.z);
        });
      } else {
        root.rotation.y = 0.55 + pointer.x * 0.2;
        root.rotation.x = -0.12 + pointer.y * 0.12;
      }

      renderer.render(scene, camera);
    };
    render();

    const handleVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else if (!running) {
        running = true;
        render();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
      disposables.forEach((item) => item.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" className={className} />;
}