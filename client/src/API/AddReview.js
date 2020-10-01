import axios from 'axios';

const addReview = (id, params) => axios.post(`http://52.26.193.201:3000/reviews/${id}`, {
  rating: params.rating,
  summary: params.title,
  body: params.review,
  recommend: params.recommendation,
  name: params.username,
  email: params.email,
  photos: ['http://localhost:9003/d12a73ad-a677-4cf9-932f-ef30d40e0dd7'],
  characteristics: [],
})
  .then((res) => (res.data))
  .then((console.log('Review created')))
  .catch((err) => { throw err; });

export default addReview;
