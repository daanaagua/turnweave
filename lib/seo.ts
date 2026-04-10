import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

type SchemaValue = Record<string, unknown>;

export function buildTitle(title: string) {
  return `${title} | ${siteConfig.shortName}`;
}

export function absoluteUrl(pathname = "/") {
  return new URL(pathname.startsWith("/") ? pathname : `/${pathname}`, siteConfig.url).toString();
}

export function buildImageUrl(pathname = "/opengraph-image") {
  return absoluteUrl(pathname);
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
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
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
      locale: siteConfig.locale,
      images: [
        {
          url: buildImageUrl(),
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: siteConfig.social.x,
      images: [buildImageUrl()],
    },
  };
}

export function buildOrganizationSchema(): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.supportEmail,
    description: siteConfig.description,
    logo: buildImageUrl("/icon.svg"),
  };
}

export function buildWebSiteSchema(): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
  };
}

export function buildSoftwareApplicationSchema({
  name,
  description,
  path = "/",
  category = "BusinessApplication",
}: {
  name: string;
  description: string;
  path?: string;
  category?: string;
}): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: category,
    operatingSystem: "Web",
    url: absoluteUrl(path),
    description,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
  };
}

export function buildBreadcrumbSchema(
  items: Array<{
    name: string;
    path: string;
  }>,
): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqSchema(
  items: Array<{
    question: string;
    answer: string;
  }>,
): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildArticleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}): SchemaValue {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: absoluteUrl(path),
    url: absoluteUrl(path),
  };
}
