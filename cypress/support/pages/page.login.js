class Login {

    get #user() { return cy.get('#user-login') }
    get #pass() { return cy.get('#user-pass') }
    get #login() { return cy.get('#wp-submit') }


    login(user, pass) {
        this.#user.type(user)
        this.#pass.type(pass)
        this.#login.click()
    }

}