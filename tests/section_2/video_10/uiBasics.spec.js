const {test, expect} = require('@playwright/test')

test("assertion test", async function({browser}){
   const context = await browser.newContext(); 
  const page = await context.newPage(); 
  await page.goto("https://rahulshettyacademy.com/");
  // Now here what you need to do just get the title and assert that title.
  // first how to get the title-->
  console.log(await page.title());
  // assertions documet--> https://playwright.dev/docs/test-assertions
  // so this assertion comes form playWright only. we do not need any thirdparty API for assertions like TestNG.
  await expect(page).toHaveTitle("Selenium, API Testing, Software Testing & More QA Tutorials  | Rahul Shetty Academy");  
});
// Note : So basically you can control the browser from the "playWright.config.js" file.
// Note : so from configuration itSelf you can make your test cases run in headMode.
/**
 * use: {
    browserName : 'firefox',
    headless:false
 */
