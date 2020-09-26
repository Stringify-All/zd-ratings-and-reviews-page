import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import ProgressBarEntry from './ratings/ProgressBarEntry.jsx'
import getReviewForProduct from '../API/GetReviewForProduct';
import getProductMetadata from '../API/GetProductMetadata';
import Ratings from './ratings/Ratings.jsx';
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

  /*   const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: green;
  color: white;
  border: 2px solid white;
  `; */

  return (
    <div>
      <GlobalStyle />
      <Container>
        {/* <h1> Dangerzone. </h1>
        <p> Long Live the Scrumdog Billionaires </p> */}
        <Row>
          <Col sm={12} md={6} lg={4}>
            <div>
              <Col>
                <Ratings ratingsData={metadata} />
                {/*  <Button
                  href="https://github.com/styled-components/styled-components"
                  target="_blank"
                  rel="noopener"
                  primary
                >
                  GitHub
                </Button> */}

                <ProgressBarEntry now={60} />
                <ProgressBarEntry now={60} />
                <ProgressBarEntry now={60} />
                <ProgressBarEntry now={60} />
                <ProgressBarEntry now={60} />
              </Col>
              <br />
              <Col>
                <ProgressBarEntry now={60} />
                <ProgressBarEntry now={60} />
                <ProgressBarEntry now={60} />
                <ProgressBarEntry now={60} />
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
