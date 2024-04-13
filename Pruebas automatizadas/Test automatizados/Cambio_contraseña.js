const { Builder, By, Key, until } = require('selenium-webdriver');
const fs = require('fs');

async function changePasswordTest() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {

        await driver.get('/Task manager/change_password.html'); 

        await driver.wait(until.elementLocated(By.id('current-password')), 5000);

        await driver.findElement(By.id('current-password')).sendKeys('Hermes01');
        await driver.findElement(By.id('new-password')).sendKeys('Hermes02');
        await driver.findElement(By.id('confirm-password')).sendKeys('Hermes02', Key.RETURN);

        await driver.wait(until.urlContains('index.html'), 5000);

        let currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('index.html')) {
            console.log('Password change successful');
        } else {
            console.log('Password change failed');
        }

        const screenshot = await driver.takeScreenshot();

        const screenshotPath = 'screenshots/screenshot.png';
        fs.writeFileSync(screenshotPath, screenshot, 'base64');
        console.log('Screenshot taken and saved at:', screenshotPath);
    } finally {

        await driver.quit();
    }
}

changePasswordTest();