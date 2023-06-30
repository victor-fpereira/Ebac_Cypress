
/// <reference types="Cypress" />

const minha_conta = require('../../../support/pages/minha_conta.page')
const data = require('../../../fixtures/perfil.json')

describe('Usando o Application Actions', () => {

  // O intercept sempre deve vir antes das operações de manipulação das páginas
  
  function intercept(expectedCodeResponse, expectBodyResponse) {
  
    cy.intercept({
      method: "POST",
      url: "/?wc-ajax=get_refreshed_fragments",
    }, resp => {
      resp.reply({
        status_code: expectedCodeResponse,
        body: `${expectBodyResponse}`
      })
    })
  }

  function openCart() {

    // Adiciona um produto ao carrinho
    cy.visit('product/abominable-hoodie/')
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Green').click()
    
    // Adiciona o produto ao carrinho
    cy.get('.single_add_to_cart_button').click()

    // Abre o carrinho
    cy.get('.woocommerce-message > .button').click()

  }


  it.only('Utiliza o intercept para validar a compra', () => {

    let responseCode = 200
    let responseBody = "Carrinho com produto atualizado"

    intercept(responseCode, responseBody)
    openCart()
 
    // TODO - validar o html da página que foi alterado


  })

  //, atualização e exclusão de um item do carrinho

  it('Utiliza o intercept para validar a remoção do produto', () => {
  
    intercept(200, "Carrinho com produto atualizado")
    openCart()

    // Clica no botão de remover do carrinho


  })

  it('Utiliza o intercept para validar a atualização do produto', () => {
  
    intercept(200, "Carrinho com produto atualizado")
    openCart()

  })

})