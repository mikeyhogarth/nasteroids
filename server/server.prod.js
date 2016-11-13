const express = require('express');
const PORT = process.env.PORT || 3000;
const setupApi = require('./api');

// Initialize express
const app = express();

// Setup the API
setupApi(app);

// Serve the build file
app.use('/', express.static(process.cwd() + '/build'));

// Start up our express server
app.listen(PORT, (error) => {
  if (error) throw error;

  console.log('Production server listening on port', PORT);
});
