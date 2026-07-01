import type { Metadata } from "next";
import { ThemeProvider } from "./components/ThemeProvider";
import { ClientErrorSuppressor } from "./components/ClientErrorSuppressor";
import ModelPreloader from "./components/ModelPreloader";
import { LangUpdater } from "./components/LangUpdater";
import { generateOrganizationSchema, generateWebSiteSchema } from "../lib/schema";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizerai.com'),
  title: "Free Online Photo Resizer, Image Compressor & Background Remover | PhotoResizerAI",
  description: "Resize images, compress photos, remove backgrounds, create passport photos and edit pictures online for free. No uploads required.",
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: "Free Online Photo Resizer, Image Compressor & Background Remover | PhotoResizerAI",
    description: "Resize images, compress photos, remove backgrounds, create passport photos and edit pictures online for free. No uploads required.",
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
    title: "Free Online Photo Resizer, Image Compressor & Background Remover | PhotoResizerAI",
    description: "Professional, fast, and fully local photo editing right in your browser. Remove backgrounds, resize images, create passport photos, and more. No uploads, 100% private.",
    images: ['/icon.svg'],
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
      className={`font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Script id="clarity-script" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x6yjypjsyk");
          `}
        </Script>

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1Z9MBM58SZ" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
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
