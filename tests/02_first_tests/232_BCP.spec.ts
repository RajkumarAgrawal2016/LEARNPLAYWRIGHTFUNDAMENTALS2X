import{chromium,Browser, BrowserContext, Page} from 'playwright';  //these are present in playwright library

async function run(){
    // Level 1: Launch Browser
    let browser : Browser = await chromium.launch({headless:false});
    console.log("Browser launched",browser);
    //Level2: Create context -fresh session, isolated cookies
    let context1:BrowserContext = await browser.newContext();
    console.log("Context launched", context1);
  
    let context2:BrowserContext = await browser.newContext();
    console.log("Context launched", context2);
   //Level3: Open page- a tab inside context
    let page1: Page = await context1.newPage();
    console.log("Page opened",page1);
    let page2: Page = await context1.newPage();
    console.log("Page opened",page2);
    let page3: Page = await context1.newPage();
    console.log("Page opened",page3);

    await page1.goto("https://app.vwo.com");
    console.log("Title:", await page1.title);

    //clean
    await page1.close();
    await context1.close();
    await browser.close();
}