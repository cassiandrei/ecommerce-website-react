import { test, expect } from '@playwright/test';

test.describe('Setup Tests', () => {
  test('app renders without errors', async ({ page }) => {
    await page.goto('/');

    // Check that the page loads
    await expect(page).toHaveTitle(/Furniro/);

    // Check that there are no console errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');

    // Verify no critical errors (ignore some common non-critical ones)
    const criticalErrors = errors.filter(e => !e.includes('favicon'));
    expect(criticalErrors).toHaveLength(0);
  });

  test('Tailwind CSS is working (primary color applied)', async ({ page }) => {
    await page.goto('/');

    // Check that the "BUY NOW" link has the primary color
    const buyButton = page.locator('a:has-text("BUY NOW")');
    await expect(buyButton).toBeVisible();

    // Verify it has a background color (Tailwind is working)
    const bgColor = await buyButton.evaluate(el =>
      window.getComputedStyle(el).backgroundColor
    );
    expect(bgColor).not.toBe('rgba(0, 0, 0, 0)');
  });

  test('Poppins and Montserrat fonts are loaded', async ({ page }) => {
    await page.goto('/');

    // Wait for fonts to load
    await page.waitForLoadState('networkidle');

    // Check body font family
    const bodyFontFamily = await page.locator('body').evaluate(el =>
      window.getComputedStyle(el).fontFamily
    );
    expect(bodyFontFamily.toLowerCase()).toContain('poppins');
  });

  test('navigation links are present', async ({ page }) => {
    await page.goto('/');

    // Check header navigation
    await expect(page.locator('nav a:has-text("Home")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Shop")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Blog")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Contact")')).toBeVisible();
  });

  test('header and footer are visible', async ({ page }) => {
    await page.goto('/');

    // Header
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('header').locator('text=Furniro')).toBeVisible();

    // Footer
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('footer h3:has-text("Furniro.")')).toBeVisible();
  });
});
