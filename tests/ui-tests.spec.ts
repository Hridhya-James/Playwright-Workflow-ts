import { test, expect } from '@playwright/test';

test('UI - Search box and button are visible', async ({ page }) => {
  await page.goto('https://gh-users-search.netlify.app/');

  await expect(page.locator('input')).toBeVisible();
  await expect(page.locator('button')).toBeVisible();
});

test('UI - Page title is correct', async ({ page }) => {
  await page.goto('https://gh-users-search.netlify.app/');
  await expect(page).toHaveTitle(/Github User - Starter/i);
});






