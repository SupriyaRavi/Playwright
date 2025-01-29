const {test,expect}= require('@playwright/test')

test('Sample', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    await page.locator('a[href="#CancelTab"]').click();
    await page.waitForTimeout(3000)
})