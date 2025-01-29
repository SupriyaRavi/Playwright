const {test,expect} = require('@playwright/test')

test('Webtable' , async ({page})=>{

await page.goto("https://letcode.in/advancedtable")

let rows = await page.locator('//table[@id="advancedtable"]/tbody/tr')

let rowCount = await rows.count();
console.log("Rows Count " + rowCount)


let columns = await page.locator('[id="advancedtable"] thead tr th')
let columnCount = await columns.count();
//console.log("Columns Count: " +columnCount)
console.log(`Columns Count : ${columnCount}`)           //printing using backtick


let Specific_Row = await page.locator('//table[@id="advancedtable"]/tbody/tr[3]/td')
let text = await Specific_Row.allTextContents();
console.log(`Row data : ${text}`)



for (let i=1;i<=rowCount;i++) {
    let allData = await page.locator(`//table[@id="advancedtable"]/tbody/tr[${i}]/td`).allTextContents();
    console.log(`Row ${i} : ${allData}`)

}


})