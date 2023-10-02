//const { test, expect } = require('@playwright/test')
import {test,expect} from '@playwright/test'  // We can import like in this way as well. 
// Note : above two lines of code do the same thing

test('Locators', async ({ browser }) => {
    // Locator concepts -->
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.demoblaze.com/");
    // click on login button---->
    await page.locator('id=login2').click();
    // now provide userName and password
    await page.locator('#loginusername').fill("pavanol");
    await page.locator('#loginpassword').fill("test@123");
    // click on login button-->
    await page.locator('[onclick="logIn()"]').click();
    // now after successful login 'Logout' button is present or not-->
    // this is the one way to validate that logout button is visible or not,when you check the documentation for toBeVisible() method, it will return void.
    await expect(page.locator('#logout2')).toBeVisible();
    // this is the second way to validate that logout button is visible or not-->
    // as if we used isVisible() method so it will return one boolean value.
    const result =  await page.locator('#logout2').isVisible();
    // so on the basis of result we can make our assertion.
    expect(result).toBeTruthy();
    // how to get all the titles of the cards, which is present on the page--->
    // in this case it will return more than one element --> so there is another way to write the locator which return multiple elements->
    const allProducts = await page.$$('.card-title a');
    // now iterate through the for loop to print one by one in console-->
    for(const product of allProducts){
        const productText = await product.textContent();
        console.log(productText);
    }
});