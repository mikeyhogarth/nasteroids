const router = require('express').Router();
const host = 'https://api.nasa.gov/neo/rest/v1/';
const https = require('https');

module.exports = (app) => {

  function buildUrl(path) {
    return `${host}${path}&api_key=${process.env.NASA_API_KEY}`;
  }

  router.route('/feed')
    .get((req, res) => {
      https.get(buildUrl(req.url), (nasaRes) => {
        nasaRes.pipe(res);
      });
    });

  app.use('/api', router);
}

