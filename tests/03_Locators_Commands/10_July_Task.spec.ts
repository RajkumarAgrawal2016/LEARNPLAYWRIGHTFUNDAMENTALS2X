import {test, expect} from '@playwright/test';

test("10 Jult task to find xpath of https://katalon-demo-cura.herokuapp.com/", async ({page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");

    let makeAppointment = page.locator("xpath = //a[@id = 'btn-make-appointment']");
    await makeAppointment.click();

    let demoacc_username = page.locator("xpath = //input[@value= 'John Doe']");
    let demoacc_password = page.locator("xpath = //input[@value= 'ThisIsNotAPassword']");

     let userName = page.locator("xpath = //input[@id= 'txt-username']");
    let passWord = page.locator("xpath =//input[@id= 'txt-password']");

    let subButton = page.locator("xpath =//input[@id= 'btn-login']");

        await demoacc_username.fill("John Doe");
        await demoacc_username.fill("ThisIsNotAPassword");
        await subButton.click();

});