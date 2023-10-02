/** 
 * here we will discuss no of assertions we have in playWright->  
 * https://playwright.dev/docs/test-assertions 
 */
import {test,expect} from '@playwright/test'  // We can import like in this way as well. 
// Note : above two lines of code do the same thing

test('assertion Test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // Need to watch again and Make a note form the video.

});