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
  await expect(page.getByText("Starter")).toBeVisible();
  await expect(page.getByText("Studio")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Platform", exact: true })).toBeVisible();
});
