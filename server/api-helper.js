const axios = require('axios');

const url = 'http://52.26.193.201:3000/';

let getDataFromApi = (username, cb) => {
  let options = {
    url: url, // remember to add endpoint
    headers: {
      'User-Agent': 'request',
      'Authorization': ``
    }
  };

  axios.get(options, (err, res, body) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('API request error: ', err);
    } else {
      // eslint-disable-next-line no-console
      console.log('API request received.');
      cb(body);
    }
  });
};

module.exports = {
  getDataFromApi,
};
