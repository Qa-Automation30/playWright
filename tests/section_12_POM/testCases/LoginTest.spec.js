const {test, expect } = require('@playwright/test')
const{Login}=require('../pages/Login')

test("Login Test", async function ({ browser }){
    const context = await browser.newContext();
    const page = await context.newPage();
    // first to create the object of login page and pass the "page" via Login page constrauctor
    const loginPage = new Login(page);
    // now you need to land on the login page
    loginPage.goToLoginPage();
    // now you need to enetr userName and password
    loginPage.validLogin("anshika@gmail.com","Iamking@000");

    await page.locator(".card-body b").first().waitFor();
    //it will get all the card-body
    const productList = page.locator(".card-body");
    // so now need to select product "ZARA COAT 3" from the dashboard and add to cart as well 
    const count =await productList.count();
    console.log(count);
    await page.pause();
});