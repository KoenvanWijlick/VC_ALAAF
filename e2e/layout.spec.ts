import { test, expect } from '@playwright/test';

test.describe('Layout and Navigation', () => {
  test('homepage renders with correct layout structure', async ({ page }) => {
    await page.goto('/');

    // Check navbar is present
    const navbar = page.locator('header');
    await expect(navbar).toBeVisible();

    // Check brand logo and text
    await expect(page.locator('img[alt="VC-ALAAF Logo"]')).toBeVisible();
    await expect(page.getByText('VC AL-AAF')).toBeVisible();

    // Check navigation links
    await expect(page.getByRole('link', { name: /home/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /wagens|floats/i })).toBeVisible();

    // Check hero section
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/welkom|welcome/i);

    // Check footer
    await expect(page.locator('footer')).toBeVisible();
  });

  test('theme toggle works', async ({ page }) => {
    await page.goto('/');

    // Find theme toggle button
    const themeToggle = page.getByRole('button', { name: /toggle theme|wissel thema/i });
    await expect(themeToggle).toBeVisible();

    // Get initial body class
    const initialClass = await page.locator('body').getAttribute('class');

    // Click theme toggle
    await themeToggle.click();

    // Wait for class to change
    await page.waitForTimeout(300);
    const newClass = await page.locator('body').getAttribute('class');

    // Verify class changed
    expect(newClass).not.toBe(initialClass);
  });

  test('language switcher works', async ({ page }) => {
    await page.goto('/');

    // Find language buttons
    const nlButton = page.getByRole('button', { name: 'Nederlands' });
    const enButton = page.getByRole('button', { name: 'English' });

    // Both should be visible on desktop
    await expect(nlButton).toBeVisible();
    await expect(enButton).toBeVisible();

    // Click English button
    await enButton.click();

    // Check that content changed to English
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/welcome/i);
  });

  test('navigation to Wagens page works', async ({ page }) => {
    await page.goto('/');

    // Click on Wagens link
    await page.getByRole('link', { name: /wagens|floats/i }).click();

    // Wait for navigation
    await page.waitForURL('**/WagenPage');

    // Verify we're on the correct page
    expect(page.url()).toContain('WagenPage');
  });

  test('mobile menu works', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Burger menu should be visible
    const burger = page.getByRole('button', { name: /open navigation drawer/i });
    await expect(burger).toBeVisible();

    // Click burger
    await burger.click();

    // Drawer should open with links
    await expect(page.getByRole('link', { name: /home/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /wagens|floats/i })).toBeVisible();
  });
});

test.describe('Visual Styling', () => {
  test('navbar has translucent backdrop effect', async ({ page }) => {
    await page.goto('/');

    const navbar = page.locator('header');
    const backdropFilter = await navbar.evaluate((el) =>
      window.getComputedStyle(el).backdropFilter
    );

    // Check that backdrop filter is applied
    expect(backdropFilter).toContain('blur');
  });

  test('cards have proper shadow and hover effects', async ({ page }) => {
    await page.goto('/');

    // Find a card element
    const card = page.locator('.card').first();
    if (await card.count() > 0) {
      await expect(card).toBeVisible();

      // Get box-shadow
      const boxShadow = await card.evaluate((el) =>
        window.getComputedStyle(el).boxShadow
      );

      // Verify shadow exists
      expect(boxShadow).not.toBe('none');
    }
  });

  test('gradient background is applied to body', async ({ page }) => {
    await page.goto('/');

    const bodyBefore = page.locator('body::before');
    const background = await page.locator('body').evaluate((el) => {
      const before = window.getComputedStyle(el, '::before');
      return before.background;
    });

    // Verify gradient is present
    expect(background).toContain('gradient');
  });
});
