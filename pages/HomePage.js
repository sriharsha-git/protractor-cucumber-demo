class HomePage {

    constructor() {
        this.transactionButton = element(by.css("button[ng-click='transactions()']"));

    }
    
    getTrnsactionButton(){
        return this.transactionButton;
    }
}
module.exports = HomePage;