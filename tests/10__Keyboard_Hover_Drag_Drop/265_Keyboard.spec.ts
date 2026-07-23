import{test, expect, FrameLocator,Locator} from '@playwright/test';

test("Keyboard", async ({page}) => {
    await page.goto("https://www.toptal.com/developers/keycode");

    await page.keyboard.press("A");
    await page.screenshot({path: 'A.png'});

    await page.keyboard.press('ArrowLeft');
     await page.screenshot({path: 'ArrowLeft.png'});

         await page.keyboard.press('ArrowRight');
     await page.screenshot({path: 'ArrowRight.png'});

         await page.keyboard.press('Shift+O');
     await page.screenshot({path: 'O.png'});

              await page.keyboard.up('Shift');
              await page.keyboard.down('Shift');
     await page.screenshot({path: 'Shift.png'});
});