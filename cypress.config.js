const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ab696f',
  viewportHeight:800, 
  viewportWidth:1200,
  e2e: {
    baseUrl: 'https://tapsshop.pl',
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
