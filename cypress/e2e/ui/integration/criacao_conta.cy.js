const minha_conta = require('../../../support/pages/minha_conta.page')
const data = require('../../../fixtures/perfil.json')

describe('Cria uma nova conta na loja da Ebac', () => {

  it('Cria uma nova conta com sucesso usando page objects', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    minha_conta.myAccountPage.fill_register_form()
    minha_conta.myAccountPage.fill_name_details_form()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

  })

  it.only('Deve entrar no checkout usando Application Actions', () => {

    cy.login(data.usuario, data.senha)
    cy.adicionaProdutoCarrinho()
    cy.abrePaginaCheckout()

    // Verifica se o usuário está na página de checkout
    
    // 1 - Verifica se o label checkout está visível
    cy.get('.page-title').should("have.text","Checkout")

    // 2 - Verfica se o label detalhes de faturamento está visível
    cy.get('.woocommerce-billing-fields > h3').should("have.text","Detalhes de faturamento")

    // 3 - Verifica se o label Your Order está visível
    cy.get('#order_review_heading').should("have.text","Your order")

  })

})