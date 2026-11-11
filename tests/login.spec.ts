import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('User can login successfully', async ({ page }) => {

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