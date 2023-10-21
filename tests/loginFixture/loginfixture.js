// loginFixture.js

const {test,fixture } = require('@playwright/test');

const loginFixture = fixture("Login Fixture");

loginFixture.beforeEach(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").type("anshika@gmail.com")
  await page.locator("#userPassword").type("Iamking@000")
  await page.locator("[type='submit']").click();
  await page.locator(".card-body b").first().waitFor();
  // Store the context with the logged-in session
  loginFixture.context = context;
});

module.exports = loginFixture;
