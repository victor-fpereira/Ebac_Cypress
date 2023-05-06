// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import endereco from '../fixtures/endereco.json';

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('addProdutos', (produto, tamanho, cor, quantidade) => {
    cy.get('[class="product-block grid"]').contains(produto).click()
    cy.get('.button-variable-item-' + tamanho, { timeout: 10000 }).should('be.visible');
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
})

Cypress.Commands.add('detalhesFaturamento', () => {

    cy.get('#billing_first_name').clear().type(endereco.nome)
    cy.get('#billing_last_name').clear().type(endereco.sobrenome)
    cy.get('#billing_company').clear().type(endereco.empresa)
    // Interagindo com seletor de lista, com campo de digitação - usando click
    cy.get('#select2-billing_country-container').click().type(endereco.pais).get('[aria-selected="true"]').click()
    cy.get('#billing_address_1').clear().type(endereco.endereco)
    cy.get('#billing_address_2').clear().type(endereco.numero)
    cy.get('#billing_city').clear().type(endereco.cidade)
    // Interagindo com seletor de lista, com campo de digitação - usando ENTER
    cy.get('#select2-billing_state-container').click().type(endereco.estado + '{enter}')
    cy.get('#billing_postcode').clear().type(endereco.cep)
    cy.get('#billing_phone').clear().type(endereco.telefone)
    cy.get('#billing_email').clear().type(endereco.email)
})

Cypress.Commands.add('finalizarCompra', () => {
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
})

Cypress.Commands.add('cadastro', (email, password) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(password)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(_faker.name.firstName())
    cy.get('#account_last_name').type(_faker.name.lastName())
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
})

Cypress.Commands.add('preCadastro', (email, password, firstName, lastName) => {
    // Usando como módulo ES6
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type('teste@teste')
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(firstName)
    cy.get('#account_last_name').type(lastName)
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
})
