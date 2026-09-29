// @ts-check
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  // Location of test files
  testDir: "./tests",

  // Run tests in parallel
  fullyParallel: false,

  // Prevent test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests only in CI
  retries: process.env.CI ? 2 : 0,

  // Number of workers
  workers: 2, //worker chanaged

  // HTML report
  reporter: "html",

  // Common settings for all tests
  use: {
    // Application URL
    baseURL: "https://www.saucedemo.com",

    // Trace when test is retried
    trace: "on-first-retry",
    video: "retain-on-failure",

    // Slow down browser actions by 4 seconds
    launchOptions: {
      slowMo: 1500,
      args: ['--start-full-screen'] //Max Screen
    },
  },

  // Browser configuration
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
