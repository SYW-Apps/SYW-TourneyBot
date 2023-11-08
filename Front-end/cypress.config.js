const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log (message) {
          console.log(message)
          return null
        }
      })
    },
    baseUrl: "http://localhost:3000",
    responseTimeout: 65000,
    chromeWebSecurity: true,
    env: {
      port: 3000,
      api_url: 'http://localhost:8080',
    }
  },
});
