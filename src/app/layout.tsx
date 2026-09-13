import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Retno Eka Triatry | Fullstack Developer",
  description: "Portfolio of Retno Eka Triatry - Fullstack Developer based in Jakarta. Building applications from idea into ready-to-use digital products with clean systems and human-centered design.",
  keywords: [
    "Retno Eka Triatry",
    "Fullstack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Jakarta",
    "Indonesia"
  ],
  authors: [{ name: "Retno Eka Triatry" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
