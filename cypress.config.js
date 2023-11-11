const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'p728fh',
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      reportFileName: 'index.html',
      html: true,
      json: true,
    },
  },
})