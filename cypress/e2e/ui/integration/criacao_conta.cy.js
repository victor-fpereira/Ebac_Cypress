const minha_conta = require('../../../support/pages/minha_conta.page')

describe('Cria uma nova conta na loja da Ebac', () => {


  before(() => { cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') })

  it('Deve criar uma nova conta com sucesso', () => {

    minha_conta.myAccountPage.fill_register_form()
    minha_conta.myAccountPage.fill_name_details_form()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

  })
})