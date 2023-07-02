Cypress.Commands.add('login', (user, pass) => {
    
    const fd = new FormData();
    fd.append('username', user)
    fd.append('password', pass)
    fd.append('woocommerce-login-nonce', '9fd3db171a')
    fd.append('_wp_http_referer', `/minha-conta/`)
    fd.append('login', 'Login')

    cy.request({
        method: 'POST',
        url: 'minha-conta/',
        body: fd
    }).then((resp) => {
        cy.log('Response ' + resp)
        cy.log('Response body ' + resp.body)
        cy.log('Response headers ' + resp.headers)

        // O código abaixo está comentado porque o site não está retornando o cookie

        // resp.headers['set-cookie'].forEach((cookie) => {
        //     const firstPart = cookie.split(';')[0]
        //     const divider = firstPart.indexOf('=')
        //     const key = firstPart.substring(0, divider)
        //     const value = firstPart.substring(divider + 1, firstPart.length)
        //     cy.setCookie(key, value)
        // })
    })
})

Cypress.Commands.add('adicionaProdutoCarrinho', () => {

    const fd = new FormData();
    fd.append('attribute_size', 'M')
    fd.append('attribute_color', 'Green')
    fd.append('quantity', '1')
    fd.append('add-to-cart', '2559')
    fd.append('product_id', '2559')
    fd.append('variation_id', '2572')

    cy.request({
        method: 'POST',
        url: 'product/abominable-hoodie/',
        body: fd
    })  
})

Cypress.Commands.add('abrePaginaCheckout', () => {

    cy.visit('carrinho/')
    cy.get('.checkout-button').click()
})

Cypress.Commands.add('validaPaginaCheckoutAberta', () => {

    // Verifica se o usuário está na página de checkout
    
    // 1 - Verifica se o label checkout está visível
    cy.get('.page-title').should("have.text","Checkout")

    // 2 - Verfica se o label detalhes de faturamento está visível
    cy.get('.woocommerce-billing-fields > h3').should("have.text","Detalhes de faturamento")

    // 3 - Verifica se o label Your Order está visível
    cy.get('#order_review_heading').should("have.text","Your order")


})