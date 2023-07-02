
/// <reference types="Cypress" />

const minha_conta = require('../../../support/pages/minha_conta.page')
const data = require('../../../fixtures/perfil.json')

describe('Usando o Application Actions', () => {

  it('Deve entrar no checkout usando Application Actions', () => {
    cy.login(data.usuario, data.senha)
    cy.adicionaProdutoCarrinho()
    cy.abrePaginaCheckout()
    cy.validaPaginaCheckoutAberta()
  })
})