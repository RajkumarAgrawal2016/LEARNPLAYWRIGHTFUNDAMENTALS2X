import{test, expect} from '@playwright/test';

test("Orange HRM Webtable Find First Terminated Employee", async ({page})=>{
    page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.locator("//input[@name= 'password']").fill("Awesomeqa@4321");
    await page.locator("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();

    await expect(page).toHaveURL("https://awesomeqa.com/hr/web/index.php/pim/viewEmployeeList");

    await page.locator("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").click();

    await page.locator();






})