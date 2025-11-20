import { test, expect } from '@playwright/test';

test('Functional - valid user search shows profile', async ({ page }) => {
  await page.goto('https://gh-users-search.netlify.app/');

  await page.fill('input', 'octocat');
  await page.click('button');

  await expect(page.getByText('octocat')).toBeVisible();

  //Valid user Search
  test("Verify that Followers list loads after valid search", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.fill('input[placeholder="Enter Github User Name"]', "nikolay_a00");
    await page.click("text=Search");

    await page.waitForSelector("text=Followers");

    const followerItems = await page.locator(".followers-list > div").count();
    expect(followerItems).toBeGreaterThan(0);
  });
  //Invalid User SEarch
  test("Search for invalid GitHub user", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.fill('input[placeholder=\"Enter Github User Name\"]', "invalid_user_12345_xx");
    await page.click("text=Search");

    const errorMessage = await page.locator(".error-message");
    await expect(errorMessage).toBeVisible();
  });

  test("Verify request limit counter updates", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    const initialText = await page.textContent("text=Requests:");

    await page.fill('input[placeholder=\"Enter Github User Name\"]', "nikolay_a00");
    await page.click("text=Search");

    const afterSearch = await page.textContent("text=Requests:");

    expect(initialText).not.toBe(afterSearch);
  });
});
