Feature: Verify if user can login and logout a valid account

    Scenario: Login an account, then logout
        Given user navigates to Parabank page
        When the user enters a "username" and "password"
            | username | Doe |
            | password | 1234 |
        Then the user clicks "log in"
        And users on the account overview page
        Then the user clicks "log out"
