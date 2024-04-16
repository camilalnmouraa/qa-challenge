import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import registerNewUserActions from '../Actions/registerNewUserActions';

Given('que estou na página de cadastro', () => {
    cy.register();
});

When('preencho o campo {string} com {string}', (field, value) => {
    registerNewUserActions.fillField(field, value)

});

When('seleciono o nível de proficiência na língua inglesa como {string}', (text) => {
    registerNewUserActions.dropdownOption(text)
});

When('concordo com os Termos de Uso e Política de Privacidade', () => {
    registerNewUserActions.clickCheckbox()
});

When('seleciono o botão {string}', (buttonName) => {
    registerNewUserActions.clickButtonNext(buttonName)
});

When('vejo o texto {string} para seguir com o cadastro', (expectedText) => {
    registerNewUserActions.validateText(expectedText)
});

Then('vejo o texto {string} de cadastro realizado com sucesso', (expectedText) => {
    registerNewUserActions.validateText(expectedText)
});

Then('vejo a mensagem de erro {string}', (errorMessage) => {
    registerNewUserActions.validateErrorMessage(errorMessage)
});
