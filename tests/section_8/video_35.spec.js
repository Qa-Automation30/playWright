
const { test, expect } = require('@playwright/test')

test("How to validate if element is hidden, displayed mode with Expect assertions", async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    /**
     *  First how to press back and forward button in browser--> These are two methods
     * -----------------------------------
     *  await page.goBack();
        await page.goForward();
        ----------------------------------------
     */
    await page.goto("http://www.google.com")
    await page.goBack();
    await page.goForward();
    await page.goBack();
    /**
     * How to check a webelemnt is in visible-->
     */
    await expect(page.locator("#displayed-text")).toBeVisible();
     /**
     * How to check a webelemnt is in not visible -->  so below methods do the same work
     * await expect(page.locator("#displayed-text")).not.toBeVisible();
     * await expect(page.locator("#displayed-text")).toBeHidden();
     */
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();   
   
});