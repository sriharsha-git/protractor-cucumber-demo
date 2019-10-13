var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status } = require('cucumber');


BeforeAll(() => {
    browser.driver.manage().window().maximize();

});

After(function (scenario) {
    let self = this;
    if (scenario.result.status === Status.FAILED) {
        return browser.takeScreenshot().then(function (screeshot) {
            let decodedImage = new Buffer(screeshot.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
            self.attach(decodedImage, 'image/png')
        });
    }

})