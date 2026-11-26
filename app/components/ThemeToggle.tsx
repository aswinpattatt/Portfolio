"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-8 w-16" />;
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
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      className={`relative h-8 w-16 shrink-0 cursor-pointer rounded-full transition-colors duration-300 ${
        isDark
          ? "bg-[#1c1c1c] shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]"
          : "bg-[#ececec] shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)]"
      }`}
    >
      {/* Icon, sits on the side opposite the knob */}
      <span
        className={`absolute top-1/2 -translate-y-1/2 transition-all duration-300 ${
          isDark ? "right-2.5 text-white" : "left-2.5 text-[#1c1c1c]"
        }`}
      >
        {isDark ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.5 3.5a8.5 8.5 0 1 0 6 14.6A9 9 0 0 1 14.5 3.5z" />
            <path d="M19 3l.8 1.9L21.7 6l-1.9.8L19 8.7l-.8-1.9L16.3 6l1.9-1.1z" />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" />
          </svg>
        )}
      </span>
      {/* Knob */}
      <span
        className={`absolute top-1 left-1 h-6 w-6 rounded-full shadow-md transition-transform duration-300 ease-out ${
          isDark
            ? "translate-x-0 bg-gradient-to-b from-white to-[#e4e4e4]"
            : "translate-x-8 bg-gradient-to-b from-[#3a3a3a] to-[#111]"
        }`}
      />
    </button>
  );
}