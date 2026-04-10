import { expect, test } from "@playwright/test";

test("homepage explains the Turnweave public slice", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("h1")).toContainText("Voice-native website agents");
  await expect(page.getByRole("heading", { name: "Website Agents", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Roleplay & Training", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Future Platform", exact: true })).toBeVisible();
});

test("pricing page renders the public plan shell", async ({ page }) => {
  await page.goto("/pricing");

  await expect(page.locator("h1")).toContainText("Pricing that stays honest");
  await expect(page.getByRole("heading", { name: "Starter", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Studio", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Platform", exact: true })).toBeVisible();
});

test("seeduplex cluster pages render answer-first topic routes", async ({ page }) => {
  await page.goto("/seeduplex-vs-gpt-4o-voice");

  await expect(page.locator("h1")).toContainText("Seeduplex vs GPT-4o voice");
  await expect(page.getByRole("heading", { name: "Primary sources", exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Product routes that absorb this search intent well", exact: true }),
  ).toBeVisible();
});

test("commercial topic routes connect topic intent to product pages", async ({ page }) => {
  await page.goto("/ai-website-agents");

  await expect(page.locator("h1")).toContainText("AI website agents");
  await expect(page.getByRole("heading", { name: "Supporting context", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Best adjacent routes", exact: true })).toBeVisible();
});
