"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { about } from "@/content/about";
import { projects } from "@/content/projects";
import { projectDoodles } from "@/app/components/ProjectDoodles";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const featuredSlugs = [
  "real-time-satellite-tracking-system",
  "explainable-ai-business-predictive-models",
  "streaming-platform-churn-prediction",
];

// Types the text with natural jitter, pauses at word boundaries, holds the
// full text, erases it, then loops. `idle` is true while the cursor is waiting.
function useTypewriter(text: string) {
  const [output, setOutput] = useState("");
  const [idle, setIdle] = useState(true);

  useEffect(() => {
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const wait = (ms: number, idleDuring: boolean, next: () => void) => {
      setIdle(idleDuring);
      timer = setTimeout(() => {
        if (!cancelled) next();
      }, ms);
    };

    const type = () => {
      i++;
      setOutput(text.slice(0, i));
      if (i >= text.length) {
        wait(2000, true, erase); // hold the finished name
        return;
      }
      const atWordEnd = text[i] === " ";
      if (atWordEnd) {
        wait(400 + Math.random() * 250, true, type); // break between words
      } else {
        wait(40 + Math.random() * 60, false, type);
      }
    };

    const erase = () => {
      i--;
      setOutput(text.slice(0, i));
      if (i <= 0) {
        wait(600, true, type); // break before retyping
        return;
      }
      wait(22, false, erase);
    };

    wait(400, true, type);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [text]);

  return { output, idle };
}

export default function Home() {
  const { output: typedName, idle: isDone } = useTypewriter(about.name);

  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <div className="flex flex-col gap-20">
      <section className="flex flex-col gap-6 py-12">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-mono-label text-sm uppercase tracking-widest text-fg-50"
        >
          {about.title}
        </motion.p>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-relaxed">
          {typedName}
          <span
            className={`inline-block w-[0.5em] ml-1 -translate-y-1 ${
              isDone ? "animate-pulse" : ""
            }`}
            style={{ backgroundColor: "var(--accent)", height: "0.9em" }}
          />
        </h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-xl text-fg-70 text-lg leading-relaxed"
        >
          {about.tagline}
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex gap-4 pt-2"
        >
          <Link
  href="/projects"
  className="group relative overflow-hidden rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10"
>
  <span
    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
  />
  <span className="relative inline-flex items-center gap-1.5">
    Explore My Work
    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
  </span>
</Link>

          <a
            href="/resume.pdf"
            className="group relative overflow-hidden rounded-md border border-fg-20 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent"
          >
            <span className="pointer-events-none absolute inset-0 bg-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative">Download CV</span>
          </a>
        </motion.div>
      </section>

      <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-fg-10 pt-10"
>
  {about.highlights.map((h, i) => (
    <div
      key={h.label}
      className={`flex flex-col gap-1 ${
  i === 1 ? "sm:items-center sm:text-center" : i === 2 ? "sm:items-end sm:text-right" : ""
}`}
    >
      <span className="font-mono-label text-xs uppercase tracking-wide text-fg-40">
        {h.label}
      </span>
      <span className="text-sm text-fg-90">{h.value}</span>
    </div>
  ))}
</motion.section>

      <section className="flex flex-col gap-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Featured Work</h2>
          <Link
  href="/projects"
  className="group relative inline-flex items-center gap-1 font-mono-label text-xs text-accent"
>
  <span>View All Projects</span>
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>

  <span
    className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
  />
</Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {featured.map((project, i) => {
            if (!project) return null;
            const Doodle = projectDoodles[project.slug];
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="flex flex-col gap-3 rounded-xl border border-fg-10 bg-surface p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono-label text-xs uppercase tracking-wide text-fg-40">
                    {project.category}
                  </span>
                  {Doodle && <Doodle />}
                </div>
                <h3 className="text-base font-semibold leading-snug">
                  {project.title}
                </h3>
                <p className="text-fg-70 text-sm leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}