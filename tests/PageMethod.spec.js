const{test , expect} = require('@playwright/test');

test('Launch Facebook', async ({ page }) => {
    //await page.goto('https://www.facebook.com/');
    // await page.goto('https://dev.to/')
    // await page.goto('https://www.redbus.in/')

    // await page.goBack(); //go back to the previous site
    // await page.goForward(); //to go to the next Url

    // let currentUrl = await page.url();
    // console.log(currentUrl)

    // let currentTitle = await page.title();
    // console.log(currentTitle);

    // await page.pause(); //pause at the last url and we have to manually close it 
    

    //await page.goto('https://www.instagram.com/accounts/login/');
    // await page.waitForTimeout(3000);
    // await page.locator('input[type="tel"]').fill('9123456789');
    // await page.locator('.submitBottomOption').click();
    //await page.fill('name=password' , '1234')
    //await page.waitForTimeout(3000);

    await page.goto('https://www.myntra.com/login?referer=https://www.myntra.com/');
    await page.waitForTimeout(3000);
    //await page.locator(//input[@aria-label='Phone number, username, or email']).fill('Supriya');
    
})
