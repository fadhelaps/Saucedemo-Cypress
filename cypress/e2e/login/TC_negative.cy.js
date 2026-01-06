import LoginPage from "../../pages/LoginPage";

describe('Fail to login with valid credentials', () => {
    beforeEach('Open website', () => {
        cy.visit('/');
    })

    it('TC_01_Negative Fail to login due to invalid username', () => {
        LoginPage.clickUsernameFiled();
        LoginPage.inputUsername('invalid_user');
        LoginPage.clickPasswordField();
        LoginPage.inputPassword('secret_sauce');
        LoginPage.clickLoginButton();
        LoginPage.validateLoginErrorMessage('Epic sadface: Username and password do not match any user in this service');
    })

    it('TC_02_Negative Fail to login due to invalid password', () => {
        LoginPage.clickUsernameFiled();
        LoginPage.inputUsername('standard_user');
        LoginPage.clickPasswordField();
        LoginPage.inputPassword('invalid_password');
        LoginPage.clickLoginButton();
        LoginPage.validateLoginErrorMessage('Epic sadface: Username and password do not match any user in this service');
    })

    it('TC_03_Negative Fail to login due to invalid username and password', () => {
        LoginPage.clickUsernameFiled();
        LoginPage.inputUsername('invalid_user');
        LoginPage.clickPasswordField();
        LoginPage.inputPassword('invalid_password');
        LoginPage.clickLoginButton();
        LoginPage.validateLoginErrorMessage('Epic sadface: Username and password do not match any user in this service');
    })

    it('TC_04_Negative Fail to login due to empty username', () => {
        LoginPage.clickPasswordField();
        LoginPage.inputPassword('secret_sauce');
        LoginPage.clickLoginButton();
        LoginPage.validateLoginErrorMessage('Epic sadface: Username is required');
    })

    it('TC_04_Negative Fail to login due to empty password', () => {
        LoginPage.clickUsernameFiled();
        LoginPage.inputUsername('invalid_user');
        LoginPage.clickLoginButton();
        LoginPage.validateLoginErrorMessage('Epic sadface: Password is required');
    })

    afterEach('Clear cookies', () => {
        cy.clearCookies();
    });
})