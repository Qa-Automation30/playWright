// This is very very IMP VIDEO, need to watch again and again

const { test, expect } = require('@playwright/test')

test("Auto wait fun test", async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    // Navigate to this URL
    await page.goto("https://rahulshettyacademy.com/client/auth/login");
    // enter the correct userName and password and click on signIn button
    await page.locator("#userEmail").type("anshika@gmail.com")
    await page.locator("#userPassword").type("Iamking@000")
    await page.locator("[type='submit']").click();
    // this is the concept which is already discussed in previous video
    await page.locator(".card-body b").first().textContent();
    const allTitles = await page.locator(".card-body b").allTextContents();

    console.log(allTitles);
});