@Bank
Feature: Transactions

    # Scenario: launch the application
    #     When customer launches "http://www.way2automation.com/angularjs-protractor/banking/#/login"
    #     Then Home page should be displayed

    Scenario: Login into applcation as Harry Potter user
        When user launches "http://www.way2automation.com/angularjs-protractor/banking/#/login"
        And user clicks on customer login button
        And user dropdown list should be displayed
        And user selects Harry Potter
        And user on login button
        Then account page should be displayed
