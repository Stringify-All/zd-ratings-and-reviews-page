import axios from 'axios';

const addReview = (id) => axios.post(`http://52.26.193.201:3000/reviews/${id}`, {
  rating: '', // Integer (1-5) indicating the review rating
  summary: '', // Summary text of the review
  body: '', // Continued or full text of the review
  recommend: '', // Bool Value indicating if the reviewer recommends the product
  name: '', // Username for question asker
  email: '', // Email address for question asker
  photos: '', // Array of text urls that link to images to be shown
  characteristics: '', // Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...} (must send at least an empty object)
})
  .then((res) => (res.data))
  .catch((err) => { throw err; });

export default addReview;
