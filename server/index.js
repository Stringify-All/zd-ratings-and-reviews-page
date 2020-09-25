const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const PORT = 9003;
const helpers = require('./api-helper.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist`));

// Requests here
app.get('/:product_id/meta', (req, res) => {
  const productId = req.params.product_id;
  helpers.getReviewMetadata(productId, (err, data) => {
    if (err) {
      console.log('There was an error getting the metadata');
    } else {
      console.log('Meta data fetched');
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello, Scrumdog.  Your server is running on PORT: ${PORT}`);
});
