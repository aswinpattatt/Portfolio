import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";
import { projectDoodles } from "@/app/components/ProjectDoodles";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectCaseStudy({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  const Doodle = projectDoodles[project.slug];

  return (
    <div className="flex flex-col gap-14 py-8">
      <div>
        <Link
          href="/projects"
          className="font-mono-label text-xs text-accent hover:underline"
        >
          ← All Projects
        </Link>

        <div className="flex items-start justify-between gap-6 mt-6">
          <div>
            <span className="font-mono-label text-xs uppercase tracking-wide text-fg-40">
              {project.category}
            </span>
            <h1 className="text-3xl font-bold tracking-tight mt-2">
              {project.title}
            </h1>
          </div>
          {Doodle && (
            <div className="h-16 w-16 shrink-0">
              <Doodle />
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs rounded-full bg-fg-5 px-2.5 py-1 text-fg-60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="font-mono-label text-xs uppercase tracking-wide text-accent">
          01 — Problem
        </h2>
        <p className="text-fg-70 leading-relaxed max-w-2xl">
          {project.problem}
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-mono-label text-xs uppercase tracking-wide text-accent">
          02 — Approach
        </h2>
        <ul className="flex flex-col gap-2.5">
          {project.approach.map((step, i) => (
            <li key={i} className="flex gap-2.5 text-fg-70 text-sm leading-relaxed max-w-2xl">
              <span className="text-accent mt-1 shrink-0">▸</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-mono-label text-xs uppercase tracking-wide text-accent">
          03 — Outcome
        </h2>
        <p className="text-fg-70 leading-relaxed max-w-2xl">
          {project.outcome}
        </p>
      </section>

      <div className="border-t border-fg-10 pt-8">
        <Link
          href="/projects"
          className="rounded-md border border-fg-20 px-5 py-2.5 text-sm font-medium hover:bg-fg-5 transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}