/**
 * here we will discuss some locators which only present inside the playWright.
 * video 33 and 34 are coverred here
 */
const { test, expect } = require('@playwright/test')

test("end to end scenarios", async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    // This is imp thing get to know, If you have labels then there is some special and cool locator is playWright.
    // like this--> so here I want to click on check box which is near to it's label , so what I have done here just use the Locator getByLabel() and perform the click operation.
    // so how it get to know about click event, this is the beauty of playWright and its unique locators.
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    // same for the radio button as well.
    await page.getByLabel("Employed").click();
    // NOTE-->>> so one imp point is that getByLabel() will work perfrectly once you need to have selection like -> checkBox and raio-button and drpdowns
    // from here you need to watch video 35 again and make a note from it
    await page.pause();
});