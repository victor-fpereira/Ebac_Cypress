// Fazendo o import da classe endereco
import EnderecoPage from '../support/page-objects/endereco.page'

const dadosEndereco = require('../fixtures/endereco.json')


describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {

        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    })

    it('Deve fazer cadastro de faturamento com sucesso', () => {

        // Av. Brg. Faria Lima, 3477 - 18º Andar - Itaim Bibi, São Paulo - SP, 04538-133

        EnderecoPage.editarEnderecoFaturamento('Flávio', 'Araújo', 'Google', 'Brasil', 'Av. Brg. Faria Lima', '3477', 'São Paulo', 'São Paulo', '04538-133', '119990000', 'user@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    })

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {

        // Av. Brg. Faria Lima, 3477 - 18º Andar - Itaim Bibi, São Paulo - SP, 04538-133

        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    })
})