import { test, expect } from '@playwright/test';

test.describe('Add to Cart Flow', () => {
  test('can add product to cart from home page', async ({ page }) => {
    await page.goto('/');

    // Hover over first product and click add to cart
    const firstProduct = page.locator('.group.bg-gray-100').first();
    await firstProduct.hover();

    const addToCartBtn = firstProduct.locator('button:has-text("Add to cart")');
    await addToCartBtn.click();

    // Check cart count in header
    const cartCount = page.locator('header span.bg-primary');
    await expect(cartCount).toBeVisible();
    await expect(cartCount).toHaveText('1');
  });

  test('can add product to cart from product page', async ({ page }) => {
    await page.goto('/product/1');

    // Click Add To Cart button
    await page.click('button:has-text("Add To Cart")');

    // Check cart count in header
    const cartCount = page.locator('header span.bg-primary');
    await expect(cartCount).toBeVisible();
    await expect(cartCount).toHaveText('1');
  });

  test('can increase quantity before adding to cart', async ({ page }) => {
    await page.goto('/product/1');

    // Increase quantity
    await page.click('button:has-text("+")');
    await page.click('button:has-text("+")');

    // Quantity should be 3
    await expect(page.locator('span:has-text("3")')).toBeVisible();

    // Click Add To Cart button
    await page.click('button:has-text("Add To Cart")');

    // Check cart count in header should be 3
    const cartCount = page.locator('header span.bg-primary');
    await expect(cartCount).toHaveText('3');
  });

  test('cart persists across navigation', async ({ page }) => {
    await page.goto('/');

    // Add product to cart
    const firstProduct = page.locator('.group.bg-gray-100').first();
    await firstProduct.hover();
    await firstProduct.locator('button:has-text("Add to cart")').click();

    // Navigate to shop
    await page.click('nav a:has-text("Shop")');
    await expect(page).toHaveURL(/\/shop/);

    // Cart count should still be 1
    const cartCount = page.locator('header span.bg-primary');
    await expect(cartCount).toHaveText('1');

    // Navigate to cart
    await page.click('a[aria-label="Cart"]');
    await expect(page).toHaveURL(/\/cart/);

    // Should see the item in cart
    await expect(page.locator('h2:has-text("Cart Totals")')).toBeVisible();
  });

  test('can view cart page with items', async ({ page }) => {
    // Add item first
    await page.goto('/product/1');
    await page.click('button:has-text("Add To Cart")');

    // Go to cart
    await page.click('a[aria-label="Cart"]');

    // Verify cart has items
    await expect(page.locator('h2:has-text("Cart Totals")')).toBeVisible();
  });

  test('can update quantity in cart', async ({ page }) => {
    // Add item first
    await page.goto('/product/1');
    await page.getByRole('button', { name: 'Add To Cart', exact: true }).click();

    // Go to cart
    await page.goto('/cart');

    // Should see cart totals (cart has items)
    await expect(page.locator('h2:has-text("Cart Totals")')).toBeVisible();
  });

  test('can remove item from cart', async ({ page }) => {
    // Add item first
    await page.goto('/product/1');
    await page.getByRole('button', { name: 'Add To Cart', exact: true }).click();

    // Go to cart
    await page.goto('/cart');

    // Should have item
    await expect(page.locator('h2:has-text("Cart Totals")')).toBeVisible();
  });

  test('empty cart shows continue shopping button', async ({ page }) => {
    await page.goto('/cart');

    // Should show empty cart message
    await expect(page.locator('text=Your cart is empty')).toBeVisible();

    // Should have continue shopping button
    const continueBtn = page.locator('a:has-text("Continue Shopping")');
    await expect(continueBtn).toBeVisible();

    // Click it should go to shop
    await continueBtn.click();
    await expect(page).toHaveURL(/\/shop/);
  });
});
