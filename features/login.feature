@Login
Feature: Login
    In order to perform success full login
    As a user
    I want to enter correct username and password

    Scenario: verify login into application
        Given User launches "http://juliemr.github.io/protractor-demo/"
        When User enters first number as "1"
        And User enters second number as "2"
        Then User clicks go button
        Then result should be "3"