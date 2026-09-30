import { test } from "@playwright/test";
import { logger } from "../utils/loggerUtils";

test.beforeAll(async () => {
  //Runs once before the test suite.
  logger("Suite started");
});

test.beforeEach(async ({ context, page }) => {
  //Runs before every test.
  await context.clearCookies();
  //Because cookies should be cleared before opening the application.
  await page.goto("/");
});

test.afterEach(async ({ page }, testInfo) => {
  //Runs after every test.
  if (testInfo.status !== testInfo.expectedStatus) {
    //If fail, Screenshot will be taken
    await page.screenshot({
      path: `${testInfo.title}.png`,
      fullPage: true,
    });
  }
});

test.afterAll(async () => {
  //Runs once after the suite.
  logger("Suite ended");
});
