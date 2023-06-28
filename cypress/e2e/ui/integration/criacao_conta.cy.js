const minha_conta = require('../../../support/pages/minha_conta.page')
const data = require('../../../fixtures/perfil.json')

describe('Cria uma nova conta na loja da Ebac', () => {

  
  it('Cria uma nova conta com sucesso usando page objects', () => {
    cy.log('Acessa a página de login da loja')
    minha_conta.myAccountPage.fill_register_form()
    minha_conta.myAccountPage.fill_name_details_form()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

  })

  it.only('Deve entrar no checkout usando Application Actions', () => {
    cy.login(data.usuario, data.senha)
    cy.adicionaProdutoCarrinho()
    cy.abrePaginaCheckout()
  })

  it('Utiliza o intercept para validar a compra, atualização e exclusão de um item do carrinho', () => {
  
    cy.visity('/')

    cy.intercept({

      method: "GET",
      url: "/",
      query: {
        term: ""
      }
    }, resp => {
      resp.reply({
        status_code: 200,
        body: ``
      })
    })

  // Clica no botão de adicionar ao carrinho
  cy.get('')

  // Clica no botão de remover do carrinho
  cy.get('')

  // Clica no botão de atualizar o carrinho
  cy.get('')

  })



})