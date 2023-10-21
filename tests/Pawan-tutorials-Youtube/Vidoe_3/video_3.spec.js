//https://blog.appmetry.com/qa/building-a-playwright-javascript-framework-with-page-object-model/
const { test, expect } = require('@playwright/test')

test('my first test as Home Page', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    // 1st -> launch our URL 
    await page.goto("https://www.demoblaze.com/")
    // 2nd verify the title of the page->
    const pageTitle = await page.title();
    console.log(pageTitle);
    await expect(page).toHaveTitle("STORE");
    // 3rd verify the URL of the page is correct or not->
    await expect(page).toHaveURL("https://www.demoblaze.com/");
    //now we are closing the page-->
    page.close();
});
// Below is the command to execute your test case if it is inside in a folder-->
// npx playwright test pawan-tutorials-Youtube/video_3

