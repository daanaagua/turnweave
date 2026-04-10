import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/product", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/pricing", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/docs", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/seeduplex", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/scenarios/website-agents", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/scenarios/roleplay-training", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/legal/privacy", priority: 0.3, changeFrequency: "monthly" as const },
  { path: "/legal/terms", priority: 0.3, changeFrequency: "monthly" as const },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: new Date("2026-04-10T16:00:00+08:00"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
