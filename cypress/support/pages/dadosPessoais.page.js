const INPUT_FIRSTNAME = '#firstname'
const INPUT_LASTNAME = '#lastname'
const INPUT_BIRTH = '#birthdate'
const INPUT_GENDER = 'input[name="Gender"]'
const INPUT_STREET = '#streetaddress'
const INPUT_COUNTRY = '#country'
const INPUT_ZIPCODE = '#zipcode'
const INPUT_CITY = '#city'
const INPUT_OCCUPATION = '#occupation'
const INPUT_HOBBIES = 'input[name="Hobbies"]'
const BTN_NEXT_DADOS = '#nextenterproductdata'


Cypress.Commands.add('dadosPessoais', () => {
    cy.get(INPUT_FIRSTNAME).type(Cypress.env('firstName'), {log: false})
    cy.get(INPUT_LASTNAME).type(Cypress.env('lastName'), {log: false})
    cy.get(INPUT_BIRTH).type(Cypress.env('birth'), {log: false})
   // Recupera o valor do gênero
   const gender = Cypress.env('gender');
   // Seleciona o input correto baseado no valor do gênero
   cy.get(INPUT_GENDER).filter(`[value="${gender}"]`).check({ force: true, log: false });
   cy.get(INPUT_STREET).type(Cypress.env('street'), {log: false})
   cy.get(INPUT_COUNTRY).select(Cypress.env('country'), {log: false})
   cy.get(INPUT_ZIPCODE).type(Cypress.env('code'), {log: false})
   cy.get(INPUT_CITY).type(Cypress.env('city'), {log: false})
   cy.get(INPUT_OCCUPATION).select(Cypress.env('occupation'), {log: false})

   const hobbies = Cypress.env('hobbies');
   cy.get(INPUT_HOBBIES).filter(`[value="${hobbies}"]`).check({ force: true, log: false });

   //Botão next
   cy.get(BTN_NEXT_DADOS).click()
   
})

