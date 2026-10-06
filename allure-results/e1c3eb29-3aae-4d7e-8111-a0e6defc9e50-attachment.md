# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test03.spec.js >> Login, Add Product and Complete Checkout
- Location: tests\test03.spec.js:9:5

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
```

```
Error: page.screenshot: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | import { logger } from "../utils/loggerUtils";
  3  | 
  4  | test.beforeAll(async () => {
  5  |   //Runs once before the test suite.
  6  |   logger("Suite started");
  7  | });
  8  | 
  9  | test.beforeEach(async ({ context, page }) => {
  10 |   //Runs before every test.
  11 |   await context.clearCookies();
  12 |   //Because cookies should be cleared before opening the application.
  13 |   await page.goto("/");
  14 | });
  15 | 
  16 | test.afterEach(async ({ page }, testInfo) => {
  17 |   //Runs after every test.
  18 |   if (testInfo.status !== testInfo.expectedStatus) {
  19 |     //If fail, Screenshot will be taken
> 20 |     await page.screenshot({
     |                ^ Error: page.screenshot: Target page, context or browser has been closed
  21 |       path: `${testInfo.title}.png`,
  22 |       fullPage: true,
  23 |     });
  24 |   }
  25 | });
  26 | 
  27 | test.afterAll(async () => {
  28 |   //Runs once after the suite.
  29 |   logger("Suite ended");
  30 | });
  31 | 
```