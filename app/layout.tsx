import type { Metadata } from "next";
import { ThemeProvider } from "./components/ThemeProvider";
import { ClientErrorSuppressor } from "./components/ClientErrorSuppressor";
import ModelPreloader from "./components/ModelPreloader";
import "./globals.css";
import { headers } from "next/headers";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://photoresizerai.com'),
  title: "photoresizerai - Free Online Image Tools",
  description: "Professional, fast, and fully local photo editing right in your browser. Remove backgrounds, resize images, create passport photos, and more. No uploads, 100% private.",
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: "photoresizerai - Free Online Image Tools",
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ClientErrorSuppressor />
          <ModelPreloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
