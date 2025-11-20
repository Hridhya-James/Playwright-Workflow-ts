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
//welcome title

test("UI - Welcomee Page title is correct", async ({ page }) => {
  await page.goto("https://gh-users-search.netlify.app/");

  await expect(page.locator("text=Welcome")).toBeVisible();
});
test('UI - Search input placeholder text is correct', async ({ page }) => {
  await page.goto('https://gh-users-search.netlify.app/');

  const searchInput = page.getByTestId('search-bar');
  await expect(searchInput).toHaveAttribute('placeholder', /enter github user name/i);
});
