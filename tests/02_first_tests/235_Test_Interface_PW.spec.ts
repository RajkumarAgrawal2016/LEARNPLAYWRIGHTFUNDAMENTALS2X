import {test, expect} from '@playwright/test';

test("login test", async ({page})=>{
    await page.goto("https://app.vwo.com/#signin");
    await page.fill("#username","admin");
    await page.fill("#password","pass123");
    await page.click("#login-btn");

    await expect(page).toHaveTitle("/dashboard");
})
test("Another test", async ({page})=>{
    await page.goto("https://app.vwo.com/#signup");
    await page.fill("#username","admin");
    await page.fill("#password","pass123");
    await page.click("#login-btn");

    await expect(page).toHaveTitle("/dashboard");
})