import {test, expect} from '@playwright/test';

test("This is my first PW test", async ({page},testInfo)=>{
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");
    //expect(testInfo.title).toBe('Login - Wingify'); //It check test case title

});