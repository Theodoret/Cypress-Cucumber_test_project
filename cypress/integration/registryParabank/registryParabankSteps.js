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

But("account is not set up yet", () => {
    cy.contains('Error!');
});

When('the user opens the sign-up website', () => {
    cy.contains('Register').click();
    cy.url().should('include', '/register');
});

And('user inputs data', () => {
    cy.get('[name="customer.firstName"]').clear({ force: true }).type('John');
    cy.get('[name="customer.lastName"]').clear({ force: true }).type('Doe');
    cy.get('[name="customer.address.street"]').clear({ force: true }).type('116 Changi Road 03 01');
    cy.get('[name="customer.address.city"]').clear({ force: true }).type('Singapore');
    cy.get('[name="customer.address.state"]').clear({ force: true }).type('Singapore');
    cy.get('[name="customer.address.zipCode"]').clear({ force: true }).type('419718');
    cy.get('[name="customer.phoneNumber"]').clear({ force: true }).type('64693646');
    cy.get('[name="customer.ssn"]').clear({ force: true }).type('552-60-XXXX');
});

And('user enters a new "username" and "password"', () => {
    cy.get('[name="customer.username"]').clear({ force: true }).type(username);
    cy.get('[name="customer.password"]').clear({ force: true }).type(password);
    cy.get('[name="repeatedPassword"]').clear({ force: true }).type(password);
});

And('user clicks "REGISTER"', () => {
    cy.get('[value="Register"]').click();
});

Then('the user is registered', () => {
    cy.contains('Your account was created successfully.');
    cy.contains('Log Out').click();
});
