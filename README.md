# Cypress-Cucumber_test_project
## 1. Overview
A test project of automation test on [the ParaBank website](https://parabank.parasoft.com/parabank/index.htm) with Cyper-Cucumber. The program consists of three integration tests, _i.e._, new account registration by user, login by user, and database deletion by admin.


## 2. Integration test detail
1. New account registration by user: the user creates a new account through the registration option. Steps: (1) login an invalid account; (2) create a new account; (3) logout of the account.

2. Login by user: the user logins with a valid account. Steps: (1) login with a valid account; (2) logout of the account.

3. Database deletion by admin: admin deletes the database, thus making the valid accounts invalid. Steps: (1) login and logout an account to ensure validity; (2) delete the database through the admin page; (3) validate the action by relogging in to the previous account.

[Demo Video](https://drive.google.com/file/d/19kNRf5RkgFAQAA51yt3cwrL-z9tMYyNA/view?usp=sharing)


## 3. Dependencies
cypress: 9.2.1

cypress-cucumber-preprocessor: 4.3.1


## 4. Disclaimer
This project is part of the skill assesement for [the Test Automation Internship in Betr Beta](https://www.linkedin.com/jobs/view/4030634711/?refId=5b062e36-47f5-41a1-87a7-88c6651d47f2&trackingId=or%2B%2Bj6JnQ%2Ba81XnxsNZhDg%3D%3D).


## 5. Project's references
[1] https://www.lambdatest.com/learning-hub/cypress-cucumber-tutorial

[2] https://www.browserstack.com/guide/how-to-run-cypress-cucumber-test

[3] https://www.browserstack.com/guide/cucumber-best-practices-for-testing

[4] https://www.softwaretestinghelp.com/login-page-test-cases/

[5] https://github.com/brightmze26/auth-testing_cypress-cucumber/tree/main

[6] https://ultimateqa.com/dummy-automation-websites/
