const minha_conta = require('../../../support/pages/minha_conta.page')
const data = require('../../../fixtures/perfil.json')
const env = require('../../../fixtures/env_vars.json')

describe('Cria uma nova conta na loja da Ebac', () => {

  it.only('Cria uma nova conta com sucesso usando page objects', () => {
    
    cy.visit(`${env.HOST}minha-conta/`)
    minha_conta.myAccountPage.fill_register_form()
    minha_conta.myAccountPage.fill_name_details_form()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

  })

  it('Deve entrar no checkout usando Application Actions', () => {

    cy.login(data.usuario, data.senha)
    cy.adicionaProdutoCarrinho()
    cy.abrePaginaCheckout()
  })

})