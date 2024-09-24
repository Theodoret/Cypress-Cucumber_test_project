Feature: Verify if admin can delete the database account

    Scenario: Verify an account's validity
        Given user navigates to Parabank page
        When the user enters a "username" and "password"
            | username | Doe |
            | password | 1234 |
        Then the user clicks "log in"
        And users on the account overview page
        Then the user clicks "log out"

    Scenario: Delete the database
        Given admin navigates to "Admin Page"
        When the admin click "CLEAN" on database

    Scenario: Verify the deleted account
        When the user enters a "username" and "password"
            | username | Doe |
            | password | 1234 |
        Then the user clicks "log in"
    But account is deleted
