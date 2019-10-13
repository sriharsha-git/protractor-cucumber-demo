'use strict';

class CustomerListPage {

    constructor() {
        this.customerList = element(by.css("select[id='userSelect']"));
        this.customer=element(by.xpath("//option[text()='Harry Potter']"));
        this.loginButton=element(by.css("button[type='submit']"));
    }

    getCustmersList() {
        return this.customerList;
    }

    clickOnDropDwon(){
        return this.customerList.click();
    }

    selectUser(){
        return this.customer.click();
    }

    doLogin() {
        return this.loginButton.click();
    }

}

module.exports = CustomerListPage;