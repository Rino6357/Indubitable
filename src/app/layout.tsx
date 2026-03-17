import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Creative Space",
  description: "A portfolio of work and a collection of poems and stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="border-b border-gray-200 dark:border-zinc-800">
          <nav className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              CREATIVE SPACE
            </Link>
            <div className="space-x-8 text-sm font-medium">
              <Link href="/portfolio" className="hover:text-zinc-600 dark:hover:text-zinc-400">
                Portfolio
              </Link>
              <Link href="/writing" className="hover:text-zinc-600 dark:hover:text-zinc-400">
                Writing
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow max-w-4xl mx-auto px-4 py-12 w-full">
          {children}
        </main>

        <footer className="border-t border-gray-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} My Creative Space. Built with Next.js.</p>
        </footer>
      </body>
    </html>
  );
}
