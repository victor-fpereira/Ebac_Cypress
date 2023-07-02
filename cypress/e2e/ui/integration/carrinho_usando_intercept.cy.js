
/// <reference types="Cypress" />

const minha_conta = require('../../../support/pages/minha_conta.page')
const data = require('../../../fixtures/perfil.json')

describe('Usando o Application Actions', () => {

  // O intercept sempre deve vir antes das operações de manipulação das páginas
  
  function intercept(expectedCodeResponse, expectBodyResponse) {
  
    cy.intercept('POST', '/?wc-ajax=get_refreshed_fragments').as('changeProductQuantity')
    cy.wait('@changeProductQuantity').then((interception) => {

      // Accessa a responta interceptada
      const response = interception.response;
  
      // Realiza as validações da responta
      expect(response.statusCode).to.equal(expectedCodeResponse);
      expect(response.body.fragments['span.cart-mobile']).to.contain(expectBodyResponse)
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

  function addProduct(quantity) {

    for (let index = 0; index < quantity; index++) {
      cy.get('.plus').click()
    }
  }

  function subtractProduct(quantity) {

    for (let index = 0; index < quantity; index++) {
      cy.get('.minus').click()
    }
  }

  it('Utiliza o intercept para validar a compra de dois produtos', () => {

    const expectedCodeResponse = 200
    const expectBodyResponse = '2'
    openCart()
    addProduct(1)
    intercept(expectedCodeResponse, expectBodyResponse)

  })

  function updateProduct(quantity) {
      
      cy.get('div > input.input-text.qty.text').clear().type(quantity)
      cy.get('.actions > .clearfix > .pull-right').click()
  }

  // Atualização e exclusão de um item do carrinho

  it('Utiliza o intercept para validar a remoção de um produto', () => {
  
    const expectedCodeResponse = 200
    const expectBodyResponse = '0'
    openCart()
    subtractProduct(1)
    intercept(expectedCodeResponse, expectBodyResponse)

  })

  it('Utiliza o intercept para validar a atualização do produto', () => {
  
    const expectedCodeResponse = 200
    const expectBodyResponse = '5'
    openCart()
    updateProduct(5)
    intercept(expectedCodeResponse, expectBodyResponse)

  })

})