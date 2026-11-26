"use client";

import { motion } from "framer-motion";

const STROKE = {
  stroke: "var(--accent)",
  strokeWidth: 1.6,
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ------------------------------------------------------------------ */
/* Satellite: flies around an elliptical orbit, sending signal pings.  */
/* ------------------------------------------------------------------ */
const ORBIT = { cx: 30, cy: 30, rx: 22, ry: 10, tilt: (-25 * Math.PI) / 180 };
const orbitPoints = Array.from({ length: 41 }, (_, i) => {
  const a = (i / 40) * Math.PI * 2;
  const x = ORBIT.rx * Math.cos(a);
  const y = ORBIT.ry * Math.sin(a);
  return {
    x: ORBIT.cx + x * Math.cos(ORBIT.tilt) - y * Math.sin(ORBIT.tilt),
    y: ORBIT.cy + x * Math.sin(ORBIT.tilt) + y * Math.cos(ORBIT.tilt),
  };
});

export function SatelliteDoodle() {
  return (
    <svg viewBox="0 0 60 60" className="h-12 w-12">
      <ellipse
        cx={ORBIT.cx}
        cy={ORBIT.cy}
        rx={ORBIT.rx}
        ry={ORBIT.ry}
        transform={`rotate(-25 ${ORBIT.cx} ${ORBIT.cy})`}
        {...STROKE}
        strokeWidth={1}
        strokeDasharray="2 3"
        opacity={0.45}
      />
      {/* planet */}
      <circle cx="30" cy="30" r="5.5" {...STROKE} />
      <path d="M26.5 28.5 q3.5 -2 7 0" {...STROKE} strokeWidth={1} opacity={0.6} />
      {/* satellite flying the orbit */}
      <motion.g
        initial={{ x: orbitPoints[0].x, y: orbitPoints[0].y }}
        animate={{
          x: orbitPoints.map((p) => p.x),
          y: orbitPoints.map((p) => p.y),
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      >
        <rect x="-2" y="-2" width="4" height="4" rx="0.8" fill="var(--accent)" />
        <line x1="-6" y1="0" x2="-2" y2="0" {...STROKE} strokeWidth={1.2} />
        <line x1="2" y1="0" x2="6" y2="0" {...STROKE} strokeWidth={1.2} />
        <motion.circle
          r="2"
          {...STROKE}
          strokeWidth={0.8}
          animate={{ r: [2, 7], opacity: [0.8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Churn: a magnet pulls "customers" up toward it; field rings pulse.  */
/* ------------------------------------------------------------------ */
export function ChurnMagnetDoodle() {
  return (
    <svg viewBox="0 0 60 60" className="h-12 w-12">
      {/* horseshoe magnet */}
      <g {...STROKE}>
        <path d="M20 8 v10 a10 10 0 0 0 20 0 v-10" />
        <line x1="20" y1="12" x2="26" y2="12" />
        <line x1="34" y1="12" x2="40" y2="12" />
      </g>
      {/* field rings */}
      {[0, 1].map((i) => (
        <motion.path
          key={i}
          d="M16 30 a14 14 0 0 0 28 0"
          {...STROKE}
          strokeWidth={1}
          animate={{ opacity: [0, 0.6, 0], y: [8, -4, -4] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
        />
      ))}
      {/* customers rising toward the magnet */}
      {[18, 26, 34, 42].map((cx, i) => (
        <motion.circle
          key={cx}
          cx={cx}
          r="2.2"
          fill="var(--accent)"
          animate={{ cy: [54, 30], opacity: [0, 1, 0], scale: [0.6, 1, 0.4] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            delay: i * 0.55,
            ease: "easeIn",
          }}
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Brain / Explainable AI: neural net, signals flow through the layers */
/* ------------------------------------------------------------------ */
const NET_LAYERS: [number, number][][] = [
  [[12, 20], [12, 40]],
  [[30, 14], [30, 30], [30, 46]],
  [[48, 24], [48, 36]],
];
const NET_EDGES: { a: [number, number]; b: [number, number]; d: number }[] = [];
NET_LAYERS.slice(0, -1).forEach((layer, li) =>
  layer.forEach((a, ai) =>
    NET_LAYERS[li + 1].forEach((b, bi) =>
      NET_EDGES.push({ a, b, d: li * 0.9 + (ai + bi) * 0.12 })
    )
  )
);

export function BrainDoodle() {
  return (
    <svg viewBox="0 0 60 60" className="h-12 w-12">
      {NET_EDGES.map((e, i) => (
        <g key={i}>
          <line
            x1={e.a[0]}
            y1={e.a[1]}
            x2={e.b[0]}
            y2={e.b[1]}
            {...STROKE}
            strokeWidth={0.8}
            opacity={0.25}
          />
          <motion.line
            x1={e.a[0]}
            y1={e.a[1]}
            x2={e.b[0]}
            y2={e.b[1]}
            {...STROKE}
            strokeWidth={1.6}
            initial={{ pathLength: 0.3, pathOffset: 0, opacity: 0 }}
            animate={{
              pathOffset: [0, 0.7],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              repeatDelay: 0.8,
              delay: e.d,
              ease: "easeInOut",
            }}
          />
        </g>
      ))}
      {NET_LAYERS.flat().map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="3"
          fill="var(--background)"
          stroke="var(--accent)"
          strokeWidth="1.5"
          animate={{ scale: [1, 1.25, 1] }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 1.2,
            delay: (cx < 20 ? 0 : cx < 40 ? 0.9 : 1.8) + (i % 3) * 0.1,
          }}
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Sentiment: a gauge whose needle swings from sad to happy.           */
/* ------------------------------------------------------------------ */
const NEEDLE_LEN = 17;
const needleTip = (deg: number) => {
  const r = (deg * Math.PI) / 180;
  return { x: 30 + NEEDLE_LEN * Math.sin(r), y: 40 - NEEDLE_LEN * Math.cos(r) };
};
const NEEDLE_ANGLES = [-65, -20, 40, 65, 10, -65];

export function MagnifierDoodle() {
  return (
    <svg viewBox="0 0 60 60" className="h-12 w-12">
      {/* gauge arc */}
      <path d="M8 40 a22 22 0 0 1 44 0" {...STROKE} strokeWidth={1.2} opacity={0.5} />
      {/* ticks */}
      {[-60, -30, 0, 30, 60].map((deg) => {
        const r = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={30 + 19 * Math.sin(r)}
            y1={40 - 19 * Math.cos(r)}
            x2={30 + 22 * Math.sin(r)}
            y2={40 - 22 * Math.cos(r)}
            {...STROKE}
            strokeWidth={1.2}
          />
        );
      })}
      {/* sad / happy faces at the ends */}
      <path d="M8 49 q3 -3 6 0" {...STROKE} strokeWidth={1.2} />
      <path d="M46 47 q3 3 6 0" {...STROKE} strokeWidth={1.2} />
      {/* needle */}
      <motion.line
        x1="30"
        y1="40"
        initial={{ x2: needleTip(NEEDLE_ANGLES[0]).x, y2: needleTip(NEEDLE_ANGLES[0]).y }}
        animate={{
          x2: NEEDLE_ANGLES.map((a) => needleTip(a).x),
          y2: NEEDLE_ANGLES.map((a) => needleTip(a).y),
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        {...STROKE}
        strokeWidth={2}
      />
      <circle cx="30" cy="40" r="2.6" fill="var(--accent)" />
    </svg>
  );
}

export const projectDoodles: Record<string, () => React.ReactNode> = {
  "real-time-satellite-tracking-system": SatelliteDoodle,
  "streaming-platform-churn-prediction": ChurnMagnetDoodle,
  "explainable-ai-business-predictive-models": BrainDoodle,
  "product-review-sentiment-analysis": MagnifierDoodle,
};
