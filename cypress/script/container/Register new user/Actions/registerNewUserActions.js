import elementsMaps from '../ElementsMaps/registerNewUserElementsMaps.json';
const faker = require('faker');
import { generate } from 'gerador-validador-cpf';


class registerNewUserActions {
    fillField(field, value) {
        const inputLocator = elementsMaps.registerPageLocators[`input${field}`];

        if (value === 'cpf') {
            value = generate({ format: true });
        } else if (value === 'email') {
            value = faker.internet.email();
        } else if (value === 'confirme email') {
            // Obter o valor do campo de e-mail
            cy.get(elementsMaps.registerPageLocators['inputE-mail'])
                .invoke('val')
                .then(emailValue => {
                    cy.get(elementsMaps.registerPageLocators['inputConfirme seu E-mail'])
                        .clear()
                        .type(emailValue);
                });
            return;
        }
        cy.get(inputLocator)// Acessando o elemento mapeado
            .should('exist')
            .scrollIntoView()
            .should('be.visible')
            .clear()
            .type(value);
    }

    dropdownOption(text) {
        cy.get(elementsMaps.registerPageLocators.selectProficienciaIngles).first().click();
        cy.contains('span', text).click();
    }

    clickCheckbox() {
        cy.get('a[href="https://qastage.buildbox.one/termos-de-uso"]').click()
        cy.wait(2000)
        cy.puppeteer("switchToNewTabAndCheckHeading")
        cy.get(elementsMaps.registerPageLocators.checkboxTermosUso).check();
    }

    clickButtonNext(buttonName = 'buttonProximo') {
        const buttonSelector = elementsMaps.registerPageLocators[buttonName];
        cy.get(buttonSelector).click();
    }

    validateText(expectedText) {
        cy.contains('h2, h1', expectedText).should('be.visible');
    }

    validateErrorMessage(errorMessage) {
        cy.get(elementsMaps.registerPageLocators.messageError)
            .should('contain', errorMessage);
    }
}
export default new registerNewUserActions;