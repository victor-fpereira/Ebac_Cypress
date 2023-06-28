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
        resp.headers['set-cookie'].forEach((cookie) => {
            const firstPart = cookie.split(';')[0]
            const divider = firstPart.indexOf('=')
            const key = firstPart.substring(0, divider)
            const value = firstPart.substring(divider + 1, firstPart.length)
            cy.setCookie(key, value)
        })
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
