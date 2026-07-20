import {test, expect} from '@playwright/test';

test("Basic verify how to handle multiple elements", async({page})=>{
    //navigate to the page
    //Find the locator which gives all the element and text
    //Loop through it and find the  one which we want to click 

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
   // const rightPanelLinkTests: string[] = await page.locator("a.list-group-item").allInnerTexts();
    await page.pause();
    await page.getByTestId('forgotten-password-link').click();
   await page.pause();
});