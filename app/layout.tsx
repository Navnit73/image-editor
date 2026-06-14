import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import { ClientErrorSuppressor } from "./components/ClientErrorSuppressor";
import ModelPreloader from "./components/ModelPreloader";
import "./globals.css";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Image Editor Studio - Free Online Image Tools",
  description: "Professional, fast, and fully local photo editing right in your browser. Remove backgrounds, resize images, create passport photos, and more. No uploads, 100% private.",
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: "Image Editor Studio - Free Online Image Tools",
    description: "Professional, fast, and fully local photo editing right in your browser. Remove backgrounds, resize images, create passport photos, and more. No uploads, 100% private.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  
  // Default to English, change based on route
  let lang = 'en';
  if (pathname.startsWith('/fr')) lang = 'fr';
  else if (pathname.startsWith('/de')) lang = 'de';
  else if (pathname.startsWith('/es')) lang = 'es';

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ClientErrorSuppressor />
          <ModelPreloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
