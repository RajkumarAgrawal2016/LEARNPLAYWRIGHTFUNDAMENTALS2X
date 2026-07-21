import{test, expect} from '@playwright/test';

test("Verify URL chnages with username and password", async ({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const emailinput = page.locator("//input[@id='email']");
    const passinput = page.locator("//input[@id='password']");

    await emailinput.fill("abc@abc.com");
    await passinput.fill("password");
    
    await page.getByRole('checkbox',{ name: 'remember' }).check();
    const button1 = page.locator("//button[@class = 'login-btn']");
    await button1.click();

    //await page.pause();

    //verify the url after login
    await expect(page).toHaveURL(/yes#login-success/);
    console.log("Login successfull")
    

        
});