const _ = require('lodash');
const host = '/api';
let feedCache = null;

export const fetchAsteroids = (startDate = new Date(), endDate = new Date()) => {
   if(!feedCache) {
    feedCache = fetch(buildUrl('/feed', 
      {start_date: formatDate(startDate), end_date: formatDate(endDate)}))
        .then(r => r.json())
   }
   return feedCache; 
}

function formatDate(date = new Date()) {
  return date.getFullYear() + '-' + (parseInt(date.getMonth(),10) + 1) + '-' + date.getDate();
}

function buildUrl(path, queryString={}) {
  return `${host}${path}?${_.map(queryString,(v,k) => `${k}=${v}`).join('&')}`;
}