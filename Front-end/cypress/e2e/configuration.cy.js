/// <reference types="cypress" />

describe('TEST: Configuration', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api', [
            {
                
            }
        ]);
    });

    it('.', () => {
        cy.visit(`http://localhost:${Cypress.env('port')}/`);

        cy.get('a#config-button').click();

        cy.url().should('equal', `http://localhost:${Cypress.env('port')}/redirect/`);
    });

    it('.', () => {
        const page = `http://localhost:${Cypress.env('port')}/`;
        cy.visit(page);

        cy.get('a#button').click();

        cy.wait(200);

        cy.get('button#backpage-button').click();

        cy.url().should('equal', page);
    });

    it('.', () => {
        cy.visit(`http://localhost:${Cypress.env('port')}/`);

        cy.contains('Text').click();

        cy.url().should('equal', `http://localhost:${Cypress.env('port')}/`);
    });

    it('.', () => {
        cy.visit(`http://localhost:${Cypress.env('port')}/`);

        cy.contains('Label Printers').click();

        cy.get('button#button').click().then(() => {
            expect(localStorage.getItem('item1')).to.equal('Text');
        });
    });

    it('.', () => {
        cy.visit(`http://localhost:${Cypress.env('port')}/`);

        cy.contains('Text').click();

        cy.url().should('equal', `http://localhost:${Cypress.env('port')}/`);
    });
});