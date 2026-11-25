"use client";

import { motion } from "framer-motion";
import { education } from "@/content/education";

function CornerFlourish({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`absolute h-8 w-8 ${className}`}
      fill="none"
      stroke="var(--accent)"
      strokeWidth="1.3"
      strokeLinecap="round"
      opacity="0.6"
    >
      <path d="M4 20 Q4 4 20 4" />
      <path d="M10 20 Q10 10 20 10" strokeDasharray="1 4" />
      <circle cx="4" cy="20" r="1.4" fill="var(--accent)" stroke="none" />
      <circle cx="20" cy="4" r="1.4" fill="var(--accent)" stroke="none" />
    </svg>
  );
}

function initialsFor(degree: string) {
  if (degree.toLowerCase().includes("master")) return "MBA";
  if (degree.toLowerCase().includes("bachelor")) return "B.Com";
  return degree
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 4);
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export default function EducationPage() {
  return (
    <div className="flex flex-col gap-12 py-8">
      <h1 className="text-3xl font-bold tracking-tight">Education</h1>

      <div className="flex flex-col gap-8">
        {education.map((item, i) => (
          <motion.div
            key={item.institution}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="relative rounded-xl p-1"
            style={{
              background:
                "linear-gradient(135deg, var(--accent-soft), transparent 60%)",
            }}
          >
            <div className="relative rounded-lg border border-accent/30 bg-surface p-10">
              {/* inner ornamental border */}
              <div className="pointer-events-none absolute inset-3 rounded-md border border-dashed border-accent/20" />

              <CornerFlourish className="top-3 left-3" />
              <CornerFlourish className="top-3 right-3 rotate-90" />
              <CornerFlourish className="bottom-3 left-3 -rotate-90" />
              <CornerFlourish className="bottom-3 right-3 rotate-180" />

              <div className="relative flex flex-col items-center text-center gap-4 py-4">
                {/* institution logo */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-white p-2 overflow-hidden">
                  <img
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  className="h-full w-full object-contain"
                />
              </div>

                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {item.degree}
                  </h2>
                  <p className="text-accent text-sm mt-1">{item.institution}</p>
                  <p className="font-mono-label text-xs text-muted mt-2 uppercase tracking-wide">
                    {item.period}
                  </p>
                </div>

                <ul className="flex flex-col items-center gap-2 pt-4 mt-2 border-t border-accent/15 w-full max-w-sm">
                  {item.details.map((d, di) => (
                    <li key={di} className="text-fg-70 text-sm leading-relaxed">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}