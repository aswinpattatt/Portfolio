"use client";

import { motion } from "framer-motion";
import { projects } from "@/content/projects";
import { projectDoodles } from "@/app/components/ProjectDoodles";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12 py-8">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className={`flex flex-col gap-4 rounded-lg border p-6 transition-colors ${
              project.featured
                ? "border-fg-30 bg-white/[0.03]"
                : "border-fg-10"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wide text-fg-40">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="text-xs w-fit rounded-full border border-fg-20 px-2 py-0.5 text-fg-60">
                    Featured
                  </span>
                )}
              </div>
              {projectDoodles[project.slug]?.()}
            </div>

            <h2 className="text-lg font-semibold leading-snug">
              {project.title}
            </h2>

            <p className="text-fg-70 text-sm leading-relaxed">
              {project.summary}
            </p>

            <ul className="flex flex-col gap-1.5 text-fg-60 text-sm">
              {project.highlights.map((h, hi) => (
                <li key={hi} className="flex gap-2">
                  <span className="text-fg-30">—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs rounded-full bg-fg-5 px-2.5 py-1 text-fg-60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}