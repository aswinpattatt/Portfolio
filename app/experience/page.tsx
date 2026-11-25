"use client";

import { motion } from "framer-motion";
import { experience } from "@/content/experience";

const statusStyle: Record<string, { label: string; dot: string }> = {
  current: { label: "Current", dot: "bg-accent" },
  previous: { label: "Previous", dot: "bg-white/40" },
  earlier: { label: "Earlier", dot: "bg-white/25" },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-12 py-8">
      <h1 className="text-3xl font-bold tracking-tight">Experience</h1>

      <div className="flex flex-col gap-6">
        {experience.map((job, i) => {
          const status = statusStyle[job.status];
          return (
            <motion.div
              key={`${job.company}-${job.period}`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -3 }}
              className={`rounded-xl border p-8 transition-colors bg-surface ${
                job.status === "current"
                  ? "border-accent/40"
                  : "border-fg-10"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${status.dot}`} />
                  <span className="font-mono-label text-xs uppercase tracking-wide text-muted">
                    {status.label}
                  </span>
                </div>
                <span className="font-mono-label text-xs text-muted">
                  {job.period}
                </span>
              </div>

              <h2 className="text-2xl font-semibold tracking-tight mb-1">
                {job.role}
              </h2>
              <p className="text-accent text-sm mb-6">{job.company}</p>

              {job.highlights.length > 0 ? (
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {job.highlights.map((h, hi) => (
                    <li
                      key={hi}
                      className="flex gap-2.5 text-fg-70 text-sm leading-relaxed"
                    >
                      <span className="text-accent mt-1 shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted text-sm italic border-t border-fg-10 pt-4">
                  Details coming soon.
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}