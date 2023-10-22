const { chromium,expect } = require('@playwright/test');

module.exports = async config => {
    const { baseURL, storageState } = config.projects[0].use;
    //================================================
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    //====================================================
    try {
        console.log(baseURL);
        await page.goto(baseURL, { waitUntil: 'networkidle', timeout: 300000 });
        await page.locator('id=login2').click();
        // now provide userName and password
        await page.locator('#loginusername').fill("pavanol");
        await page.locator('#loginpassword').fill("test@123");
        // click on login button-->
        await page.locator('[onclick="logIn()"]').click();
        await expect(page.locator('#logout2')).toBeVisible();
        console.log("4");
        await page.context().storageState({ path: storageState });
        await browser.close();
    }
    catch (error) {
        console.error(error);
    }

};