const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://main.d8770hxk753d4.amplifyapp.com/',
    // baseUrl: 'https://main.d21g241m8zr597.amplifyapp.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'mochawesome',
  },
});
