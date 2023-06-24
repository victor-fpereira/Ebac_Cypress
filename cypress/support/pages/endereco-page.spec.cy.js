// classe de page objects "endereco"

class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email){
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        // Interagindo com seletor de lista, com campo de digitação - usando click
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        // Interagindo com seletor de lista, com campo de digitação - usando ENTER
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('.button').click()

    }

    editarEnderecoEntrega() {
        // elementos + ações
    }
}

// Deixando a classe visivel para o projeto com o comando export
export default new EnderecoPage()