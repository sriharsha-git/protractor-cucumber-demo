var { Given, Then, When, Before, BeforeAll, After, AfterAll, Status, setDefaultTimeout } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
setDefaultTimeout(60 * 1000);
var hooks = require('./hooks/ScreenShot');

const AppPage = require('../pages/AppPage');
const HomePage = require('../pages/HomePage');
const CustomerListPage = require('../pages/CustomerListPage');
const logger = require('../Log4jConfg')

const appPage = new AppPage();
const homePage = new HomePage();
const customerListPage = new CustomerListPage();

When('user launches {string}', function (site) {
    logger.info('Hello world');
    return appPage.launchApplication(site).then(() => {
        expect(appPage.getCustomerLoginText().isPresent()).to.eventually.be.true;
    }).catch((err) => {
        logger.error(err.stack);
    })
});

When('user clicks on customer login button', function () {
    logger.debug('Debugging info');
    var clickType = appPage.clickCustomerLoginButton();
    console.log(typeof (clickType));
    return clickType;

});


When('user dropdown list should be displayed', function () {
    return expect(customerListPage.getCustmersList().isPresent()).to.eventually.true;
});


When('user selects Harry Potter', function () {
    return customerListPage.clickOnDropDwon().then(() => {
        customerListPage.selectUser();
    });
});

When('user on login button', function () {
    return customerListPage.doLogin();
});


Then('account page should be displayed', function () {
    return expect(homePage.getTrnsactionButton().isPresent()).to.eventually.true;
});

