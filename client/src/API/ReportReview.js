import axios from 'axios';

const addReview = (reviewId) => axios.put(`http://52.26.193.201:3000/reviews/report/${reviewId}`)
  .then((res) => (res.data))
  .catch((err) => { throw err; });

export default addReview;
