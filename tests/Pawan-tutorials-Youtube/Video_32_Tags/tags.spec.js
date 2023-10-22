
import {test,expect} from '@playwright/test'

    test('Test case -1 @sanity', async () => {
        console.log("This is the test-1 and belongs to sanity");
    });
    //==========================================
    test('Test case -2', async () => {
        console.log("This is the test-2");
    });


test('Test case -3', async () => {
    console.log("This is the test-3");
});
//==========================================
test('Test @sanity@reg case -4', async () => {
    console.log("This is the test-4");
});

//npx playwright test tags --grep "@sanity"





