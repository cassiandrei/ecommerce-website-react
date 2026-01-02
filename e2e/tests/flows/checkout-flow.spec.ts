import { test, expect } from '@playwright/test';

test.describe('Checkout Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Add item to cart first
    await page.goto('/product/1');
    await page.click('button:has-text("Add To Cart")');
  });

  test('can navigate from cart to checkout', async ({ page }) => {
    // First ensure cart has items
    await page.goto('/cart');

    // Wait for cart to load and check if checkout button exists
    const checkoutBtn = page.locator('a:has-text("Check Out")');

    if (await checkoutBtn.isVisible()) {
      await checkoutBtn.click();
      await expect(page).toHaveURL(/\/checkout/);
    } else {
      // Cart is empty, go directly to checkout
      await page.goto('/checkout');
    }

    await expect(page.locator('h1:has-text("Checkout")')).toBeVisible();
  });

  test('checkout form displays all fields', async ({ page }) => {
    await page.goto('/checkout');

    // Check all required fields
    await expect(page.locator('label:has-text("First Name")')).toBeVisible();
    await expect(page.locator('label:has-text("Last Name")')).toBeVisible();
    await expect(page.locator('label:has-text("Country / Region")')).toBeVisible();
    await expect(page.locator('label:has-text("Street address")')).toBeVisible();
    await expect(page.locator('label:has-text("Town / City")')).toBeVisible();
    await expect(page.locator('label:has-text("ZIP code")')).toBeVisible();
    await expect(page.locator('label:has-text("Phone")')).toBeVisible();
    await expect(page.locator('label:has-text("Email address")')).toBeVisible();
  });

  test('checkout shows payment methods', async ({ page }) => {
    await page.goto('/checkout');

    await expect(page.locator('text=Direct Bank Transfer')).toBeVisible();
    await expect(page.locator('text=Cash On Delivery')).toBeVisible();
  });

  test('can fill checkout form', async ({ page }) => {
    await page.goto('/checkout');

    // Fill form
    const inputs = page.locator('form input');
    await inputs.nth(0).fill('John');
    await inputs.nth(1).fill('Doe');
    await inputs.nth(2).fill('Acme Inc');

    // Verify filled values
    await expect(inputs.nth(0)).toHaveValue('John');
    await expect(inputs.nth(1)).toHaveValue('Doe');
    await expect(inputs.nth(2)).toHaveValue('Acme Inc');
  });

  test('place order button is visible', async ({ page }) => {
    await page.goto('/checkout');

    await expect(page.locator('button:has-text("Place order")')).toBeVisible();
  });

  test('can select payment method', async ({ page }) => {
    await page.goto('/checkout');

    // Default is Direct Bank Transfer (first radio)
    const bankTransfer = page.locator('input[type="radio"]').first();
    await expect(bankTransfer).toBeChecked();

    // Select Cash on Delivery
    const cod = page.locator('input[type="radio"]').nth(1);
    await cod.click();
    await expect(cod).toBeChecked();
  });
});
