// playwright.config.js

// Import the tools we need from Playwright.
// "defineConfig" helps us write the settings correctly (it gives hints in your editor).
const { defineConfig } = require('@playwright/test');

// Export our settings so Playwright can read them when you run your tests.
module.exports = defineConfig({

  // Tell Playwright where your test files are. "./tests" is the tests folder.
  testDir: './tests',

  // Maximum time (in milliseconds) one test can run before it fails.
  // 30000 ms = 30 seconds, which is a good starting value.
  timeout: 30000,

  // Settings that apply to every test.
  use: {

    // Run the browser in headed mode.
    // "headless: false" means you WILL see the browser window open.
    headless: false,

    // Use Chromium (the browser engine behind Google Chrome).
    browserName: 'chromium',
  },
});