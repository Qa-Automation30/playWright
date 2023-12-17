// npx playwright test video_24 --debug
// No need to watch video 24
// video 25, 26,27 are covered here
/**
 * From here we are performing some end to end scenarios and this whole section from 25th to 31st is imp
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
     * So here the catch is, if your locator is returning more than one element and you need to put a wait condition on it, so for that you have to either use first() or nth() or last().
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
   await page.locator("[placeholder='Select Country']").pressSequentially("in",{delay:200})
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
 // From here continuation of video 28-->
   // this is the validation that email id have similiar text or not which we have passed
   await expect(page.locator(".user__name label[type='text']")).toHaveText("anshika@gmail.com")
   //now click on place oreder button
   await page.locator(".action__submit").click();
   //now move to anoter page and verify and put an assetion-->
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ")
   // got the order Id and print into the console ----> textContent() method used to get the value in console.
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
   // now you have to verify that order id is getting displayed on order table or not.
   // from now video 30 is playing
   // you need to watch again -. I just keep the code from there, but you have to watch it again
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows =  page.locator("tbody tr");

   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
    await page.pause();
});