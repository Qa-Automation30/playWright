import { test, expect } from '@playwright/test';

test("this is for storage fixture",async({page,context})=>{
    await page.goto("/");
    console.log("Need to watch again login or not")
    await page.waitForTimeout(20000);
});