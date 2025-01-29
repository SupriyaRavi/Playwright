const {test,expect} = require('@playwright/test')


test('FileUpload' , async ({page})=>{

await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')


// //Single file upload
await page.locator('//input[@id="filesToUpload"]').setInputFiles('D:/Learning/FileUpload/Sample.txt')
// await page.waitForTimeout(3000)

// //multiple file upload
// await page.locator('//input[@id="filesToUpload"]').setInputFiles(['D:/Learning/FileUpload/Sample.txt','D:/Learning/FileUpload/Sample2.txt','D:/Learning/FileUpload/Sample3.txt'])
// await page.waitForTimeout(3000)


//removing files 

await page.locator('//input[@id="filesToUpload"]').setInputFiles([])
await page.waitForTimeout(3000)

})