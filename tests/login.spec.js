// tests/login.spec.js
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { InventoryPage } from "../pages/InventoryPage.js";
import users from "../data/users.json" with { type: "json" };

users.forEach((user) => {
  const { username, password, expected } = user;

  test(`${expected}: login with ${username} / ${password}`, async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(username, password);
    if (expected === 'success') { 
      expect(await inventoryPage.isLoaded()).toBe(true);

    } else if (expected === 'error') {
      const errorText = await loginPage.getErrorMessage();

      // Check that the error message is not empty.
      expect(errorText).not.toBe('');
    }
  });
  
});