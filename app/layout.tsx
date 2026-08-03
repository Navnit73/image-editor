import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "photoresizerai.com — Free Online AI Image Resizer, Cropper & Studio",
  description:
    "Crop, resize, compress, and edit photos online for free with 100% browser-based privacy on photoresizerai.com.",
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
