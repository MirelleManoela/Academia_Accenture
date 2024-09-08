
const INPUT_OPTIONAL = 'input[name="Select Option"]'
const BTN_NEXT_PRICE = '#nextsendquote'
const TAB_SENDQUOTE = '#sendquote';

Cypress.Commands.add('selectPrice', () => {
    cy.get(INPUT_OPTIONAL).filter('[value="Platinum"]').check({ force: true });
    cy.get(BTN_NEXT_PRICE).click()
})
Cypress.Commands.add('validacaoSend', () => {
    // Validando 
    cy.get(TAB_SENDQUOTE).should('be.visible')
})