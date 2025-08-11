// src/lib/seo.ts
import type { Metadata } from "next";
import type { Product } from "@/lib/types";

export const SITE = {
  name: "Hang Low Beard Co.",
  url: "https://your-domain.com",
  description: "Handcrafted beard balms and grooming essentials.",
  twitter: "@yourhandle",
};

export function titleTemplate(pageTitle?: string) {
  return pageTitle ? `${pageTitle} | ${SITE.name}` : SITE.name;
}

export function ogImage(path = "/images/og-default.webp") {
  return new URL(path, SITE.url).toString();
}

export function baseMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE.url),
    title: SITE.name,
    description: SITE.description,
    openGraph: {
      title: SITE.name,
      description: SITE.description,
      url: SITE.url,
      siteName: SITE.name,
      type: "website",
      images: [{ url: ogImage() }],
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.twitter,
    },
  };
}

// Handy for PDP pages:
export function productMetadata(p: Product): Metadata {
  const desc =
    p.description ?? `${p.title} from ${SITE.name}. Handcrafted beard balm.`;
  return {
    title: titleTemplate(p.title),
    description: desc,
    openGraph: {
      title: p.title,
      description: desc,
      url: `${SITE.url}/products/${p.slug}`,
      type: "website",
      images: p.images?.[0]?.src
        ? [{ url: ogImage(p.images[0].src) }]
        : [{ url: ogImage() }],
    },
  };
}
