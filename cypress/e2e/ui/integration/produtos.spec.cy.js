describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {

        // Lista de produtos da loja selecionando com classe
        cy.get('[class="product-block grid"]').first().click()

        // Usando outros locators pegos pelo DOM:
        // ID: cy.get('[id="product-block grid"]')
        // CSS: cy.get('[css="product-block grid"]')
        
        // Clicando o último elemento da lista
        // cy.get('[class="product-block grid"]').last().click()

        // Pegando elemento específico pelo índice
        // cy.get('[class="product-block grid"]').eq(3).click()

        // Pegando o elemento específico pelo texto
        // cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()

    })

    it('Deve selecionar um produto do carrinho', () => {

        let quantidade = 1
    
        cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', '“Ariel Roll Sleeve Sweatshirt” foi adicionado no seu carrinho.');

    });

    it.only('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 2)
    })

    it.only('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XS', 'Red', 1)
    })
});