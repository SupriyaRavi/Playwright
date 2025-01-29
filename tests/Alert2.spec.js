const{test,expect} = require('@playwright/test')

test('Confirm Alert', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');
  //await page.waitForTimeout(3000);

  // Navigate to "Alert with OK & Cancel"
  await page.locator('//a[text() = "Alert with OK & Cancel"]').click()

})