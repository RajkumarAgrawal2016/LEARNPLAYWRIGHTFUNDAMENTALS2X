import {chromium} from 'playwright';

async function multiUserTest(){
    let browser = await chromium.launch({headless: false});

    //admin
    let adminContext = await browser.newContext();
    let adminpage = await adminContext.newPage();
    await adminpage.goto("https://app.vwo.com/login");
    console.log("Admin: on login page");

       //Viwer
    let viwerContext = await browser.newContext();
    let ViwerPage = await adminContext.newPage();
    await ViwerPage.goto("https://app.vwo.com/login");
    console.log("Viwer: on login page");

    await adminContext.close();
    await viwerContext.close();
    await browser.close();
}
multiUserTest();