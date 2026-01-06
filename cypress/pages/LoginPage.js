class LoginPage {
    //selectors
    usernameField = '#user-name';
    passwordField = '#password';
    loginButton = '#login-button';
    titleText = '.app_logo';
    loginErrorMessage = '#login_button_container > div > form > div.error-message-container.error > h3';

    //methods
    clickUsernameFiled() {
        cy.get(this.usernameField).click().should('have.focus');
    }

    inputUsername(username) {
        cy.get(this.usernameField).type(username).should('have.value', username);
    }

    clickPasswordField() {
        cy.get(this.passwordField).click().should('have.focus');
    }

    inputPassword(password) {
        cy.get(this.passwordField).type(password).should('have.value', password);
    }

    loginWithEnterKey(password) {
        cy.get(this.passwordField).type(password + '{enter}');
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }

    isInventoryPageDisplayed() {
        cy.url().should('include', '/inventory.html');
        cy.get(this.titleText).should('be.visible').and('have.text', 'Swag Labs');
    }

    refreshInventoryPage() {
        cy.reload();
        cy.url().should('include', '/inventory.html');
    }

    validateLoginErrorMessage(expectedMessage) {
        cy.get(this.loginErrorMessage).should('be.visible').and('have.text', expectedMessage);
    }

    clearField() {
        cy.get(this.usernameField).clear();
        cy.get(this.passwordField).clear();
    }
}

export default new LoginPage();