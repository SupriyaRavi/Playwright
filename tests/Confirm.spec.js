const{test,expect} = require('@playwright/test')

test('Confirm Alert' , async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    //await page.waitForTimeout(3000)
    await page.locator('a[href="#CancelTab"]').click();

    
    page.on('dialog' , async Box =>{

        let type = await Box.type();
        expect(type).toContain('confirm')
        //await page.waitForTimeout(3000)

        let msg = await Box.message()
        expect(msg).toContain('Press a Button !')
        //await page.waitForTimeout(3000)
        await Box.dismiss()
    })
    //trigger 

        await page.click('//button[@class="btn btn-primary"]')    
        //await page.waitForTimeout(3000)
        await page.pause();

        const result = await page.locator('//p[@id="demo"]').textContent()
        expect(result).toContain('You Pressed Cancel')
        await page.pause()

    
})