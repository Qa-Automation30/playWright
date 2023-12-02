// Note Video 8 and 9 covred here-->

const {test} = require('@playwright/test')
/**
 *  Note : 'ttt' this which I have written inside the function is called global fixture.
 * and this fexature comes form playWright module by default and this fexature is globally available to each and every test of your project.
 * So whenever you are creating test annotaion there are some fixed set of fixtures which will be automatically available
 * this 'ttt' can be 'browser' or 'page'
 * =====================================================================
 */
/**
 * test("first test", async function ({ ttt }) {
   ttt.newContext()
});
 */
test("second test", async function({browser}){
   // Note : the above browser information should be provided via "playwright.config.js" file. Means which browser you need to launch
   // So very first step you need to do set a "newcontext".
   // What is newContext here--> this method will help you to open a fresh browser without having cookies and plugins. [This will be like incoginto mode]
   const context = await browser.newContext(); // This will just open the instance of the browser only, but not the page.
   // so now you need to have a page from the context, so below setp is for the same.
  const page = await context.newPage(); // this newPage() method is responsible to on which you can perform your automation, means on this page you can hot your URL.
  await page.goto("https://rahulshettyacademy.com/"); // goto method is used for launch the browser
   
});

// Note : Once you create a PlayWright projtect there would be a default file named as "playwright.config.js". 
// Note : byDefault playWright run your TCs in headLess Mode. so how do in headMode--> npx playwright test vidoe_8 --headed
// Video 9 you need to watch again.