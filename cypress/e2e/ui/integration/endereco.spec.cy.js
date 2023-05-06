// Fazendo o import da classe endereco
import EnderecoPage from '../../../support/page-objects/endereco-page.spec.cy'

const dadosEndereco = require('../../../fixtures/endereco.json')


describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {

        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
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
            dadosEndereco.nome,
            dadosEndereco.sobrenome,
            dadosEndereco.empresa,
            dadosEndereco.pais,
            dadosEndereco.endereco,
            dadosEndereco.numero,
            dadosEndereco.cidade,
            dadosEndereco.estado,
            dadosEndereco.cep,
            dadosEndereco.telefone,
            dadosEndereco.email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    })
})