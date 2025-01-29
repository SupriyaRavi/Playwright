const {test,expect} = require('@playwright/test')


test.only('Assertions' , async({page})=>{

    await page.goto('https://demo.automationtesting.in/Register.html')



    // let Reg = await page.title()
    // await expect(page).toHaveTitle(Reg)

    // await expect(page).toHaveTitle('Register')

    // let currentUrl = await page.url()
    // await expect(page).toHaveURL(currentUrl)

    // await expect(page).toHaveURL('https://demo.automationtesting.in/Register.html')


    //let myIcon = await page.locator('//img[@id="imagetrgt"]')
    //await expect(myIcon).toBeVisible();


    let MyValue = await page.locator('First Name')
    await expect(MyValue).toBeEnabled();



    

    
})


test('AssertionsUsingFlipkart' , async({page})=>{

    await expect(page).toHaveURL('https://www.flipkart.com/')
    
    await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
    
    const logoElement = await page.locator('//img[@title="Flipkart"]')
    await expect.soft(logoElement).toBeVisible


    await page.goto('https://www.flipkart.com/motorola-g85-5g-olive-green-128-gb/p/itm1c4b849213a0e?pid=MOBHY9PQMNCMDVCD&lid=LSTMOBHY9PQMNCMDVCDI6UUHQ&marketplace=FLIPKART&q=motorola+mobiles&store=tyy%2F4io&spotlightTagId=BestsellerId_tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=e4e77280-bb1d-4917-9ec8-7489f5d354d2.MOBHY9PQMNCMDVCD.SEARCH&ppt=sp&ppn=sp&ssid=etx5m2zxhc0000001737518823702&qH=63c7eed1de4a5737')
    const SearchBox = await page.locator('//input[@placeholder="Search for products, brands and more"]')
    await expect(SearchBox).toBeEnabled


    const buyRadioButton = await page.locator('//input[@id="BUY_WITHOUT_EXCHANGE"]')
    //await buyRadioButton.waitFor({ state: 'visible' });
    await page.waitForTimeout(4000);
    
    //await buyRadioButton.scrollIntoViewIfNeeded();
    await buyRadioButton.check();

    
    //await expect(buyRadioButton).toBeChecked();

    
    await page.waitForTimeout(4000);
})