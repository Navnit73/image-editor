import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apple Design System — Action Blue, SF Pro, and 24 components",
  description:
    "Apple's design system as a DESIGN.md spec. Action Blue #0066cc, SF Pro, 21 colors, 24 components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased selection:bg-[#0066cc]/20 selection:text-[#0066cc]">
        {children}
      </body>
    </html>
  );
}
