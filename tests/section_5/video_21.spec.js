/**
 * What is playWright inspector ?-->> and how we can use it.
 * playWright inspector is used for debug purposes.
 * but the question is how to do it ->
 * So you use  this command ->  "npx playwright test video_17 --debug" to run your TC in debug mode.
 * =====================================================================================================
 * as soon as you hit "npx playwright test video_17 --debug" this command in terminal with debug mode, it will open "playWright inspector tool".
 */

const { test, expect } = require('@playwright/test')

test("playWright inspector", async function ({ browser }) {
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
    // now how to do assertion that radio button is checked or not-->
    await expect(page.locator("//span[text()=' User']/following-sibling::span")).toBeChecked(); // toBeChecked() -. is only for checked
    await page.pause();
});
// Note : no need to watch video 22 -> It is record and play