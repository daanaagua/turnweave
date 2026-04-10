import { expect, test } from "@playwright/test";

test.use({ javaScriptEnabled: false });

test.describe("dashboard shell", () => {
  test("renders the workspace overview and primary navigation", async ({
    page,
  }) => {
    await page.goto("/app");

    await expect(page.getByText("Workspace overview")).toBeVisible();
    await expect(
      page.getByRole("navigation").getByRole("link", { name: "Workspace" }),
    ).toBeVisible();
    await expect(
      page.getByRole("navigation").getByRole("link", { name: "Agents" }),
    ).toBeVisible();
    await expect(
      page.getByRole("navigation").getByRole("link", { name: "Billing" }),
    ).toBeVisible();
  });

  test("renders billing and platform placeholder surfaces", async ({ page }) => {
    await page.goto("/app/billing");
    await expect(page.getByText("Billing center")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Creem is prepared/ }),
    ).toBeVisible();

    await page.goto("/app/webhooks");
    await expect(page.getByText("Webhook management placeholder")).toBeVisible();
  });
});
