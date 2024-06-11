// cypress/pageObjects/homePage.js

class HomePage {
    visit() {
        cy.visit('https://react-shopping-cart-67954.firebaseapp.com/');
    }

    getProductItems() {
        return cy.get('.sc-124al1g-2');
    }

    getFirstProductItem() {
        return this.getProductItems().first();
    }
}

export default new HomePage();