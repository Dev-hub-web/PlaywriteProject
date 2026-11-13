import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { chromium } from '@playwright/test';




test('User can login successfully', async () => {
 // Connect to the MCP server
 const browser = await chromium.connect({ wsEndpoint: 'ws://localhost:62762/' });

 // Create a new browser context and page
 const context = await browser.newContext();
 const page = await context.newPage();
    // Initialize Page Object
    const loginPage = new LoginPage(page);

    // Navigate to login page
    await loginPage.navigate();

    // Perform login
    await loginPage.login('standard_user', 'secret_sauce');

    // Verify successful login
    await expect(page).toHaveURL(/inventory/);

    // Verify products page
    await expect(page.locator('.title')).toHaveText('Products');

});