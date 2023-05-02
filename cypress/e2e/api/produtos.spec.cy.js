describe('Testes da Funcionalidade de Produtos', () => {

    it.only('Listar produtos', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/produtos'
        })
        .then((response) => {
            expect(response.body.produtos[0].nome).to.equal('Logitech MX Vertical')
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('produtos')
            expect(response.duration).to.be.lessThan(200)
        })
    })

    it('Cadastrar produto', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/produtos',
            body: {
                "produtos": "Mouse Longtech",
                "preco": 20,
                "descricao": "Mouse",
                "quantidade": 100
            },
            headers: {authorization: ""}
        })
        .then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    })
})