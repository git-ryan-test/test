const { test, expect } = require("@playwright/test");

test.describe("Chrome", () => {
  test("First Test", async ({ page }) => {
    //write testing code here
    await page.goto("https://playwright.dev");
    const title = page.locator(".navbar__inner .navbar__title");
    await expect(title).toHaveText("Playwright");
  });

  test("Simple click test @regression", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com");
    await page.locator("text=Add/Remove Elements").click();
    await page.locator("text=Add Element").click();
  });
});
