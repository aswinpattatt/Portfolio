"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24 text-center">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="font-mono-label text-xs uppercase tracking-widest text-accent"
      >
        Error 404
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-bold tracking-tight"
      >
        Page Not Found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="max-w-md text-fg-70 leading-relaxed"
      >
        This route doesn&apos;t exist — maybe a typo in the URL, or a page
        that moved. Let&apos;s get you back on track.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex gap-4 pt-2"
      >
        <Link
          href="/"
          className="rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
        >
          ← Back to Home
        </Link>
        <Link
          href="/projects"
          className="rounded-md border border-fg-20 px-5 py-2.5 text-sm font-medium hover:bg-fg-5 transition-colors"
        >
          View Projects
        </Link>
      </motion.div>
    </div>
  );
}