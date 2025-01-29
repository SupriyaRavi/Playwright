const{test,expect,chromium} = require ('@playwright/test')


test('Multiple tabs and Window' , async ()=>{

    let browser = await chromium.launch();
    let contextA = await browser.newContext();


    let tabA1 = await contextA.newPage();
    await tabA1.goto('https://testautomationpractice.blogspot.com/')

    // let tabA2 = await contextA.newPage();
    // await tabA2.goto('https://www.myntra.com/')

    // let tabA3 = await contextA.newPage();
    // await tabA3.goto('https://www.flipkart.com/')

    let tabA4 = await contextA.newPage();
    await tabA4.goto('https://in.bookmyshow.com/')

    let tabA5 = await contextA.newPage();
    await tabA5.goto('https://playwright.dev/docs/locators/')

    await tabA1.bringToFront();

    const next = await contextA.waitForEvent('page')

    await tabA1.click("//a[text()='Blogger']")


    // const newPage = await Promise.all([
    //     contextA.waitForEvent('page'),
    //     tabA1.click("//a[text()='Blogger']")
    // ]);

    await tabA1.waitForTimeout(5000)

    // let contextB = await browser.newContext();

    // let tabB1 = await contextB.newPage();
    // await tabB1.goto('https://testautomationpractice.blogspot.com/')

    // let tabB2 = await contextB.newPage();
    // await tabB2.goto('https://www.myntra.com/')

    // let tabB3 = await contextB.newPage();

    // await tabB3.goto('https://www.flipkart.com/')



  
    //tabA5.click('Search for Movies, Events, Plays, Sports and Activities' , 'My movie')
})