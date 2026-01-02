import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hero section is visible', async ({ page }) => {
    // Check hero content
    await expect(page.locator('text=New Arrival')).toBeVisible();
    await expect(page.locator('text=Discover Our New Collection')).toBeVisible();
    await expect(page.locator('a:has-text("BUY NOW")')).toBeVisible();
  });

  test('browse range section displays categories', async ({ page }) => {
    await expect(page.locator('text=Browse The Range')).toBeVisible();

    // Check categories
    await expect(page.locator('h3:has-text("Dining")')).toBeVisible();
    await expect(page.locator('h3:has-text("Living")')).toBeVisible();
    await expect(page.locator('h3:has-text("Bedroom")')).toBeVisible();
  });

  test('products section displays products', async ({ page }) => {
    await expect(page.locator('text=Our Products')).toBeVisible();

    // Check product cards exist
    const productCards = page.locator('.group.bg-gray-100');
    await expect(productCards).toHaveCount(8);
  });

  test('show more button is visible', async ({ page }) => {
    const showMoreBtn = page.locator('a:has-text("Show More")');
    await expect(showMoreBtn).toBeVisible();
  });

  test('navigation to shop works', async ({ page }) => {
    await page.click('nav a:has-text("Shop")');
    await expect(page).toHaveURL(/\/shop/);
    await expect(page.locator('h1:has-text("Shop")')).toBeVisible();
  });

  test('navigation to contact works', async ({ page }) => {
    await page.click('nav a:has-text("Contact")');
    await expect(page).toHaveURL(/\/contact/);
    await expect(page.locator('h1:has-text("Contact")')).toBeVisible();
  });

  test('navigation to blog works', async ({ page }) => {
    await page.click('nav a:has-text("Blog")');
    await expect(page).toHaveURL(/\/blog/);
    await expect(page.locator('h1:has-text("Blog")')).toBeVisible();
  });

  test('cart link in header works', async ({ page }) => {
    await page.click('a[aria-label="Cart"]');
    await expect(page).toHaveURL(/\/cart/);
    await expect(page.locator('h1:has-text("Cart")')).toBeVisible();
  });
});
