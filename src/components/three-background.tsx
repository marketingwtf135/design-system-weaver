import { useEffect, useRef } from "react";

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    let cancelled = false;

    async function init() {
      try {
        const THREE = await import("three");
        if (cancelled || !containerRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.z = 4;

        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // Torus knot geometry — signature Axevil visual
        const geometry = new THREE.TorusKnotGeometry(1.5, 0.4, 200, 32);
        const material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          wireframe: true,
          transparent: true,
          opacity: 0.03,
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        let animationId: number;

        function animate() {
          animationId = requestAnimationFrame(animate);
          mesh.rotation.x += 0.001;
          mesh.rotation.y += 0.002;
          renderer.render(scene, camera);
        }
        animate();

        function handleResize() {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener("resize", handleResize);

        cleanupRef.current = () => {
          cancelAnimationFrame(animationId);
          window.removeEventListener("resize", handleResize);
          renderer.dispose();
          geometry.dispose();
          material.dispose();
          if (containerRef.current?.contains(renderer.domElement)) {
            containerRef.current.removeChild(renderer.domElement);
          }
        };
      } catch {
        // Three.js failed to load — degrade gracefully with no background
      }
    }

    init();

    return () => {
      cancelled = true;
      cleanupRef.current?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60"
      aria-hidden="true"
    />
  );
}
