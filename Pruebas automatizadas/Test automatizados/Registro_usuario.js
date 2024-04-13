const { Builder, By, Key, until } = require('selenium-webdriver');
const fs = require('fs');

async function registerTest() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {

        await driver.get('/Task manager/Register.html');

        await driver.wait(until.elementLocated(By.id('new-username')), 5000);

        await driver.findElement(By.id('new-username')).sendKeys('Hermes');
        await driver.findElement(By.id('new-password')).sendKeys('Hermes01');

        await driver.wait(until.urlContains('index.html'), 5000);

        let currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('index.html')) {
            console.log('Registration successful');
        } else {
            console.log('Registration failed');
        }

        const screenshot = await driver.takeScreenshot();

        const screenshotPath = 'screenshots/screenshot.png';
        fs.writeFileSync(screenshotPath, screenshot, 'base64');
        console.log('Screenshot taken and saved at:', screenshotPath);
    } finally {

        await driver.quit();
    }
}

registerTest();