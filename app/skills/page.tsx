"use client";

import { motion } from "framer-motion";
import { skills } from "@/content/skills";

const groupVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-12 py-8">
      <h1 className="text-3xl font-bold tracking-tight">Skills</h1>

      <div className="flex flex-col gap-10">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={groupVariants}
          >
            <h2 className="font-mono-label text-xs uppercase tracking-wide text-accent mb-4">
              {group.category}
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-fg-10 bg-surface px-3.5 py-1.5 text-sm text-fg-90 hover:border-accent/50 hover:text-accent transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}