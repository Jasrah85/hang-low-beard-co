"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function pageview(url: string) {
  if (typeof window === "undefined") return;
  if (window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID as string, {
      page_path: url,
    });
  }
}

export default function AnalyticsWrapper() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    const url = pathname + (search?.toString() ? `?${search.toString()}` : "");
    pageview(url);
  }, [pathname, search]);

  return null;
}
