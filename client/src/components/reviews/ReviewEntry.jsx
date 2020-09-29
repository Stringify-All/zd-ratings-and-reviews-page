import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';

const ReviewEntry = (props) => {
  if (props.review !== undefined) {
    const { review } = props;
    const [response, setResponse] = useState(review.response);
    const [responseTitle, setResponseTitle] = useState('Response: ');

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
              <Typography variant="body2">{review.body}</Typography>
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
              <Typography variant="caption">
                {' '}
                Yes (
                {review.helpfulness}
                )  |
                {' '}
              </Typography>
              <Typography variant="caption"> Report </Typography>
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
