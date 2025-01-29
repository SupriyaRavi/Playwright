const { test, expect } = require('@playwright/test');

test('Launch login page', async ({ page }) => {
    // Navigate to the login page
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'domcontentloaded' });
    

    // Wait for the username field to be visible
    //await page.waitForSelector('input[placeholder="Username"]', { state: 'visible' });

    // Fill in username and password
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[type="password"]').fill('admin123');

    // Click the login button
    await page.locator('button[type="submit"]').click();

    // Wait for the dashboard element after login
    await page.waitForSelector('//h6[text()="Dashboard"]', { state: 'visible' });

    // Verify successful login by checking the URL
    await expect(page).toHaveURL(/dashboard/);
});
