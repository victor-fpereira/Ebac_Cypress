// O teste precisa ter a seguinte extensão: spec.js
// Para que o programa entenda que é um arquivo de teste

// Primeira coisa a se fazer: Importar o cypress

// Uma maneira de importar a biblioteca
// var faker = require('@faker-js/faker')

// Importando como módulo ES6

// Bloco de funcionalidade igual ao context


import { faker } from "@faker-js/faker"



describe('Funcionalidade pré cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    // Teste de caminho feliz
    it('Deve completar o pré cadastro com sucesso', () => {
        // Usando o faker do modo mais antigo
        //cy.get('#reg_email').type(faker.faker.internet.email())

        // Usando como módulo ES6
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@teste')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

    it('Deve completar o pré-cadastro com sucesso usando comandos customizados', () => {
        cy.preCadastro(faker.internet.email(), faker.internet.password(), faker.name.firstName(), faker.name.lastName())
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })

});