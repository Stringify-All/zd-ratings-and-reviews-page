/* eslint-disable react/prop-types */
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';

const StarRating = ({ averageRating }) => (
  <div>
    <Grid container />
    <div style={{ padding: 15 }}>
      <Grid item xs={2} lg={2}>
        <Rating name="half-rating-read" precision={0.25} value={Number(averageRating)} readOnly />
      </Grid>
    </div>
  </div>
);

export default StarRating;
