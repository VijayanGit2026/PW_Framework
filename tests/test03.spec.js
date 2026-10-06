import { test } from "../fixtures/fixtureFile";
import { expect } from "@playwright/test";

import userData from "../testData/user.json" with { type: "json" };

import "../Hooks/hooks.js";
import { logger } from "../utils/loggerUtils";

test("Login, Add Product and Complete Checkout", async ({
  page,
  loginPage,
  productPage,
  cartPage,
  checkoutPage,
  checkoutOverviewPage,
  checkoutCompletePage,
}, testInfo) => {
  logger("TEST START: Login, Add Product and Complete Checkout");

  // 1. LOGIN PAGE

  // const loginPage = new LoginPage(page);

  // await page.goto("/");
  // beforeEach hook handles navigation

  await loginPage.login(userData.valid.username, userData.valid.password);

  await page.screenshot({
    path: "screenshots/01-login-success.png",
    fullPage: true,
  });

  await testInfo.attach("01-login-success", {
    path: "screenshots/01-login-success.png",
    contentType: "image/png",
  });

  // 2. PRODUCT PAGE

  // const productPage = new ProductPage(page);

  await expect(productPage.productTitle).toBeVisible();

  await expect(productPage.backpack).toBeVisible();

  await productPage.addBackpackToCart();

  await expect(productPage.cartBadge).toHaveText("1");

  await page.screenshot({
    path: "screenshots/02-product-backpack-added.png",
    fullPage: true,
  });

  await testInfo.attach("02-product-backpack-added", {
    path: "screenshots/02-product-backpack-added.png",
    contentType: "image/png",
  });

  await productPage.openCart();

  // 3. CART PAGE

  // const cartPage = new CartPage(page);

  await expect(cartPage.cartTitle).toBeVisible();

  await expect(cartPage.backpack).toBeVisible();

  await expect(cartPage.checkoutBtn).toBeVisible();

  await page.screenshot({
    path: "screenshots/03-cart-page.png",
    fullPage: true,
  });

  await testInfo.attach("03-cart-page", {
    path: "screenshots/03-cart-page.png",
    contentType: "image/png",
  });

  await cartPage.checkout();

  // 4. CHECKOUT INFORMATION PAGE

  // const checkoutPage = new CheckoutPage(page);

  await expect(checkoutPage.checkoutTitle).toHaveText(
    "Checkout: Your Information",
  );

  await checkoutPage.fillCheckoutDetails("John", "Smith", "508012");

  await page.screenshot({
    path: "screenshots/04-checkout-info-filled.png",
    fullPage: true,
  });

  await testInfo.attach("04-checkout-info-filled", {
    path: "screenshots/04-checkout-info-filled.png",
    contentType: "image/png",
  });

  await checkoutPage.continueCheckout();

  // 5. CHECKOUT OVERVIEW PAGE

  // const checkoutOverviewPage =
  //     new CheckoutOverviewPage(page);

  await expect(checkoutOverviewPage.overviewTitle).toBeVisible();

  await expect(checkoutOverviewPage.backpack).toBeVisible();

  await page.screenshot({
    path: "screenshots/05-checkout-overview.png",
    fullPage: true,
  });

  await testInfo.attach("05-checkout-overview", {
    path: "screenshots/05-checkout-overview.png",
    contentType: "image/png",
  });

  await checkoutOverviewPage.finishOrder();

  // 6. CHECKOUT COMPLETE PAGE

  // const checkoutCompletePage =
  //     new CheckoutCompletePage(page);

  await expect(checkoutCompletePage.completeTitle).toBeVisible();

  await expect(checkoutCompletePage.thankYouMessage).toBeVisible();

  await page.screenshot({
    path: "screenshots/06-checkout-complete.png",
    fullPage: true,
  });

  await testInfo.attach("06-checkout-complete", {
    path: "screenshots/06-checkout-complete.png",
    contentType: "image/png",
  });

  // 7. GENERATE PDF

  const downloadPromise = page.waitForEvent("download");

  await checkoutCompletePage.generatePdfBtn.click();

  const download = await downloadPromise;

  // 8. SAVE PDF TO WINDOWS DOWNLOADS

  const fileName = download.suggestedFilename();

  const downloadPath = `C:\\Users\\P Vijayan\\Downloads\\${fileName}`;
  //Path change for GIT

  await download.saveAs(downloadPath);

  // 9. VERIFY PDF

  expect(fileName).toMatch(/\.pdf$/i);

  logger("TEST END: PDF downloaded successfully");

  logger(downloadPath);
});