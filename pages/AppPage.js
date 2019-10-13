class AppPage {

    constructor() {
        this.customerLoginButton = element(by.css('button[ng-click="customer()"]'));
    }

    launchApplication(site) {
        return browser.get(site);
    }

    getCustomerLoginText() {
        return this.customerLoginButton;
    }

    clickCustomerLoginButton(){
        return this.customerLoginButton.click();
    }
}

module.exports = AppPage;