import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const StarRating = (props) => (
  <div>
    <Grid container />
    <div style={{ padding: 15 }}>
      <Grid item xs={2} lg={2}>
        <Rating name="half-rating-read" precision={0.25} value={Number(props.averageRating)} readOnly />
      </Grid>
    </div>
  </div>
);

export default StarRating;
