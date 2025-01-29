const{test , expect} = require('@playwright/test');

test('Launch Facebook', async ({ page }) => {
    await page.goto('https://www.facebook.com/');

})
