
/// <reference types="Cypress" />

const minha_conta = require('../../../support/pages/minha_conta.page')
const data = require('../../../fixtures/perfil.json')

describe('Cria uma nova conta na loja da Ebac', () => {

  
  it('Cria uma nova conta com sucesso usando page objects', () => {
    cy.log('Acessa a página de login da loja')
    cy.visit('my-account')
    minha_conta.myAccountPage.fill_register_form()
    minha_conta.myAccountPage.fill_name_details_form()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  })
})