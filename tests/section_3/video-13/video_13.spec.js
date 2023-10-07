// In this scenario we need to pass valid userName and password

const { test, expect } = require('@playwright/test')

test("valid userName and password test", async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    /**
     * Note : PlayWright have two ways to enter the text in input box 
     * 1) type() method -> it just simply write into the text box
     * 2) fill("") method -> if you write like this, means inside the fill method if you pass only double quots, it will erase the existing text in the textbox.
     * 3) fill("entered Test here") -> this will do the same as type() method.
     */
    // here you have entered wrong userName and password
    await page.locator('#username').type("rahulshetty");
    await page.locator('input#password').fill('password');
    // Now what you need to do, you need to remove or erase wrong cred from both the input boxes so you have to use fill("") method
    await page.locator("[name='username']").fill("");
    await page.locator("[name='username']").fill("rahulshettyacademy");
    // removing the existing text from the input box, so used fill("") method like this
    await page.locator("[type='password']").fill("");
    // now here entering valid password in input box using fill() method
    await page.locator("[type='password']").fill("learning");
    await page.locator("[type='submit']").click()
    // here why used the nth(0) -> so the answer is, the selector you have written here will return the number of webElements and you only need 1st one so use ".nth(0)".
    const meassge = await page.locator(".card-body a").nth(0).textContent();
    /**
     * Note : if you want to access first eelement from all you can also use .first() inplace of .nth(0)
     * like this way--> "const meassge = await page.locator(".card-body a").first().textContent();"
     * ===============================================================================================
     * Note : You dont have any kind of second() of third() one, you have only first() and last() method to extract webElements fron list
     * so if you want to access in b/w you can use "nth(2), nth(3)" like this way from any position.
     */
    console.log(meassge);
});