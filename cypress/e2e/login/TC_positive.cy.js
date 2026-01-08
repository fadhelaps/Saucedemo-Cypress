import LoginPage from "../../pages/LoginPage";

describe('Success login with valid credentilas', () => {
    beforeEach('Open website', () => {
        cy.visit('/');
    })

    it('TC_01_Positive Should login successfully with valid username and password', () => {
        LoginPage.clickUsernameFiled();
        LoginPage.inputUsername('standard_user');
        LoginPage.clickPasswordField();
        LoginPage.inputPassword('secret_sauce');
        LoginPage.clickLoginButton();
        LoginPage.isInventoryPageDisplayed();
    })

    it('TC_02_Positive Should login successfully with valid username and password after press Enter key', () => {
        LoginPage.clickUsernameFiled();
        LoginPage.inputUsername('standard_user');
        LoginPage.clickPasswordField();
        LoginPage.loginWithEnterKey('secret_sauce');
        LoginPage.isInventoryPageDisplayed();
    })

    it('TC_03_Positive Should login successfully after clear fields and reinput the valid credentials', () => {
        LoginPage.clickUsernameFiled();
        LoginPage.inputUsername('standard_user');
        LoginPage.clickPasswordField();
        LoginPage.inputPassword('secret_sauce');
        LoginPage.clearField();
        LoginPage.clickUsernameFiled();
        LoginPage.inputUsername('standard_user');
        LoginPage.clickPasswordField();
        LoginPage.inputPassword('secret_sauce');
        LoginPage.clickLoginButton();
        LoginPage.isInventoryPageDisplayed();
    })

    it('TC_04_Positive Inventory Page still displayed after user success to login and refresh', () => {
        LoginPage.clickUsernameFiled();
        LoginPage.inputUsername('standard_user');
        LoginPage.clickPasswordField();
        LoginPage.inputPassword('secret_sauce');
        LoginPage.clickLoginButton();
        LoginPage.refreshInventoryPage();
        LoginPage.isInventoryPageDisplayed();
    })

    it('TC_05_Positive Success login with valid credentials after failed login', () => {
        LoginPage.clickUsernameFiled();
        LoginPage.inputUsername('invalid_user');
        LoginPage.clickPasswordField();
        LoginPage.inputPassword('invalid_password');
        LoginPage.clickLoginButton();
        LoginPage.validateLoginErrorMessage('Epic sadface: Username and password do not match any user in this service');
        LoginPage.clearField()
        LoginPage.clickUsernameFiled();
        LoginPage.inputUsername('standard_user');
        LoginPage.clickPasswordField();
        LoginPage.inputPassword('secret_sauce');
        LoginPage.clickLoginButton();
        LoginPage.isInventoryPageDisplayed();
    })

    afterEach('Clear cookies', () => {
        cy.clearCookies();
    });
})