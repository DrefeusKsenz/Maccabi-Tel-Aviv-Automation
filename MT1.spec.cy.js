/// <reference types="cypress" />

describe('Maccabi Tel Aviv', () => {
    it('Fill and Send Contact Form', () => {
        // ניווט לדף ה-HTML המקומי
        cy.visit('https://www.maccabi-tlv.co.il/');


        cy.get('#menu-item-13265 > a').click();


        cy.get('#wpcf7-f13251-p13258-o1 > form > p:nth-child(3) > span > input')
            .type('ישראל ישראלי')
            .should('have.value', 'ישראל ישראלי');


        cy.get('#wpcf7-f13251-p13258-o1 > form > p:nth-child(5) > span > input')
            .type('AAA@Gmail.com')
            .should('have.value', 'AAA@Gmail.com');


        cy.get('#wpcf7-f13251-p13258-o1 > form > p:nth-child(7) > span > input')
            .type('0505060000')
            .should('have.value', '0505060000');


        cy.get('#wpcf7-f13251-p13258-o1 > form > p:nth-child(9) > span > input')
            .type('לבדיקה')
            .should('have.value', 'לבדיקה');


        cy.get('#wpcf7-f13251-p13258-o1 > form > p:nth-child(11) > span > textarea')
            .type('הודעה לבדיקה')
            .should('have.value', 'הודעה לבדיקה');


        cy.get('#wpcf7-f13251-p13258-o1 > form > p:nth-child(12) > input')
            .click();


        cy.get('#wpcf7-f13251-p13258-o1 > form > div.wpcf7-response-output')
            .should('be.visible')
            .and('contain', 'תודה, ההודעה נשלחה בהצלחה');


    });
});