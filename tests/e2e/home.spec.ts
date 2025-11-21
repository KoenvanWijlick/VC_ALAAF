import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("loads hero content", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /Bouw mee aan/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Plan een kennismaking/i })).toBeVisible();
  });
});
