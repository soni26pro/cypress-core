// cypress/pageObjects/productPage.js

class ProductPage {
    getProductName() {
        return cy.get('.sc-124al1g-4');
    }

    getProductPrice() {
        return cy.get('.sc-124al1g-6');
    }

    addToCart() {
        cy.get('button').click();
    }
}

export default new ProductPage();
