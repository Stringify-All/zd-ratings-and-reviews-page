import axios from 'axios';

const markReviewAsHelpful = (reviewId) => axios.put(`http://52.26.193.201:3000/reviews/helpful/${reviewId}`)
  .then((res) => (res.data))
  .catch((err) => { throw err; });

export default markReviewAsHelpful;
