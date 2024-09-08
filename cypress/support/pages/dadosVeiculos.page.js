const INPUT_MAKE = '#make'
const INPUT_MODEL = '#model'
const INPUT_CYLINDER = '#cylindercapacity'
const INPUT_ENGINE = '#engineperformance'
const INPUT_FABRICACAO = '#dateofmanufacture'
const INPUT_SEATS = '#numberofseats'
const INPUT_RIGHT = 'input[name="Right Hand Drive"]'
const INPUT_NUMBERSEATS2 = '#numberofseatsmotorcycle'
const INPUT_FUEL = '#fuel'
const INPUT_PAYLOAD = '#payload'
const INPUT_WEIGHT = '#totalweight'
const INPUT_PRICE = '#listprice'
const INPUT_LICENSE = '#licenseplatenumber'
const INPUT_AMILEAGE = '#annualmileage'
const BTN_NEXT_VEICULO = '#nextenterinsurantdata'

Cypress.Commands.add('dadosVeiculo', () => {
    cy.get(INPUT_MAKE).select('BMW'); 
    cy.get(INPUT_MODEL).select('Scooter'); 
    cy.get(INPUT_CYLINDER).type('650')
    cy.get(INPUT_ENGINE).type('180')
    cy.get(INPUT_FABRICACAO).type('02/10/2024')
    cy.get(INPUT_SEATS).select('2')
    //O elemento está escondido, usei o force para forçar o clique
    cy.get(INPUT_RIGHT).filter('[value="Yes"]').check({ force: true });
    cy.get(INPUT_NUMBERSEATS2).select('2')
    cy.get(INPUT_FUEL).select('Petrol')
    cy.get(INPUT_PAYLOAD).type('200')
    cy.get(INPUT_WEIGHT).type('461')
    cy.get(INPUT_PRICE).type('65000')
    cy.get(INPUT_LICENSE).type('BXZ1C86')
    cy.get(INPUT_AMILEAGE).type('5000')
    cy.get(BTN_NEXT_VEICULO).click()
})



