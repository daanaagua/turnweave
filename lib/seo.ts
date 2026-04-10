import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function buildTitle(title: string) {
  return `${title} | ${siteConfig.shortName}`;
}

export function absoluteUrl(pathname = "/") {
  return new URL(pathname.startsWith("/") ? pathname : `/${pathname}`, siteConfig.url).toString();
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const fullTitle = buildTitle(title);

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
