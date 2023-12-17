// In this scenario we need to extract all the text from the WebElements
// This is very imp video need to watch again and again

const { test, expect } = require('@playwright/test')

test("valid userName and password test", async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // Now what you need to do, you need to remove or erase wrong cred from both the input boxes so you have to use fill("") method
    await page.locator("[name='username']").fill("");
    await page.locator("[name='username']").fill("rahulshettyacademy");
    // removing the existing text from the input box, so used fill("") method like this
    await page.locator("[type='password']").fill("");
    // now here entering valid password in input box using fill() method
    await page.locator("[type='password']").fill("learning");
    await page.locator("[type='submit']").click()
    // below condition, I have put becuase if I dont put this here, the line number 26 retrun the empty Array of list, you can remove the below line and see the outcome.
    // But why we need to put this specific line of code with either nth(0) element or with first() using textContent() method -->because as per the documention 
    // textContent() action having autoWait functionality.
    // but as per the documentation allTextContents() doesnt have any autoWait functionality
    // documnet you can see from >> https://playwright.dev/docs/actionability
     await page.locator(".card-body a").nth(0).textContent();
    // here I want all the titles of the cards-> so there is one method in PlayWright "allTextContents()". -> so this method will return the titles of each card
    // this will return an array of element-> [ 'iphone X', 'Samsung Note 8', 'Nokia Edge', 'Blackberry' ]
    const allTitles = await page.locator(".card-body a").allTextContents();
    console.log(allTitles);
});