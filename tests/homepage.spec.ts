import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/RiiTube - YouTube on Wii/);
});

test('has logo and main description', async ({ page }) => {
  await page.goto('/');

  // Check for the logo
  const logo = page.locator('.logo');
  await expect(logo).toBeVisible();

  // Check for the main description text
  await expect(page.locator('body')).toContainText('A way to watch YouTube on your Wii');
});

test('has discord widget', async ({ page }) => {
  await page.goto('/');

  // Check for the discord iframe
  const discordIframe = page.locator('.discord-container iframe');
  await expect(discordIframe).toBeVisible();
});
