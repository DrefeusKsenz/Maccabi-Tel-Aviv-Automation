/// <reference types="cypress" />

describe('Maccabi Tel Aviv', () => {

    it('Create New User', () => {

        cy.visit('https://www.maccabi-tlv.co.il/');


        cy.get('#menus-wrapper > div > ul > li.loggedout > a > span', { timeout: 60000 })
            .click();


        cy.contains('a', 'הצטרפו עכשיו')
            .click();


        cy.get('#join_step1 > div:nth-child(1) > input[type=text]', { timeout: 300000 })
            .type('בתאל')
            .should('have.value', 'בתאל');


        cy.get('#join_step1 > div:nth-child(2) > input[type=text]')
            .click({ force: true })
            .type('לוי', { force: true })
            .should('have.value', 'לוי');


        cy.get('#israel_id')
            .type('320908528', { force: true })
            .should('have.value', '320908528');


        cy.get('#join_step1 > div:nth-child(5) > div > select', { force: true })
            .select("f", { force: true })
            .contains('נקבה');


        cy.get('[name="birthday_d"]').eq(0).select('9', { force: true });

        cy.get('[name="birthday_m"]').eq(0).select('5', { force: true });

        cy.get('[name="birthday_y"]').eq(0).select('2000', { force: true });


        cy.get('[class="blue-button-big join_club"]').click({ force: true })
        cy.contains('אני מסכים');


        cy.get('#join_step2 > div:nth-child(2) > input[type=email]')
            .click({ force: true })
            .type('EFE@Gmail.com', { force: true })
            .should('have.value', 'EFE@Gmail.com');


        cy.get('#join_step2 > div:nth-child(3) > input[type=phone]')
            .click({ force: true })
            .type('0506000000', { force: true })
            .should('have.value', '0506000000');


        cy.get('#country')
            .select('ישראל', { force: true })
            .should('have.value', 'ISR');


        cy.get('#ISR_city')
            .select('אשדוד', { force: true })
            .should('have.value', 'אשדוד');


        cy.get('#ISR_street')
            .select('אורט', { force: true })
            .should('have.value', 'אורט');


        cy.get('#ISR_house_number')
            .type('2', { force: true })
            .should('have.value', '2');


        cy.get('#join_step2 > div:nth-child(8) > input[type=password]')
            .type('1234567890', { force: true })
            .should('have.value', '1234567890');


        cy.get('#agree').click({ force: true });


        cy.get('#join_step2 > input').click({ force: true });


    });

});

