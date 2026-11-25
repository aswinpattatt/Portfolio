"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <ul className="hidden md:flex gap-6 text-sm text-fg-70">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                className={`transition-colors ${
                  isActive ? "text-accent" : "hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ backgroundColor: "var(--accent)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          );
        })}
      </ul>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="md:hidden flex flex-col gap-1.5 h-8 w-8 items-center justify-center"
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
          className="block h-0.5 w-6 bg-fg-90"
        />
        <motion.span
          animate={{ opacity: open ? 0 : 1 }}
          className="block h-0.5 w-6 bg-fg-90"
        />
        <motion.span
          animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
          className="block h-0.5 w-6 bg-fg-90"
        />
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[var(--background)]/95 backdrop-blur border-b border-fg-10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4 text-sm">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block py-1 transition-colors ${
                        isActive ? "text-accent" : "text-fg-70 hover:text-accent"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}