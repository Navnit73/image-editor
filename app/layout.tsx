import type { Metadata } from "next";
import { ThemeProvider } from "./components/ThemeProvider";
import { ClientErrorSuppressor } from "./components/ClientErrorSuppressor";
import ModelPreloader from "./components/ModelPreloader";
import { LangUpdater } from "./components/LangUpdater";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizerai.com'),
  title: "photoresizerai - Free Online Image Tools",
  description: "Professional, fast, and fully local photo editing right in your browser. Remove backgrounds, resize images, create passport photos, and more. No uploads, 100% private.",
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      de: '/de',
      fr: '/fr',
      es: '/es',
      'x-default': '/',
    },
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: "photoresizerai - Free Online Image Tools",
    description: "Professional, fast, and fully local photo editing right in your browser. Remove backgrounds, resize images, create passport photos, and more. No uploads, 100% private.",
    type: "website",
    url: '/',
    images: [
      {
        url: '/icon.svg',
        width: 800,
        height: 600,
        alt: 'photoresizerai',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "photoresizerai - Free Online Image Tools",
    description: "Professional, fast, and fully local photo editing right in your browser. Remove backgrounds, resize images, create passport photos, and more. No uploads, 100% private.",
    images: ['/icon.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Default to English, since we can't use headers() without opting into dynamic rendering.
  // The correct language will be updated by LangUpdater on the client if needed, or just left as en for SSG.
  return (
    <html
      lang="en"
      className={`font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x6yjypjsyk");
          `}
        </Script>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1Z9MBM58SZ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1Z9MBM58SZ');
          `}
        </Script>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LangUpdater />
          <ClientErrorSuppressor />
          <ModelPreloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
