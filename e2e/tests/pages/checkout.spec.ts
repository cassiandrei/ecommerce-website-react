import { test, expect } from '@playwright/test';

test.describe('Checkout Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/checkout');
  });

  test('page banner is visible', async ({ page }) => {
    await expect(page.locator('h1:has-text("Checkout")')).toBeVisible();
    await expect(page.locator('text=Home > Checkout')).toBeVisible();
  });

  test('billing details form is visible', async ({ page }) => {
    await expect(page.locator('h2:has-text("Billing details")')).toBeVisible();
  });

  test('all form fields are present', async ({ page }) => {
    // Name fields
    await expect(page.locator('label:has-text("First Name")')).toBeVisible();
    await expect(page.locator('label:has-text("Last Name")')).toBeVisible();

    // Other fields
    await expect(page.locator('label:has-text("Company Name")')).toBeVisible();
    await expect(page.locator('label:has-text("Country / Region")')).toBeVisible();
    await expect(page.locator('label:has-text("Street address")')).toBeVisible();
    await expect(page.locator('label:has-text("Town / City")')).toBeVisible();
    await expect(page.locator('label:has-text("Province")')).toBeVisible();
    await expect(page.locator('label:has-text("ZIP code")')).toBeVisible();
    await expect(page.locator('label:has-text("Phone")')).toBeVisible();
    await expect(page.locator('label:has-text("Email address")')).toBeVisible();
  });

  test('order summary is visible', async ({ page }) => {
    await expect(page.locator('text=Product').nth(0)).toBeVisible();
    await expect(page.locator('text=Subtotal').nth(0)).toBeVisible();
  });

  test('payment methods are visible', async ({ page }) => {
    await expect(page.locator('text=Direct Bank Transfer')).toBeVisible();
    await expect(page.locator('text=Cash On Delivery')).toBeVisible();
  });

  test('place order button is visible', async ({ page }) => {
    await expect(page.locator('button:has-text("Place order")')).toBeVisible();
  });

  test('form inputs are functional', async ({ page }) => {
    const firstNameInput = page.locator('input').nth(0);
    await firstNameInput.fill('John');
    await expect(firstNameInput).toHaveValue('John');

    const lastNameInput = page.locator('input').nth(1);
    await lastNameInput.fill('Doe');
    await expect(lastNameInput).toHaveValue('Doe');
  });
});
