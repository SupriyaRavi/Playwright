const {test,expect} = require('@playwright/test')

test('FileUpload' , async ({page})=>{

    await page.setDefaultTimeout(15000)
    await page.goto('https://www.myntra.com/')
    await page.locator


})
test('Mouse Actions' , async ({page})=>{
await page.setDefaultTimeout(15000)
await page.goto('https://testautomationpractice.blogspot.com/')
//await page.setDefaultTimeout(15000)

await page.mouse.wheel(0,1500);    //using mouse wheels to scroll in the page

let drag = await page.locator("//div[@id='draggable']")

let drop = await page.locator("//div[@id='droppable']")


//await page.dragAndDrop("//div[@id='draggable']" , "//div[@id='draggable']"); //using Xpath
//await page.dragAndDrop('#draggable' ,'#droppable' )   //using CSS
await drag.dragTo(drop) //using variables 

//await page.dragAndDrop("drag","drop")
await page.waitForTimeout(3000)



})



test('FileUpload' , async ({page})=>{
