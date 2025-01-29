const {test,expect} = require('@playwright/test')


test('InBuiltMethods' , async ({page})=>{

await page.goto('https://demo.automationtesting.in/Register.html')


//await page.getByRole ('combobox' , {tabindex: '-1'}).click();
//await page.getByPlaceholder('First Name').fill('Admin123')
//await page.waitForTimeout(3000)



//let Reg = await page.title()
//await expect(page).toHaveTitle(Reg)

//await expect(page).toHaveTitle('Register')


//let currentUrl = await page.url()
//await expect(page).toHaveURL(currentUrl)

//await expect(page).toHaveURL('https://demo.automationtesting.in/Register.html')


let myIcon = await page.locator('//img[@id="imagetrgt"]')
await expect(myIcon).toBeVisible();



})