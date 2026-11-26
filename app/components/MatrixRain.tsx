"use client";

import { useEffect, useRef } from "react";

const CONTENT_WIDTH = 1024; // matches max-w-5xl in layout
const FONT_SIZE = 16;
const TRAIL = 14;
const FRAME_MS = 70;
const CHARS = "0123456789";

type Column = { x: number; head: number; speed: number };

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let sideW = 0;
    let columns: Column[] = [];
    let accent = "45, 212, 191";
    let raf = 0;
    let last = 0;

    const readAccent = () => {
      const c = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim();
      const m = /^#([0-9a-f]{6})/i.exec(c);
      if (m) {
        const n = parseInt(m[1], 16);
        accent = `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
      }
    };

    const makeColumns = () => {
      columns = [];
      const rows = Math.ceil(h / FONT_SIZE);
      const add = (startX: number) => {
        const count = Math.floor(sideW / FONT_SIZE);
        for (let i = 0; i < count; i++) {
          columns.push({
            x: startX + i * FONT_SIZE,
            head: Math.floor(Math.random() * rows),
            speed: 0.5 + Math.random() * 0.9,
          });
        }
      };
      add(0);
      add(w - count(sideW) * FONT_SIZE);
    };

    const count = (width: number) => Math.floor(width / FONT_SIZE);

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Gutter beside the centred content; keep a thin strip on small screens.
      sideW = Math.max(24, (w - CONTENT_WIDTH) / 2 - 8);
      makeColumns();
      readAccent();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${FONT_SIZE}px var(--font-mono), monospace`;
      ctx.textBaseline = "top";
      const rows = Math.ceil(h / FONT_SIZE);

      for (const col of columns) {
        // Fade out toward the centre of the page.
        const distFromEdge = Math.min(col.x, w - col.x - FONT_SIZE);
        const edgeFade = 1 - (distFromEdge / sideW) * 0.7;

        for (let t = 0; t < TRAIL; t++) {
          const row = Math.floor(col.head) - t;
          if (row < 0 || row > rows) continue;
          const alpha = (1 - t / TRAIL) * 0.35 * edgeFade;
          ctx.fillStyle =
            t === 0
              ? `rgba(${accent}, ${Math.min(0.8, alpha * 2)})`
              : `rgba(${accent}, ${alpha})`;
          ctx.fillText(
            CHARS[Math.floor(Math.random() * CHARS.length)],
            col.x,
            row * FONT_SIZE
          );
        }
      }
    };

    const step = () => {
      for (const col of columns) {
        col.head += col.speed;
        if (col.head * FONT_SIZE - TRAIL * FONT_SIZE > h) {
          col.head = -Math.floor(Math.random() * 20);
          col.speed = 0.5 + Math.random() * 0.9;
        }
      }
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (now - last < FRAME_MS) return;
      last = now;
      step();
      draw();
    };

    resize();
    window.addEventListener("resize", resize);

    // Re-read accent colour when the theme changes.
    const observer = new MutationObserver(readAccent);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    if (reduceMotion) {
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
