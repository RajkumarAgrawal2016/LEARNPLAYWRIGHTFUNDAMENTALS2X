import{test, expect, FrameLocator,Locator} from '@playwright/test';

test("Basic Test verify vehicle iframe", async ({page})=> {
    await page.goto("https://selectorshub.com/iframe-scenario/");
    const ifrme1: FrameLocator = await page.frameLocator("#pact1");
    const ifrme2: FrameLocator = await ifrme1.frameLocator("#pact2");
    const ifrme3: FrameLocator = await ifrme2.frameLocator("#pact3");

    await ifrme1.locator('#inp_val').fill('Aishwarya Rai');
    await ifrme2.locator('#jex').fill('Wife');
    await ifrme3.locator('#glaf').fill('Playwright');

});