const { test, expect } = require('@playwright/test')

test("UI controls", async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // Here we will understand the concept of dropdown
    /**
     *  so there could be two kinds of dropdowns->
     * 1. which starts with "select" class [can say static dropdown]
     */
    // so here need to select one value from the drodpwn , so first you have to make a locator of select class
    const dropDown = page.locator("select.form-control");
    // now you need to select the value from the dropdown using pre-defined methods inside the playWright
    await dropDown.selectOption("consult");
    await page.pause(); // This is some kind of pause in playWright. as we compare it from Thread.sleep(), it will stop the execution.
    // now select the radio button
    // here we used the xpath instead of CSS, inside the locator
    await page.locator("//span[text()=' User']/following-sibling::span").click();
    await page.pause();
});