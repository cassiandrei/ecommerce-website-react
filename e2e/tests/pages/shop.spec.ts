import { test, expect } from '@playwright/test';

test.describe('Shop Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/shop');
  });

  test('page banner is visible', async ({ page }) => {
    await expect(page.locator('h1:has-text("Shop")')).toBeVisible();
    await expect(page.locator('text=Home > Shop')).toBeVisible();
  });

  test('filter controls are visible', async ({ page }) => {
    await expect(page.locator('text=Filter')).toBeVisible();
    await expect(page.locator('text=Showing')).toBeVisible();
    await expect(page.locator('text=Sort by')).toBeVisible();
  });

  test('products grid displays products', async ({ page }) => {
    const productCards = page.locator('.grid > .group.bg-gray-100');
    expect(await productCards.count()).toBeGreaterThan(0);
  });

  test('pagination buttons are visible', async ({ page }) => {
    await expect(page.locator('button:has-text("1")')).toBeVisible();
  });

  test('show select dropdown is functional', async ({ page }) => {
    const showSelect = page.locator('select').first();
    await expect(showSelect).toBeVisible();
    await showSelect.selectOption('32');
    await expect(showSelect).toHaveValue('32');
  });

  test('sort select dropdown is functional', async ({ page }) => {
    const sortSelect = page.locator('select').nth(1);
    await expect(sortSelect).toBeVisible();
    await sortSelect.selectOption('Price: Low to High');
    await expect(sortSelect).toHaveValue('Price: Low to High');
  });
});
