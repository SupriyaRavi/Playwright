const{test,expect} = require('@playwright/test')


test('Simple Alert' , async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')

    //enable 
    page.on('dialog' , async PopUp =>{
        let type = await PopUp.type(); //storing the PopUp type in the type variable 
        expect(type).toContain('alert')
        await page.waitForTimeout(3000)
        await PopUp.accept();
    })


    //trigger 
    await page.click('//button[@class="btn btn-danger"]')
    await page.waitForTimeout(3000)
    

})



test.only('Confirm Alert' , async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    
    //enable
    page.on('dialog' , async Box =>{

        let type = await Box.type();
        expext(type).toContain('confirm')
        await page.waitForTimeout(3000)

        let msg = await Box.message()
        expect(msg).toContain('Press a Button !')
        await page.waitForTimeout(3000)
        await Box.dismiss()

    //trigger 

        await page.click('//button[text()="click the button to display a confirm box ""]')    
        await page.waitForTimeout(3000)

        let result = await Box.message()
        expect(result).toContain('You Pressed Cancel')
        await page.pause()

    })
})


test('PopUp Alert' , async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')

})