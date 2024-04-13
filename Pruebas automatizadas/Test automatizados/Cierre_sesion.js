const { Builder, By, until } = require('selenium-webdriver');
const fs = require('fs');

async function logoutTest() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {
 
        await driver.get('/Task manager/Index.html'); 

        await driver.wait(until.elementLocated(By.id('username')), 5000);

        await driver.findElement(By.id('username')).sendKeys('user');
        await driver.findElement(By.id('password')).sendKeys('password');

        await driver.findElement(By.css('input[type="submit"]')).click();

        await driver.wait(until.urlContains('dashboard.html'), 5000);

        let currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('dashboard.html')) {
            console.log('Login successful');
        } else {
            console.log('Login failed');
            return;
        }

        await driver.findElement(By.id('logout-btn')).click();


        await driver.wait(until.urlContains('index.html'), 5000);

        currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('index.html')) {
            console.log('Logout successful');
        } else {
            console.log('Logout failed');
        }

        const screenshot = await driver.takeScreenshot();

        const screenshotPath = 'screenshots/screenshot.png';
        fs.writeFileSync(screenshotPath, screenshot, 'base64');
        console.log('Screenshot taken and saved at:', screenshotPath);
    } finally {

        await driver.quit();
    }
}

logoutTest();
