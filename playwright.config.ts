import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    screenshot: 'off',
    video: 'off'
  },
  reporter: 'list'
});
