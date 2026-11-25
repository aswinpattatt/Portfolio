import { about } from "@/content/about";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10 py-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">About</h1>
        <p className="text-fg-50 text-sm font-mono-label">{about.title}</p>
      </div>

      <p className="max-w-2xl text-fg-70 leading-relaxed whitespace-pre-line">
        {about.summary}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-fg-10 pt-8">
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
</div>
    </div>
  );
}