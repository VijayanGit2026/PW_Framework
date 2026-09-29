// import { test, expect } from "@playwright/test";
// import { LoginPage } from "../pages/loginPage";
// import userData from "../testData/user.json" with { type: "json" };

// test("Valid Login - Standard User", async ({ page }) => {
//     const loginPage = new LoginPage(page);

//     await page.goto("/");

//     await loginPage.login(
//         userData.standardUser.username,
//         userData.standardUser.password
//     );

//     await expect(page).toHaveURL(/inventory/);
// });


// test("Valid Login - Standard User Again", async ({ page }) => {
//     const loginPage = new LoginPage(page);

//     await page.goto("/");

//     await loginPage.login(
//         userData.standardUser.username,
//         userData.standardUser.password
//     );

//     await expect(page).toHaveURL(/inventory/);
// });


// test("Invalid Login - Wrong Password", async ({ page }) => {
//     const loginPage = new LoginPage(page);

//     await page.goto("/");

//     await loginPage.login(
//         userData.standardUser.username,
//         "wrong_password"
//     );

//     await expect(page.locator('[data-test="error"]')).toBeVisible();
// });


// test("Invalid Login - Wrong Username", async ({ page }) => {
//     const loginPage = new LoginPage(page);

//     await page.goto("/");

//     await loginPage.login(
//         "wrong_user",
//         userData.standardUser.password
//     );

//     await expect(page.locator('[data-test="error"]')).toBeVisible();
// });