import { describe, expect, it } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { buildPageMetadata, buildTitle } from "@/lib/seo";

describe("buildTitle", () => {
  it("adds the Turnweave suffix", () => {
    expect(buildTitle("Pricing")).toBe("Pricing | Turnweave");
  });
});

describe("buildPageMetadata", () => {
  it("creates canonical and social metadata for a route", () => {
    const metadata = buildPageMetadata({
      title: "Product",
      description: "Turnweave product shell.",
      path: "/product",
    });

    expect(metadata.title).toBe("Product");
    expect(metadata.description).toBe("Turnweave product shell.");
    expect(metadata.alternates?.canonical).toBe("https://turnweave.com/product");
    expect(metadata.openGraph?.url).toBe("https://turnweave.com/product");
    expect(metadata.openGraph?.title).toBe("Product | Turnweave");
    expect(metadata.twitter?.title).toBe("Product | Turnweave");
    const images = metadata.openGraph?.images;
    const firstImage =
      Array.isArray(images) && typeof images[0] === "object" && images[0] !== null && "url" in images[0]
        ? images[0].url
        : undefined;

    expect(Array.isArray(images)).toBe(true);
    expect(firstImage).toBe("https://turnweave.com/opengraph-image");
  });
});

describe("crawl surfaces", () => {
  it("includes the Seeduplex explainer in the sitemap", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toContain("https://turnweave.com/seeduplex");
  });

  it("publishes sitemap and explicit AI bot access in robots", () => {
    const rules = robots().rules;

    expect(robots().sitemap).toBe("https://turnweave.com/sitemap.xml");
    expect(Array.isArray(rules)).toBe(true);
    expect(rules).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ userAgent: "GPTBot", allow: "/" }),
        expect.objectContaining({ userAgent: "ClaudeBot", allow: "/" }),
      ]),
    );
  });
});
