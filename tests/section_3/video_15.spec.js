// This is very very IMP VIDEO, need to watch again and again
// need to understand the concept again here

const { test, expect } = require('@playwright/test')

test("Auto wait fun test", async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    // Navigate to this URL
    await page.goto("https://rahulshettyacademy.com/client");
    // enter the correct userName and password and click on signIn button
    await page.locator("#userEmail").type("anshika@gmail.com")
    await page.locator("#userPassword").type("Iamking@000")
    await page.locator("[type='submit']").click();
    // this below line is very very imp and need to underStand the concept of newtwork calls
    await page.waitForLoadState("networkidle");
    const allTitles = await page.locator(".card-body b").allTextContents();
    console.log(allTitles);
});