import axios from 'axios';

const addReview = (id, params) => axios.post(`http://52.26.193.201:3000/reviews/${id}`, {
  rating: params.rating,
  summary: params.title,
  body: params.review,
  recommend: params.recommendation,
  name: params.username,
  email: params.email,
  photos: [],
  characteristics: [],
})
  .then((res) => (res.data))
  .then((console.log('Review created')))
  .catch((err) => { throw err; });

export default addReview;

/* Fun fact, I met my wife AND got married in this onsie. There I was. Just minding my own business and casually wearing my fave onsie on a grocery run. All the sudden a girl walked up and said, "Hey... cool onsie." We got married the next day and have been going strong for a couple days. Things are pretty rocky right now but I still love the onsie. */