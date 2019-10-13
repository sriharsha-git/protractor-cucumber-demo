var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var hooks = require('./hooks/ScreenShot')


Given('User launches {string}', (site) => {
    return browser.get(site);
});

When('User enters first number as {string}', function (number1) {
    return element(by.model("first")).sendKeys(number1);
});

When('User enters second number as {string}', function (number2) {
    return element(by.model("second")).sendKeys(number2);
});

Then('User clicks go button', function () {
    return element(by.id('gobutton')).click();
});

Then('result should be {string}', function (result) {
    return expect(element(by.css('h2[class=ng-binding]')).getText()).to.eventually.equal("3");
});