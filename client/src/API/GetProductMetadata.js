import axios from 'axios';

const getReviewMetadata = (id) => axios(`http://52.26.193.201:3000/reviews/${id}/meta`)
  .then((res) => (res.data))
  .catch((err) => { throw err; });

export default getReviewMetadata;
