import { describe, expect, it } from "vitest";
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

    expect(metadata.title).toBe("Product | Turnweave");
    expect(metadata.description).toBe("Turnweave product shell.");
    expect(metadata.alternates?.canonical).toBe("https://turnweave.com/product");
    expect(metadata.openGraph?.url).toBe("https://turnweave.com/product");
  });
});
