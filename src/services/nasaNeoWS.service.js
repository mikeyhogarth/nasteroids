const _ = require('lodash');
const host = 'https://api.nasa.gov/neo/rest/v1/';
const apiKey = 'k6RnVHGc7qDmlJi2ci5O1YqhP2uSQ4OBpjiZZWFc';
let feedCache = null;

export const fetchAsteroids = (startDate = new Date(), endDate = new Date()) => {
   if(!feedCache) {
    feedCache = fetch(buildUrl('/feed', 
      {start_date: formatDate(startDate), end_date: formatDate(endDate)}
      )).then(r => r.json())
   }
   return feedCache; 
}

function formatDate(date = new Date()) {
  return date.getFullYear() + '-' + (parseInt(date.getMonth(),10) + 1) + '-' + date.getDate();
}

function buildUrl(path, queryString={}) {
  return `${host}${path}?${
    _.map(queryString,(v,k) => `${k}=${v}`).join('&')}&api_key=${apiKey}`;
}