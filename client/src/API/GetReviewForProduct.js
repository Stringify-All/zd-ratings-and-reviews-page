import axios from 'axios';

const getReviewForProduct = (id) => axios(`http://52.26.193.201:3000/reviews/${id}/list`)
  .then((res) => (res.data))
  .catch((err) => { throw err; });

export default getReviewForProduct;
