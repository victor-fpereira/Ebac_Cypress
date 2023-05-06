// O teste precisa ter a seguinte extensão: spec.js
// Para que o programa entenda que é um arquivo de teste

// Primeira coisa a se fazer: Importar o cypress

// Uma maneira de importar a biblioteca
// var faker = require('@faker-js/faker')

// Importando como módulo ES6
import { faker as _faker } from '@faker-js/faker';

// Bloco de funcionalidade igual ao context

describe('Funcionalidade pré cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    // Teste de caminho feliz
    it('Deve completar o pré cadastro com sucesso', () => {
        // Usando o faker do modo mais antigo
        //cy.get('#reg_email').type(faker.faker.internet.email())

        // Usando como módulo ES6
        cy.get('#reg_email').type(_faker.internet.email())
        cy.get('#reg_password').type('teste@teste')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(_faker.name.firstName())
        cy.get('#account_last_name').type(_faker.name.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

    it('Deve completar o pré-cadastro com sucesso usando comandos customizados', () => {
        cy.preCadastro(_faker.internet.email(), _faker.internet.password(), _faker.name.firstName(), _faker.name.lastName())
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })

});