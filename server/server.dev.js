require('dotenv').config();
const express = require('express');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const PORT = process.env.PORT || 3000;
const setupApi = require('./api');

// Grab webpack dev config file from react-scripts
const webpackConfig = require('../node_modules/react-scripts/config/webpack.config.dev');

// Initialize Compiler with the webpackConfig
const compiler = webpack(webpackConfig);

// Initialize express
const app = express();

// Initialize the server by creating a new instance of webpackDevServer
const server = new webpackDevServer(compiler, {
  noInfo: true,
  setup: (app) => {
    setupApi(app);
  }
});

// Start up our server
server.listen(PORT, (error) => {
  if (error) throw error;

  console.log(chalk.green('Webpack Server is listening on port'), PORT);
});
