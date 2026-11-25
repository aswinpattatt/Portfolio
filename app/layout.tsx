import type { Metadata } from "next";
import Link from "next/link";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Nav from "./components/Nav";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aswinpajayan.vercel.app"), // update once deployed
  title: "Aswin P Ajayan | Data Science & AI",
  description:
    "Portfolio of Aswin P Ajayan — Data Science & AI, GenAI, AI Engineering. Explainable AI, machine learning, and applied research projects.",
  openGraph: {
    title: "Aswin P Ajayan | Data Science & AI",
    description:
      "I build data-driven and AI-powered solutions that turn complex business problems into practical systems.",
    url: "https://aswinpajayan.vercel.app",
    siteName: "Aswin P Ajayan",
    images: ["/opengraph-image"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aswin P Ajayan | Data Science & AI",
    description:
      "I build data-driven and AI-powered solutions that turn complex business problems into practical systems.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <header className="sticky top-0 z-50 border-b border-fg-10 bg-[var(--background)]/90 backdrop-blur">
  <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
    <Link
      href="/"
      className="font-semibold tracking-tight whitespace-nowrap text-sm sm:text-base"
    >
      Aswin P Ajayan
    </Link>
    <div className="flex items-center gap-4 sm:gap-6">
      <Nav />
      <ThemeToggle />
    </div>
  </nav>
</header>
          <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
          <footer className="border-t border-fg-10 mt-24 py-8 text-center text-sm text-muted font-mono-label">
            © {new Date().getFullYear()} Aswin P Ajayan
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}