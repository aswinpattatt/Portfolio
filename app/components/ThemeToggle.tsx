"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-8 w-8" />;
  }

  const isDark = theme === "dark";

  const handleToggle = () => {
    const next = isDark ? "light" : "dark";

    // Fallback for browsers that don't support View Transitions.
    if (!document.startViewTransition || !btnRef.current) {
      setTheme(next);
      return;
    }

    const button = btnRef.current;
    const rect = button.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.style.setProperty(
      "--theme-toggle-x",
      `${x}px`
    );

    document.documentElement.style.setProperty(
      "--theme-toggle-y",
      `${y}px`
    );

    document.documentElement.style.setProperty(
      "--theme-toggle-radius",
      `${radius}px`
    );

    document.startViewTransition(() => {
      setTheme(next);
    });
  };

  return (
    <button
      ref={btnRef}
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="relative flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 hover:border-accent transition-colors"
    >
      <span className="text-sm">{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}