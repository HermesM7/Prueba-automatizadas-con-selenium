const { Builder, By, Key, until } = require('selenium-webdriver');
const fs = require('fs');

async function forgotPasswordTest() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {

        await driver.get('/Task manager/forgot_password.html'); 

        await driver.wait(until.elementLocated(By.id('email')), 5000);

        await driver.findElement(By.id('email')).sendKeys('hermesrafaelmateo01@gmail.com', Key.RETURN);

        await driver.sleep(2000);

        console.log('Recovery email sent');

        const screenshot = await driver.takeScreenshot();

        const screenshotPath = 'screenshots/screenshot.png';
        fs.writeFileSync(screenshotPath, screenshot, 'base64');
        console.log('Screenshot taken and saved at:', screenshotPath);
    } finally {

        await driver.quit();
    }
}

forgotPasswordTest();
