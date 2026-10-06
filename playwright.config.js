import { defineConfig, devices } from "@playwright/test";
import { config } from "./config/configReader.js";
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
  workers: 2,

  // HTML report
  reporter: [["html"], ["list"], ["allure-playwright"]],

  // Common settings for all tests
  use: {
    // Application URL
    baseURL: config.baseUrl,
    // Trace when test is retried
    trace: "on-first-retry",

    // Video when test fails
    video: "retain-on-failure",

    // Slow down browser actions

    viewport: null,

    launchOptions: {
      slowMo: 1500,
      args: ["--start-full-screen"],
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
