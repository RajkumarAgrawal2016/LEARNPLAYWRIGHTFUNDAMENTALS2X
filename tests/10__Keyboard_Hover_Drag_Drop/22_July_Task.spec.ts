import{test, expect, FrameLocator,Locator} from '@playwright/test';

test("Hower example", async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    await page.getByTestId('nav-add-ons').hover();
    //await page.pause();
    const wifi = await page.getByTestId('test-id-Wifi');
    console.log(wifi);
    wifi.click();

});