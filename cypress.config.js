// cypress.config.js

const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        supportFile: false,
        defaultCommandTimeout: 180000, // 3 דקות לכל הפעולות
        pageLoadTimeout: 30000,
    },
});

