import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://parabank.parasoft.com/parabank/index.htm";
const username = 'Doe';
const password = '1234';

Given('user navigates to Parabank page', () => {
    cy.visit(url);
});

When('the user enters a "username" and "password"', () => {
    cy.get('[name="username"]').clear({ force: true }).type(username);
    cy.get('[name="password"]').clear({ force: true }).type(password);
});

Then('the user clicks "log in"', () => {
    cy.get('[value="Log In"]').click();
});

And('users on the account overview page', () => {
    cy.url().should('include', '/overview');
});

Then('the user clicks "log out"', () => {
    cy.contains('Log Out').click();
});