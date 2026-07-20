import {test, expect} from '@playwright/test';

test("Basic verify how to handle multiple elements", async({page})=>{
    //navigate to the page
    //Find the locator which gives all the element and text
    //Loop through it and find the  one which we want to click 

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinkTests: string[] = await page.locator("a.list-group-item").allInnerTexts();
    
    console.log(rightPanelLinkTests.length);
    for (const link of rightPanelLinkTests){
        console.log(link);
    }
    for(const linkText of rightPanelLinkTests){
        if(linkText === "Forgotten Password"){
            await page.getByText(linkText).first().click();
        }
    }
    const rightPanelLinkLinks = await page.locator("a.list-group-item").all();
    for (const link of rightPanelLinkLinks){
        console.log(await link.getAttribute("href"));
    }
});