const INPUT_STARTDATE = '#startdate'
const INPUT_INSURANCE = '#insurancesum'
const INPUT_MERIT = '#meritrating'
const INPUT_DAMAGE = '#damageinsurance'
const INPUT_OPTIONAL = 'input[name="Optional Products[]"]'
const INPUT_COURTESY = '#courtesycar'
const BTN_NEXT_VEICULO = '#nextselectpriceoption'



Cypress.Commands.add('dadosProduto', () => {
    cy.get(INPUT_STARTDATE).type('10/09/2024')
    cy.get(INPUT_INSURANCE).select('7.000.000,00')
    cy.get(INPUT_MERIT).select('Bonus 8')
    cy.get(INPUT_DAMAGE).select('Full Coverage')
    //usando o contains para procurar a label e clicar no checkbox do Euro Protection
    cy.contains('label', 'Euro Protection').click()
    cy.get(INPUT_COURTESY).select('Yes');  
    // Botão next
    cy.get(BTN_NEXT_VEICULO).click();
})

