import { test, expect } from '@playwright/test';

test("this is for storage fixture",async({page,context})=>{
    await page.goto("/");
    console.log("no need to login again")
    await page.waitForTimeout(10000);
    
    // Clear cookies for the current context
    await context.clearCookies();

  // Clear local storage
  await page.evaluate(() => {
    localStorage.clear();
  });

  // Clear session storage
  await page.evaluate(() => {
    sessionStorage.clear();
  });
  await page.goto("/");
  console.log("Need to login again")
  await page.waitForTimeout(10000);
});