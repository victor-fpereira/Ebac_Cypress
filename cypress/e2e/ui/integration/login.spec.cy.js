// O teste precisa ter a seguinte extensão: spec.js
// Para que o programa entenda que é um arquivo de teste

// Primeira coisa a se fazer: Importar o cypress

// Importando arquivo do modo antigo
// const perfil = require('../fixtures/perfil.json')

// Importando o arquivo de dados de login para o teste - ES6
import { usuario, senha } from '../../../fixtures/perfil.json';

// Segunda coisa: Criar um bloco de funcionalidade

context('Funcionalidade login', () => {

    // Executa antes de cada teste
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
    });

    // // Executa despois de cada teste
    afterEach(() => {
        // cy.screenshot()
    });

    // Aqui vão ficar os testes. Cada teste ficará agrupado na funcionalidade

    // Teste 1
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain.text', 'Minha conta')
    })

    // Teste 1
    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain.text', 'Minha conta')
    })

    it('Deve fazer login con sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, { log: false })  // {log:false} Não faz o log com os dados de usuário
            cy.get('#password').type(dados.senha, { log: false })    // {log:false} Não faz o log com a senha de usuário
            cy.get('.woocommerce-form > .button').click()
            cy.get('.page-title').should('contain.text', 'Minha conta')
        })

    })

    // Teste 2
    it.only('Deve mostrar mensagem de erro ao errar usuário', () => {
        cy.get('#username').type('aluno_ebac@teste')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error')
        cy.get('.woocommerce-error', { timeout: 10000 }).should('be.visible').should('contain', 'Erro: o usuário aluno_ebac@teste não está cadastrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.')
    })

    // Teste 3
    // Para rodar exclusivamente um teste, marcar como "it.only"
    it('Deve mostrar mensagem de erro ao errar senha', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
})
