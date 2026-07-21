import{test, expect} from '@playwright/test';

test("Verify Element by Filter", async ({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const forgottenPasswordLink= (await page.locator("a.list-group-item").filter({hasText:"Forgotten Password"}));
    //filter("/^Forgotten/") also can we use
    await forgottenPasswordLink.click();
    const accountLink = page.locator("a.list-group-item");
    await expect(accountLink).toHaveCount(13);// find count of links
    //await page.pause();

    const privacyLink = page.locator("footer a").filter({hasText: 'Privacy Policy'});
    await expect(privacyLink).toHaveAttribute('href','#privacy-policy');



});