import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que acesso o portal tricentis', () => {
    cy.visit('/app.php')
})

When('preencho os dados na aba Enter Vehicle Date', () => {
    cy.dadosVeiculo()
   
})

And('preencho os dados na aba Enter Insurant Date', () => {
    cy.dadosPessoais()
})

And('preencho os dados na aba Enter Product date', () => {
   cy.dadosProduto()
})


And('seleciono a opção platina na aba Select Price Option', () => {
    cy.selectPrice()
})



Then('a aba send quote ficará disponivel para edição', () => {
    cy.validacaoSend()
 })