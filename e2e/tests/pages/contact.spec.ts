import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('page banner is visible', async ({ page }) => {
    await expect(page.locator('h1:has-text("Contact")')).toBeVisible();
    await expect(page.locator('text=Home > Contact')).toBeVisible();
  });

  test('contact info section is visible', async ({ page }) => {
    await expect(page.locator('text=Get In Touch With Us')).toBeVisible();
    await expect(page.locator('h3:has-text("Address")')).toBeVisible();
    await expect(page.locator('h3:has-text("Phone")')).toBeVisible();
    await expect(page.locator('h3:has-text("Working Time")')).toBeVisible();
  });

  test('contact form is visible', async ({ page }) => {
    await expect(page.locator('label:has-text("Your name")')).toBeVisible();
    await expect(page.locator('label:has-text("Email address")')).toBeVisible();
    await expect(page.locator('label:has-text("Subject")')).toBeVisible();
    await expect(page.locator('label:has-text("Message")')).toBeVisible();
  });

  test('submit button is visible', async ({ page }) => {
    await expect(page.locator('button:has-text("Submit")')).toBeVisible();
  });

  test('features section is visible', async ({ page }) => {
    await expect(page.locator('text=High Quality')).toBeVisible();
    await expect(page.locator('text=Warranty Protection')).toBeVisible();
    await expect(page.locator('text=Free Shipping')).toBeVisible();
    await expect(page.locator('text=24 / 7 Support')).toBeVisible();
  });

  test('form inputs work correctly', async ({ page }) => {
    const nameInput = page.locator('input[placeholder="Abc"]');
    await nameInput.fill('John Doe');
    await expect(nameInput).toHaveValue('John Doe');

    const emailInput = page.locator('input[placeholder="Abc@def.com"]');
    await emailInput.fill('john@example.com');
    await expect(emailInput).toHaveValue('john@example.com');

    const messageInput = page.locator('textarea');
    await messageInput.fill('Test message');
    await expect(messageInput).toHaveValue('Test message');
  });
});
