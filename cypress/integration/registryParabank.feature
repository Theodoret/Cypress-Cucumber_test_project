Feature: Verify if user cannot login invalid account and can register a new account

    Scenario: Login an invalid account
        Given user navigates to Parabank page
        When the user enters a "username" and "password"
            | username | Doe |
            | password | 1234 |
        Then the user clicks "log in"
    But account is not set up yet

    Scenario: Sign up a Parabank account succesfully
        When the user opens the sign-up website
        And user inputs data
        And user enters a new "username" and "password"
            | username | Doe |
            | password | 1234 |
        And user clicks "REGISTER"
        Then the user is registered