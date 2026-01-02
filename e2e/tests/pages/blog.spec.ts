import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('page banner is visible', async ({ page }) => {
    await expect(page.locator('h1:has-text("Blog")')).toBeVisible();
    await expect(page.locator('text=Home > Blog')).toBeVisible();
  });

  test('blog posts are displayed', async ({ page }) => {
    const articles = page.locator('article');
    await expect(articles).toHaveCount(3);
  });

  test('blog post has meta info', async ({ page }) => {
    await expect(page.locator('text=Admin').first()).toBeVisible();
    await expect(page.locator('text=14 Oct 2022').first()).toBeVisible();
    await expect(page.locator('text=Wood').first()).toBeVisible();
  });

  test('blog post titles are visible', async ({ page }) => {
    const titles = page.locator('h2:has-text("Going all-in with millennial design")');
    expect(await titles.count()).toBeGreaterThan(0);
  });

  test('read more links are visible', async ({ page }) => {
    const readMoreLinks = page.locator('a:has-text("Read more")');
    expect(await readMoreLinks.count()).toBe(3);
  });

  test('sidebar search is visible', async ({ page }) => {
    await expect(page.locator('input[placeholder="Search"]')).toBeVisible();
  });

  test('sidebar categories are visible', async ({ page }) => {
    await expect(page.locator('h3:has-text("Categories")')).toBeVisible();
    await expect(page.getByText('Crafts', { exact: true })).toBeVisible();
    await expect(page.getByText('Design', { exact: true })).toBeVisible();
    await expect(page.getByText('Handmade', { exact: true })).toBeVisible();
    await expect(page.getByText('Interior', { exact: true })).toBeVisible();
  });

  test('sidebar recent posts are visible', async ({ page }) => {
    await expect(page.locator('h3:has-text("Recent Posts")')).toBeVisible();
  });

  test('pagination is visible', async ({ page }) => {
    await expect(page.locator('button:has-text("1")')).toBeVisible();
    await expect(page.locator('button:has-text("2")')).toBeVisible();
    await expect(page.locator('button:has-text("Next")')).toBeVisible();
  });
});
