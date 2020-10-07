/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CircularProgress from '@material-ui/core/CircularProgress';
import getReviewForProduct from '../API/GetReviewForProduct';
import getProductMetadata from '../API/GetProductMetadata';
import Ratings from './ratings/Ratings.jsx';
import Reviews from './reviews/Reviews.jsx';
import './styles.css';

const App = () => {
  const [product, setProduct] = useState(4);
  const [metadata, setMetadata] = useState([]);
  const [productReview, setProductReview] = useState([]);
  const [clickedStar, setClickedStar] = useState(null);

  useEffect(() => {
    getReviewForProduct(product)
      .then((data) => setProductReview(data));
    getProductMetadata(product)
      .then((data) => setMetadata(data));
  }, []);

  const handleClickedStar = (starRating) => {
    setClickedStar(starRating);
  };
  if (metadata.ratings === undefined || productReview.results.length === 0) {
    return (
      <CircularProgress />
    );
  }
  return (
    <body className="zd-body">
      <Container>
        <div className="my-5">
          <Col xs={12}>
            <h4 className="primary">Ratings & Reviews</h4>
          </Col>
        </div>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <div>
              <Col>
                <Ratings ratingsData={metadata} handleClickedStar={handleClickedStar} />
              </Col>
              <br />
            </div>
            <br />
          </Col>
          <Col sm={12} md={6} lg={8}>
            <Reviews
              reviewData={productReview}
              product={product}
              productSort={setProductReview}
              clickedStar={clickedStar}
            />
          </Col>
        </Row>
      </Container>
    </body>
  );
};

export default App;
