// No need to watch video 24
// video 25 and 26 are covered here
/**
 * From here we are performing some end to end scenarios
 */
//===========================================================================
const { test, expect } = require('@playwright/test')

test("end to end scenarios", async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    // Navigate to this URL
    await page.goto("https://rahulshettyacademy.com/client");
    // enter the correct userName and password and click on signIn button
    await page.locator("#userEmail").type("anshika@gmail.com")
    await page.locator("#userPassword").type("Iamking@000")
    await page.locator("[type='submit']").click();
    // this below line is very imp and need to underStand the concept of waitFor()
    /**
     * So here the catch is, if your locator is returning morethan one element and you need ti put a wait condition on it, so for that you have to either use first() or nth() or last().
     * because the reason is waitFor() only works with single element. If you want to see the error you have to remove first() and then try to execute it
     */
    await page.locator(".card-body b").first().waitFor();
    //it will get all the card-body
    const productList = page.locator(".card-body");
    // so now need to select product "ZARA COAT 3" from the dashboard and add to cart as well
    const count =await productList.count();
    console.log(count);
    // dynamically find the element and click on add to cart
    for (let i = 0; i < count; i++) {
        console.log(await productList.nth(i).locator("b").textContent());
        if (await productList.nth(i).locator("b").textContent() === "zara coat 3") {
            //add the logic-> how to add into cart
            await productList.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    // as of now product is added to the cart, so need to move to cartsPage
    await page.locator("[routerlink='/dashboard/cart']").click();
    // this has-text concept is imp
   const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
   // this is assertion
   console.log(bool)
   expect(bool).toBeTruthy;
   // Now my next step is checkout-->
   await page.locator("//button[text()='Checkout']").click()
   // so now the catch is here dynamic dropdown--> how to handle it
   // .type("india",{delay:200})  -> this is concpet where you need to type on some delay
   await page.locator("[placeholder='Select Country']").type("in",{delay:200})
   // so now wait until the suggestion box gets open
   const dropdown =  page.locator("section.ta-results");
   await dropdown.waitFor();
   // now you have to select one option from the List
   const countOne = await dropdown.locator("button").count();
   for (let i = 0; i < countOne; i++) {
   const text =  await dropdown.locator("button").nth(i).textContent();
   if(text===" Suriname"){
    await dropdown.locator("button").nth(i).click();
    break;
   }
}
    await page.pause();
});