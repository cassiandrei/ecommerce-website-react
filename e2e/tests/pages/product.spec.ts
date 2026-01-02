import { test, expect } from '@playwright/test';

test.describe('Product Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/product/1');
  });

  test('breadcrumb is visible', async ({ page }) => {
    await expect(page.locator('.bg-primary-light a:has-text("Home")')).toBeVisible();
  });

  test('product title is visible', async ({ page }) => {
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('product price is visible', async ({ page }) => {
    await expect(page.locator('.text-2xl.text-gray-500')).toBeVisible();
  });

  test('product rating is visible', async ({ page }) => {
    await expect(page.locator('text=Customer Review')).toBeVisible();
  });

  test('size selector is visible', async ({ page }) => {
    await expect(page.locator('text=Size')).toBeVisible();
    await expect(page.getByRole('button', { name: 'L', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'XL' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'XS' })).toBeVisible();
  });

  test('color selector is visible', async ({ page }) => {
    await expect(page.locator('text=Color')).toBeVisible();
    // Color buttons (rounded-full)
    const colorButtons = page.locator('button.rounded-full');
    await expect(colorButtons).toHaveCount(3);
  });

  test('quantity selector is visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: '-', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: '+', exact: true })).toBeVisible();
  });

  test('add to cart button is visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Add To Cart', exact: true })).toBeVisible();
  });

  test('compare button is visible', async ({ page }) => {
    await expect(page.locator('a:has-text("+ Compare")')).toBeVisible();
  });

  test('product meta info is visible', async ({ page }) => {
    await expect(page.locator('text=SKU:')).toBeVisible();
    await expect(page.locator('text=Category:')).toBeVisible();
  });

  test('image gallery thumbnails are visible', async ({ page }) => {
    const thumbnails = page.locator('.w-20.h-20');
    expect(await thumbnails.count()).toBeGreaterThanOrEqual(1);
  });
});
