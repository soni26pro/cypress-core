/**
 * Cypress Configuration File
 *
 * This file contains the configuration for Cypress end-to-end testing.
 * The configuration is defined using the defineConfig function provided by Cypress.
 */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    /**
     * Setup Node Event Listeners
     * 
     * This function allows you to set up various node event listeners.
     * You can use it to handle events such as test failures, screenshots, and more.
     *
     * @param {Function} on - The function to register event listeners.
     * @param {Object} config - The resolved Cypress configuration.
     */
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: 'https://react-shopping-cart-67954.firebaseapp.com/',
    viewportWidth: 1200,
    viewportHeight: 800,
    /**
     * Spec Pattern
     * 
     * This specifies the path to the test specification files.
     * The pattern provided below will look for JavaScript files in the 'cypress/integration/web' directory.
     *
     * @type {string}
     */
    specPattern: 'cypress/integration/web/*.js'
  },
});