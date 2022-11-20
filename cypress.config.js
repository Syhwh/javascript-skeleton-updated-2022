const path = require('path');
const { defineConfig } = require('cypress');
const webpackConfig = require('./webpack.dev.js');

module.exports = defineConfig({
  video: false,
  devServer: {
    framework: '',
    bundler: 'webpack',
    webpackConfig,
  },
  e2e: {
    taskTimeout: 3000,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'http://localhost:8080',
  },
  chromeWebSecurity: false,
  fileServerFolder: path.resolve(__dirname, 'public'),
});
