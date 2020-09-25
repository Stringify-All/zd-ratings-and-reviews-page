const axios = require('axios');

const getReviewForProduct = (id) => axios(`http://52.26.193.201:3000/reviews/${id}/list`)
  .then((data) => (data))
  .catch((error) => console.error(error));

const getReviewMetadata = (id) => axios(`http://52.26.193.201:3000/reviews/${id}/meta`)
  .then((data) => (data))
  .catch((error) => console.error(error));

module.exports = {
  getReviewForProduct,
  getReviewMetadata,
};
