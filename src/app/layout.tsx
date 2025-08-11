// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Suspense } from "react";
import RootHeader from "@/components/layout/RootHeader";
import RootFooter from "@/components/layout/RootFooter";
import { ToastProvider } from "@/components/ui/Toast";
import { baseMetadata } from "@/lib/seo";
import { CartProvider } from "@/components/cart/CartProvider";
import AnalyticsWrapper from "@/components/analytics/AnalyticsWrapper";

export const metadata: Metadata = baseMetadata();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col bg-white text-stone-900 dark:bg-stone-950 dark:text-stone-100`}
      >
        {/* Set initial theme instantly to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                var d = t ? (t === 'dark') : window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.documentElement.classList.toggle('dark', d);
              } catch (e) {}
            `,
          }}
        />

        {/* (Optional) Google Analytics — loads after hydration if NEXT_PUBLIC_GA_ID is set */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Skip link for a11y */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow dark:focus:bg-stone-900"
        >
          Skip to content
        </a>

        <ToastProvider>
          <CartProvider>
            {/* Track route changes (GA etc.) */}
            <Suspense fallback={null}>
              <AnalyticsWrapper />
            </Suspense>

            <RootHeader />
            <main id="content" className="flex-1">
              {children}
            </main>
            <RootFooter />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
