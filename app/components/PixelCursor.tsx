"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Sparkle = {
  id: number;
  x: number;
  y: number;
};

const INTERVAL_MS = 600;

export default function PixelCursor() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const posRef = useRef({ x: 0, y: 0 });
  const idRef = useRef(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", move);

    const interval = setInterval(() => {
      const id = idRef.current++;
      setSparkles((prev) => [
        ...prev,
        { id, x: posRef.current.x, y: posRef.current.y },
      ]);
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, 700);
    }, INTERVAL_MS);

    return () => {
      window.removeEventListener("mousemove", move);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.span
            key={s.id}
            initial={{ opacity: 1, scale: 0.4 }}
            animate={{ opacity: 0, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute h-1.5 w-1.5"
            style={{
              left: s.x,
              top: s.y,
              backgroundColor: "var(--accent)",
              transform: "translate(-50%, -50%) rotate(45deg)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}