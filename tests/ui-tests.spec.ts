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

//Followers List UI Check
test("Verify Followers list UI elements", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.fill('input[placeholder=\"Enter Github User Name\"]', "nikolay_a00");
    await page.click("text=Search");

    await expect(page.locator("text=Followers")).toBeVisible();

    const firstFollower = page.locator(".followers-list div").first();
    await expect(firstFollower.locator("img")).toBeVisible();
    //await expect(firstFollower.locator("a")).toBeVisible();
});
