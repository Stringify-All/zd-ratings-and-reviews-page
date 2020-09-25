import React, { useState, useEffect } from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratings from './ratings/Ratings.jsx';
import GlobalStyle from './globalStyle';

const App = () => {
  const [metadata, setMetadata] = useState([]);

/*   useEffect(() => {
    const api = '/:product_id/meta';
    fetch(api)
      .then((response) => response.json())
      .then((data) => setMetadata(data));
  }); */

  return (
    <div>
      <GlobalStyle />
      <Container>
        {/* <h1> Dangerzone. </h1>
        <p> Long Live the Scrumdog Billionaires </p> */}
        <Row>
          <Col>
            <Ratings />
            <div>
              <Col xs={8}>
                <p>5 Star</p>
                <ProgressBar md={4} now={60} />
                <p>4 Star</p>
                <ProgressBar md={4} now={60} />
                <p>3 Star</p>
                <ProgressBar md={4} now={60} />
                <p>2 Star</p>
                <ProgressBar md={4} now={60} />
                <p>1 Star</p>
                <ProgressBar md={4} now={60} />
              </Col>
              <br />
              <Col xs={8}>
                <p>Fit</p>
                <ProgressBar md={4} now={60} />
                <p>Length</p>
                <ProgressBar md={4} now={60} />
                <p>Comfort</p>
                <ProgressBar md={4} now={60} />
                <p>Quality</p>
                <ProgressBar md={4} now={60} />
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
