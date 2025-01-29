const{test,expect} = require('@playwright/test')


test('DropdownValidation' , async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')



let countries = await page.$$("//select[@id='country']/child::option")

    for(let x of countries) {
      
        let data = await x.textContent();
        console.log(data)
    }

})


test.only('DropdownValidation2' , async({page})=>{
    await page.goto('https://www.facebook.com/r.php?locale=en_GB&display=page')

let Months = await page.$$("//select[@aria-label='Month']/child::option")

for (let month of Months) {

    let data = await month.textContent()
    console.log(data)
}


})
