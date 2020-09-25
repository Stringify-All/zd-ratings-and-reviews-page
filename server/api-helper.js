const axios = require('axios');


const getReviewForProduct = (id, cb) => {
  const url = `http://52.26.193.201:3000/reviews/${id}/list`;
  const options = {
    url,
    headers: {
      'User-Agent': 'request',
    },
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

const getReviewMetadata = (id, cb) => {
  const url = `http://52.26.193.201:3000/reviews/${id}/meta`;
  const options = {
    url,
    headers: {
      'User-Agent': 'request',
    },
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
  getReviewForProduct,
  getReviewMetadata,
};
