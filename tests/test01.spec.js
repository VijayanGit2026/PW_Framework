import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import userData from "../testData/user.json" with { type: "json" };

test("Valid Login", async ({ page }) => {
  console.log("TEST START: Valid Login");

  const loginPage = new LoginPage(page);

  await page.goto("/");

  await loginPage.login(userData.valid.username, userData.valid.password);
});

test("Invalid Login", async ({ page }) => {
  console.log("TEST START: Invalid Login");

  const loginPage = new LoginPage(page);

  await page.goto("/");

  await loginPage.login(userData.invalid.username, userData.invalid.password);
});
