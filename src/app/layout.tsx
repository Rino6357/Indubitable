import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const vcrOSD = localFont({
  src: "./fonts/VCR_OSD_MONO_1.001.ttf",
  variable: "--font-vcr-osd",
});

export const metadata: Metadata = {
  title: "Baker Alshaif",
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
        className={`${vcrOSD.className} ${vcrOSD.variable} min-h-screen flex flex-col p-4 md:p-8 gap-8`}
      >
        <header className="pixel-box p-4">
          <Breadcrumbs />
          <nav className="flex gap-4 text-sm">
            <Link href="/portfolio" className="hover:bg-background hover:text-foreground px-1">
              [PORTFOLIO]
            </Link>
            <Link href="/writing" className="hover:bg-background hover:text-foreground px-1">
              [WRITING]
            </Link>
          </nav>
        </header>

        <main className="flex-grow max-w-4xl w-full">
          {children}
        </main>

        <footer className="pixel-box p-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} - NO TRACKING - NO JS (ALMOST) - BUILT WITH NEXT.JS
          </p>
        </footer>
      </body>
    </html>
  );
}
