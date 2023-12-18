// Need to watch it again and again
const { test, expect } = require('@playwright/test')

test("How to automate Java/JavaScript Alert popups with Playwright", async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   /**
    * How to automate Java/JavaScript Alert popups with Playwright-->
    * 
    */
    page.on('dialog',dialog=>dialog.accept());
    await page.locator("#confirmbtn").click();

    /**
     * How to hover on an element->>
     * can use hover method directly
     */

});