/** 
 * Hooks - beforeEach, afterEach, beforeAll & afterAll
 * 
 * // This is very very imp and watch again and again
 */
import {test,expect} from '@playwright/test'

let page;

test.beforeEach(async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    console.log("This will execute before each test case");
});

test('Test case -1', async () => {
    console.log("This is the test-1");
});
test('Test case -2', async () => {
    console.log("This is the test-2");
});
test('Test case -3', async () => {
    console.log("This is the test-3");
});

test.afterEach(async()=>{
    console.log("This will execute after each test case");
});