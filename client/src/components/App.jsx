import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import ProgressBarEntry from './ratings/ProgressBarEntry.jsx';
import getReviewForProduct from '../API/GetReviewForProduct';
import getProductMetadata from '../API/GetProductMetadata';
import Ratings from './ratings/Ratings.jsx';
import ProgressBarTable from './ratings/ProgressBarTable.jsx';
import GlobalStyle from './globalStyle';

const App = () => {
  const [product, setProduct] = useState(2);
  const [metadata, setMetadata] = useState([]);
  const [productReview, setProductReview] = useState([]);

  useEffect(() => {
    getReviewForProduct(product)
      .then((data) => setProductReview(data));
    getProductMetadata(product)
      .then((data) => setMetadata(data));
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <div>
              <Col>
                <Ratings ratingsData={metadata} />
                <ProgressBarTable ratingsData={metadata} />
              </Col>
              <br />
              <Col>
                {/* SIZING INFO */}
              </Col>
            </div>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
