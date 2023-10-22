
import {test,expect} from '@playwright/test'

// Need to watch the video again
test.beforeAll(async()=>{
    console.log("This is before ALL");
});
test.beforeEach(async()=>{
    console.log("This is before Each");
});

test.describe("Group1",()=>{
    test('Test case -1', async () => {
        console.log("This is the test-1");
    });
    //==========================================
    test('Test case -2', async () => {
        console.log("This is the test-2");
    });
});

test.describe("Group 2",()=>{
test('Test case -3', async () => {
    console.log("This is the test-3");
});
//==========================================
test('Test case -4', async () => {
    console.log("This is the test-4");
});
});

test.afterEach(async()=>{
    console.log("This is after Each");
});
test.afterAll(async()=>{
    console.log("This is aftre All");
});


