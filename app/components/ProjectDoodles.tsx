"use client";

import { motion } from "framer-motion";

// Hand-drawn satellite, gently drifting + rotating
export function SatelliteDoodle() {
  return (
    <motion.svg
      viewBox="0 0 60 60"
      className="h-12 w-12"
      animate={{ x: [0, 2, 0], rotate: [-3, 3, -3] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <g stroke="var(--accent)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="22" y="21" width="16" height="16" rx="2" />
        <line x1="30" y1="16" x2="30" y2="21" />
        <line x1="30" y1="37" x2="30" y2="43" />
        <line x1="17" y1="29" x2="22" y2="29" />
        <line x1="38" y1="29" x2="43" y2="29" />
        <line x1="22" y1="21" x2="13" y2="14" />
        <line x1="38" y1="21" x2="47" y2="14" />
        <path d="M8 12 q5 1 5 6" />
        <path d="M52 12 q-5 1 -5 6" />
      </g>
      <circle cx="30" cy="29" r="2" fill="var(--accent)" />
    </motion.svg>
  );
}

// Two little magnets with dots ("customers") drifting from one to the other
export function ChurnMagnetDoodle() {
  return (
    <svg viewBox="0 0 60 60" className="h-12 w-12">
      <g stroke="var(--accent)" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M12 14 v14 a6 6 0 0 0 12 0 v-14" />
        <line x1="12" y1="14" x2="17" y2="14" />
        <line x1="19" y1="14" x2="24" y2="14" />
        <path d="M48 14 v14 a6 6 0 0 1 -12 0 v-14" />
        <line x1="48" y1="14" x2="43" y2="14" />
        <line x1="41" y1="14" x2="36" y2="14" />
      </g>
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cy="44"
          r="2.2"
          fill="var(--accent)"
          animate={{ cx: [20, 40, 20], opacity: [0.9, 0.4, 0.9] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        />
      ))}
    </svg>
  );
}

// Sketchy brain with a slow "thinking" pulse — for the Explainable AI thesis
export function BrainDoodle() {
  return (
    <motion.svg
      viewBox="0 0 60 60"
      className="h-12 w-12"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <g stroke="var(--accent)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16 q-8 0 -8 8 q-5 2 -3 8 q-3 4 1 8 q0 6 8 6 q2 3 8 2 v-30 q-2 -3 -6 -2z" />
        <path d="M38 16 q8 0 8 8 q5 2 3 8 q3 4 -1 8 q0 6 -8 6 q-2 3 -8 2 v-30 q2 -3 6 -2z" />
        <path d="M30 20 v26" strokeDasharray="1 3" opacity="0.5" />
      </g>
      {[[20, 22], [40, 30], [24, 38]].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="1.3"
          fill="var(--accent)"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </motion.svg>
  );
}

// Magnifying glass sweeping across review lines
export function MagnifierDoodle() {
  return (
    <svg viewBox="0 0 60 60" className="h-12 w-12">
      <g stroke="var(--accent)" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <line x1="10" y1="16" x2="34" y2="16" opacity="0.5" />
        <line x1="10" y1="24" x2="30" y2="24" opacity="0.5" />
        <line x1="10" y1="32" x2="34" y2="32" opacity="0.5" />
        <line x1="10" y1="40" x2="26" y2="40" opacity="0.5" />
      </g>
      <motion.g
        animate={{ x: [-2, 18, -2], y: [-2, 6, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="26" cy="20" r="9" stroke="var(--accent)" strokeWidth="1.8" fill="none" />
        <line
          x1="32.5"
          y1="26.5"
          x2="40"
          y2="34"
          stroke="var(--accent)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </motion.g>
    </svg>
  );
}

export const projectDoodles: Record<string, () => React.ReactNode> = {
  "real-time-satellite-tracking-system": SatelliteDoodle,
  "streaming-platform-churn-prediction": ChurnMagnetDoodle,
  "explainable-ai-business-predictive-models": BrainDoodle,
  "product-review-sentiment-analysis": MagnifierDoodle,
};