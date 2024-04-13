const { Builder, By, Key, until } = require('selenium-webdriver');
const fs = require('fs');

async function loginTest() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {

        await driver.get('/Task manager/Index.html'); 

        await driver.wait(until.elementLocated(By.id('username')), 5000);

        await driver.findElement(By.id('username')).sendKeys('Hermes');
        await driver.findElement(By.id('password')).sendKeys('Hermes01', Key.RETURN);

        await driver.wait(until.urlContains('dashboard.html'), 5000);

        let currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('dashboard.html')) {
            console.log('Login successful');
        } else {
            console.log('Login failed');
        }

        const screenshot = await driver.takeScreenshot();

        const screenshotPath = 'screenshots/screenshot.png';
        fs.writeFileSync(screenshotPath, screenshot, 'base64');
        console.log('Screenshot taken and saved at:', screenshotPath);
    } finally {

        await driver.quit();
    }
}

loginTest();