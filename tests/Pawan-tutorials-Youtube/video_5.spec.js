// https://playwright.dev/docs/locators
/**
page.getByRole() to locate by explicit and implicit accessibility attributes.

page.getByText() to locate by text content.

page.getByLabel() to locate a form control by associated label's text.

page.getByPlaceholder() to locate an input by placeholder.

page.getByAltText() to locate an element, usually image, by its text alternative.

page.getByTitle() to locate an element by its title attribute.

page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/

// Note : Should watch this video again and again for more understanding.

import {test,expect} from '@playwright/test'  // We can import like in this way as well. 
// Note : above two lines of code do the same thing

test('Locators', async ({ browser }) => {
    // Locator concepts -->
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

});