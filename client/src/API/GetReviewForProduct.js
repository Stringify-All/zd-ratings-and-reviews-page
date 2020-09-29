import axios from 'axios';

const getReviewForProduct = (id) => axios(`http://52.26.193.201:3000/reviews/${id}/list?count=20`)
  .then((res) => (res.data))
  .catch((err) => { throw err; });

export default getReviewForProduct;
