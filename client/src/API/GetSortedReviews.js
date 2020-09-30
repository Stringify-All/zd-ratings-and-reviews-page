import axios from 'axios';

const getSortedReviews = (filter, id) => axios(`http://52.26.193.201:3000/reviews/${id}/list?count=20&sort=${filter}`)
  .then((res) => (res.data))
  .catch((err) => { throw err; });

export default getSortedReviews;
