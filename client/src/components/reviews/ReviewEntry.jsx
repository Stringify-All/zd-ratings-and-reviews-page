import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';
import shortenReviewFunc from '../../Helpers/ShortenReviewFunc';

import markReviewAsHelpful from '../../API/MarkRevAsHelpful';

const HelperButton = styled.button`
cursor: pointer;
padding: 0px 15px;
color: #5eaaa8;
background: transparent;
border: 0px;
font-size: 16px;
border-radius: 0px;

&:hover {
  background-color: transparent;
  border: 0px;
  textDecoration: none;
  color: black;
  box-shadow: 0 0px;
`;

const ReviewEntry = (props) => {
  if (props.review !== undefined) {
    const { review } = props;
    const [response, setResponse] = useState(review.response);
    const [responseTitle, setResponseTitle] = useState('Response: ');
    const [helpfulness, setHelpfulness] = useState(review.helpfulness);
    const [reviewBody, setReviewBody] = useState(review.body);

    useEffect(() => {
      if (reviewBody.split('').length > 250) {
        setReviewBody(shortenReviewFunc(reviewBody));
      }
    }, []);

    const onHelpfulButtonClick = () => {
      setHelpfulness(helpfulness + 1);
      markReviewAsHelpful(review.review_id);
    };

    const dateConverter = () => {
      const id = new Date(review.date);
      const day = `${id.getDate()}th`;
      const month = id.getMonth();
      const year = id.getFullYear();
      console.log(`${month} ${day} ${year}`);
      console.log(reviewBody);
    };

    if (response === 'null' || response === null) {
      setResponse('');
      setResponseTitle('');
    }

    return (
      <>
        <Grid container direction="column">
          <Grid item xs={6} lg={3}>
            <Rating name="half-rating-read" precision={0.25} value={review.rating} readOnly size="small" />
          </Grid>
          <Grid item xs={6} lg={9}>
            <Typography variant="caption">{review.reviewer_name}</Typography>
          </Grid>
          <div className="mt-3">
            <Grid item xs={12}>
              <Typography variant="h6">{review.summary}</Typography>
            </Grid>
          </div>
          <div className="mt-3">
            <Grid item xs={12}>
              <Typography variant="body2">{reviewBody}</Typography>
            </Grid>
          </div>
          <div
            className="mt-3 p-3"
            style={{
              backgroundColor: '#fffefc',
            }}
          >
            <Grid item xs={12}>
              <Typography variant="body2">{responseTitle}</Typography>
              <Typography variant="body2">{response}</Typography>
            </Grid>
          </div>
          <div className="mt-5">
            <Grid item xs={12} lg={12}>
              <Typography variant="overline">Helpful? --</Typography>
              <HelperButton onClick={onHelpfulButtonClick}>
                {' '}
                Yes (
                {helpfulness}
                )
                {' '}
              </HelperButton>
              <HelperButton variant="caption" onClick={dateConverter}> Report </HelperButton>
            </Grid>
          </div>
        </Grid>
        <div className="my-3">
          <Divider />
        </div>
      </>
    );
  }
  return (
    <div>...</div>
  );
};

export default ReviewEntry;
