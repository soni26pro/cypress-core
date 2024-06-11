/// <reference types="Cypress" />

import homePage from '../../pageObjects/homePage'
import productPage from '../../pageObjects/productPage';
import cartPage from '../../pageObjects/cartPage';

describe('Shopping Cart Tests', () => {
    beforeEach(() => {
        homePage.visit();
    });

    it('should display the correct number of inventory items', () => {
        homePage.getProductItems().should('have.length', 16);
    });

    it('should have the correct page title', () => {
        cy.title().should('eq', 'Typescript React Shopping cart');
    });

    it('should add an item to the cart and verify the cart contents', () => {
        homePage.getFirstProductItem().within(() => {
            productPage.getProductName().invoke('text').as('itemName');
            productPage.getProductPrice().invoke('text').then((priceText) => {
                const itemPrice = priceText.replace(/\s+/g, ' ').trim();
                cy.wrap(itemPrice).as('itemPrice');
            });

            productPage.addToCart();
        });

        cartPage.openCart();

        cartPage.getCartItems().should('have.length', 1);
        cartPage.getFirstCartItem().within(() => {
            cy.get('@itemName').then((itemName) => {
                cy.contains(itemName);
            });
            cy.get('.sc-11uohgb-4 p').invoke('text').then((text) => {
                const cartItemPrice = text.trim().replace(/\$\s+/g, '$'); 
                cy.get('@itemPrice').then((itemPrice) => {
                    expect(cartItemPrice).to.equal(itemPrice);
                });
            });
        });
    });

    it('should remove an item from the cart', () => {
        homePage.getFirstProductItem().within(() => {
            productPage.addToCart();
        });

        cartPage.openCart();
        cartPage.removeFirstItem();
        cartPage.getCartItems().should('not.exist');
    });

    it('should increase and decrease the quantity of an item in the cart', () => {
        homePage.getFirstProductItem().within(() => {
            productPage.addToCart();
        });

        cartPage.openCart();
        cartPage.increaseQuantity();
        cartPage.getQuantityDisplay().should('contain', '2');

        cartPage.decreaseQuantity();
        cartPage.getQuantityDisplay().should('contain', '1');
    });

    it('should display correctly on different screen sizes', () => {
        // Desktop
        cy.viewport(1200, 800);
        homePage.visit();
        // Add assertions for desktop layout

        // Tablet
        cy.viewport('ipad-2');
        cy.reload();
        // Add assertions for tablet layout

        // Mobile
        cy.viewport('iphone-6');
        cy.reload();
        // Add assertions for mobile layout
    });
});
