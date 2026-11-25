"use client";

export default function ContactPage() {
  const email = "aswinpattatt@gmail.com";

  return (
    <div className="flex flex-col gap-8 py-12 max-w-lg">
      <h1 className="text-3xl font-bold tracking-tight">
        Let&apos;s build something useful with data & AI.
      </h1>

      <div className="flex flex-col gap-4 border-t border-fg-10 pt-8">
        <a
          href={`mailto:${email}`}
          className="group relative flex items-center justify-between overflow-hidden rounded-md border border-fg-10 px-5 py-4 text-sm transition-colors hover:bg-fg-5"
        >
          <span className="absolute left-0 top-0 h-full w-0.5 bg-accent scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
          <span className="flex items-center gap-3 text-fg-50">
            <span aria-hidden="true">✉</span>
            Email
          </span>
          <span className="inline-flex items-center gap-1.5 text-fg-90 transition-transform duration-300 group-hover:translate-x-1">
            {email}
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/aswin-p-ajayan-61422b249"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between overflow-hidden rounded-md border border-fg-10 px-5 py-4 text-sm transition-colors hover:bg-fg-5"
        >
          <span className="absolute left-0 top-0 h-full w-0.5 bg-accent scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
          <span className="flex items-center gap-3 text-fg-50">
            <span aria-hidden="true">in</span>
            LinkedIn
          </span>
          <span className="inline-flex items-center gap-1.5 text-fg-90 transition-transform duration-300 group-hover:translate-x-1">
            View Profile →
          </span>
        </a>

        <a
          href="https://github.com/aswinpattatt"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between overflow-hidden rounded-md border border-fg-10 px-5 py-4 text-sm transition-colors hover:bg-fg-5"
        >
          <span className="absolute left-0 top-0 h-full w-0.5 bg-accent scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
          <span className="flex items-center gap-3 text-fg-50">
            <span aria-hidden="true">⌘</span>
            GitHub
          </span>
          <span className="inline-flex items-center gap-1.5 text-fg-90 transition-transform duration-300 group-hover:translate-x-1">
            View Profile →
          </span>
        </a>

        <a
          href="/resume.pdf"
          className="group relative flex items-center justify-between overflow-hidden rounded-md border border-fg-20 bg-fg-5 px-5 py-4 text-sm font-medium transition-colors hover:bg-fg-10"
        >
          <span className="absolute left-0 top-0 h-full w-0.5 bg-accent scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />
          <span className="flex items-center gap-3 text-fg-90">
            <span aria-hidden="true">↓</span>
            Download Resume
          </span>
          <span className="inline-flex items-center gap-1.5 text-fg-90 transition-transform duration-300 group-hover:translate-x-1">
            ↓
          </span>
        </a>
      </div>
    </div>
  );
}