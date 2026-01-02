import { test, expect } from '@playwright/test';

test.describe('Cart Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/cart');
  });

  test('page banner is visible', async ({ page }) => {
    await expect(page.locator('h1:has-text("Cart")')).toBeVisible();
    await expect(page.locator('text=Home > Cart')).toBeVisible();
  });

  test('cart page displays correctly', async ({ page }) => {
    // Empty cart shows continue shopping
    await expect(page.locator('text=Your cart is empty')).toBeVisible();
    await expect(page.locator('a:has-text("Continue Shopping")')).toBeVisible();
  });

  test('empty cart has continue shopping link', async ({ page }) => {
    const continueBtn = page.locator('a:has-text("Continue Shopping")');
    await expect(continueBtn).toBeVisible();
    await continueBtn.click();
    await expect(page).toHaveURL(/\/shop/);
  });

  test('empty cart message is shown', async ({ page }) => {
    await expect(page.locator('text=Your cart is empty')).toBeVisible();
  });
});
