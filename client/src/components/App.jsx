import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CircularProgress from '@material-ui/core/CircularProgress';
import getReviewForProduct from '../API/GetReviewForProduct';
import getProductMetadata from '../API/GetProductMetadata';
import Ratings from './ratings/Ratings.jsx';
import ProgressBarTable from './ratings/ProgressBarTable.jsx';
import GlobalStyle from './globalStyle';
import Reviews from './reviews/Reviews.jsx';
import CharacteristicSlider from './ratings/CharacteristicSlider.jsx';

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
    <div>
      <GlobalStyle />
      <Container>
        <div className="my-5">
          <Col xs={12}>
            <h4>Ratings & Reviews</h4>
          </Col>
        </div>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <div>
              <Col>
                <Ratings ratingsData={metadata} handleClickedStar={handleClickedStar} />
              </Col>
              <br />
              <Col>
                {/* SIZING INFO */}
              </Col>
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
    </div>
  );
};

export default App;
