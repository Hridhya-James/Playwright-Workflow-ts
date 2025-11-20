import { test, expect } from '@playwright/test';

test('Functional - valid user search shows profile', async ({ page }) => {
  await page.goto('https://gh-users-search.netlify.app/');

  await page.fill('input', 'octocat');
  await page.click('button');

  await expect(page.getByText('octocat')).toBeVisible();
});
