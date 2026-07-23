import{test, expect, FrameLocator} from '@playwright/test';

test("Basic Test verify vehicle iframe", async ({page})=> {
    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
    let vehicalFrame: FrameLocator = await page.frameLocator("#frame-one");

    await vehicalFrame.locator("#RESULT_TextField-1").fill("Hyundai i10");
    await vehicalFrame.locator("#RESULT_TextField-2").fill("Rajkumar A");
    await vehicalFrame.locator("#RESULT_TextField-3").fill("2012");
    await vehicalFrame.locator("#RESULT_RadioButton-1").selectOption("Hatchback");

     await vehicalFrame.locator("#RESULT_TextField-4").fill("2015");
     await vehicalFrame.locator("#RESULT_TextArea-1").fill("Amazing car with amazing family cr in a budget");

     await vehicalFrame.getByText("Submit registration",{exact: true}).click();

     let output= await vehicalFrame.locator("#vehicle-output").innerText();
     console.log(output);
     await page.pause();
});