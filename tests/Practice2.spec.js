const {test,expect} = require ('@playwright/test')


test.only('DemoSiteAutomation' , async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')


    await page.locator('id=name').fill('Admin')
    await page.getByPlaceholder('Enter Name').fill('Admin')   //getByPlaceholder, if an element has placeholder attribute 
    await page.type('id=email','admin123@abc.com')
    page.fill('id=phone', '123456')
    await expect(await page.getByText('Double click on button, the text from Field1 will be copied into Field2.')).toBeVisible() 
    //await page.getByRole('button', {name:'gender'}).click();
    await page.waitForTimeout(4000)
    //await page.screenshot({path:'Screenshots/abc.png'});
    //await page.close();

    let countries = await page.$$("//select[@id='country']/child::option")

    for(let x of countries) {
        
    }


})



test('Locatinglogo' , async({page})=>{

    //page method to locate an image if it has alt text
    await page.goto('https://www.amazon.in')
    await page.waitForTimeout(6000)
    const logo = await page.getByAltText('Wishlist now')
    //applying assertion
    await expect(logo).toBeVisible();

})

test('Logo' , async({page})=>{

    //page method to locate an image if it has alt text
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //await page.waitForTimeout(6000)
    const logo = await page.getByAltText('company-branding')
    //applying assertion
    await expect(logo).toBeVisible();

})