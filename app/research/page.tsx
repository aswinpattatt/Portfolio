"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { research } from "@/content/research";

const rotations = ["-1.5deg", "1deg"];

export default function ResearchPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
      <div className="flex flex-col gap-8">
    {research.map((item, i) => {
      const isOpen = openIndex === i;

      return (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          style={{ rotate: isOpen ? "0deg" : rotations[i % 2] }}
          className="relative"
        >
          {/* Stacked "paper" shadow layers, only visible when collapsed */}
          {!isOpen && (
            <>
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-xl border border-fg-10 bg-surface -z-10" />
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl border border-white/5 bg-surface -z-20" />
            </>
          )}

          <button
            type="button"
            onClick={() => setOpenIndex(isOpen ? null : i)}
            className={`w-full rounded-xl border bg-surface p-8 text-left shadow-lg transition-colors ${
              isOpen ? "border-accent/40" : "border-fg-10"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="font-mono-label text-xs uppercase tracking-wide text-accent">
                  {item.type === "thesis"
                    ? "Master's Thesis"
                    : "Publication"}
                </span>

                <h2 className="mt-2 text-xl font-semibold tracking-tight">
                  {item.title}
                </h2>

                <p className="mt-1 text-muted text-sm">
                  {item.context}
                </p>
              </div>

              {/* Expand / collapse control */}
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                transition={{
                  rotate: {
                    duration: 0.25,
                  },
                  scale: {
                    duration: 0.2,
                  },
                }}
                className="shrink-0 rounded-full px-1 text-2xl font-mono-label text-accent transition-opacity duration-300 hover:opacity-80"
                aria-hidden="true"
              >
                +
              </motion.span>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <ul className="mt-6 flex flex-col gap-2.5 border-t border-fg-10 pt-6">
                    {item.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex gap-2.5 text-fg-70 text-sm leading-relaxed"
                      >
                        <span className="mt-1 shrink-0 text-accent">
                          ▸
                        </span>

                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {item.pdf && (
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-md border border-accent/40 px-4 py-2 text-xs font-mono-label text-accent hover:bg-accent/10 transition-colors"
                    >
                      {item.pdflabel ?? "View"} →
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      );
    })}
  </div>
  );
}