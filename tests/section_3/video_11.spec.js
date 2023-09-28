//video 11 and 12 are covered here

// npx playwright test video_10 --headed

// expect:{
//     timeout :10000
//   },

// What does the mean of above statement : it means that -> the timeout for all assertions would be 10 seconds and it is declared in "playWright.config.js" file.

const {test, expect} = require('@playwright/test')
test("second test", async function({browser}){
    const context = await browser.newContext();
   const page = await context.newPage(); 
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   // This section is all about the locators in PlayWright-->
   // Note : PlayWright supports "CSS selector" and "Xpath" so with the help of these two you can identify your webelement
   /**
    * There is some rules to write the CSS selector->
    * 1) If "Id" is present -> css-> tagName#id (OR) #id
    * 
    * 2) if "class" is present -> css-> tagName.class (OR) .class
    * 
    * 3) write CSS based on any "attribute" -> css-> [attribute='value']
    * 
    * 4) write Css with traversing from parent to child -> css-> parentTageName>>childTageName
    * 
    * 5) if needs to write the locator based on text -> text=''
    */
   /**
    * below method which help us to locate any element on the Web page, so inside the locator() method we need to pass selector.
    *  page.locator('#username');  so this "#username" is the selector
    * and once you find the selector the page then you need to send the some value in the text box, so how you will do it.
    * You can use type() metod.
    */
    await page.locator('#username').type("rahulshetty"); 
    await page.locator('input#password').type('password');
    await page.locator("[type='submit']").click()
    // so after click on submit button you need to verify the message,which turns for only 1 seconds.
    // and also extract the message as well. so "textContent()" method helps us to reterive the message.
   var message = await page.locator("[style='display: block;']").textContent();
   console.log(message);
   // Now it's time to assert the message.   --> https://playwright.dev/docs/test-assertions 
   // refer the documentation.
   await expect(page.locator("[style='display: block;']")).toContainText("Incorrect username/password.")
 });