//https://app.vwo.com/#/login

import {test, expect} from '@playwright/test';
test("#TC_01 Verify that the app.vwo login is not working and gives you an error with lazy, strict and auto wait concept", async ({page})=>{
        await page.goto("https://app.vwo.com/#/login");
        //Default Locators
        //id, name, className, Tag, Custom Locator(Via CSS Selector)
        // CSS Selector => Browser -CSS Engine, help you to find the element
        //By using default locators
        //Id -> #id
        //class name -> .classname
        //name -> [name = "value"]
        //tag -> [tagname]
        // xpath -> tagname[@type = 'value']
        //<input 
        // type="email" 
        // class="text-input W(100%)" 
        // name="username" 
        // vwo-html-translate-attr="placeholder" 
        // vwo-html-translate-placeholder="login:enterEmailID" 
        // id="login-username" 
        // data-qa="hocewoqisi" 
        // placeholder="Enter email ID">

        // lazy evaluation
        let userNameField = page.locator("#login-username");
        let passwordField = page.locator("#login-password");
        let buttonField = page.locator("#js-login-btn");

        //Now playwright finds the element and acts(auto-wait)
        await userNameField.fill("admin@admin.com");
        await passwordField.fill("pass123");
        await buttonField.click();

        console.log("All actions completed");
        let error_message = page.locator("js-notification-box-msg");
        //error_message.getByText();
        await expect(error_message).toContainText("Your email, password, IP address or location did not match");
        
});         