// cypress/pageObjects/cartPage.js

class CartPage {
    openCart() {
        cy.get('.sc-1h98xa9-2').click();
    }

    getCartItems() {
        return cy.get('.sc-11uohgb-0');
    }

    getFirstCartItem() {
        return this.getCartItems().first();
    }

    removeFirstItem() {
        this.getFirstCartItem().within(() => {
            cy.get('.sc-11uohgb-5').click();
        });
    }

    increaseQuantity() {
        this.getFirstCartItem().within(() => {
            cy.get('.sc-11uohgb-6').eq(1).click();
        });
    }

    decreaseQuantity() {
        this.getFirstCartItem().within(() => {
            cy.get('.sc-11uohgb-6').eq(0).click();
        });
    }

    getQuantityDisplay() {
        return cy.get('.sc-11uohgb-3');
    }
}

export default new CartPage();
