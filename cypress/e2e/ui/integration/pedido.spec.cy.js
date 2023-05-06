import { usuario, senha } from '../../../fixtures/perfil.json';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        
        // login
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.login(usuario, senha)
        
        // compra
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        cy.addProdutos('Abominable Hoodie', 'M', 'Blue', 4)
        
        // informações de entrega
        cy.detalhesFaturamento()


        // finaliza compra
        cy.finalizarCompra()

        // validar compra bem sucedida
        cy.contains('Obrigado. Seu pedido foi recebido.')
    });
})