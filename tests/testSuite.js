const { test, expect } = require('playwright');
const loginFixture = require('./loginFixture/loginfixture');

test.describe("Test Suite", () => {
  // Share the same context with the logged-in session
  test.use(loginFixture);

  test("Test Case 1", async ({ page }) => {
    // Your test logic for test case 1
  });

  test("Test Case 2", async ({ page }) => {
    // Your test logic for test case 2
  });

  // Add more test cases as needed
});
