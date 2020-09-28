import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import ReviewsList from './ReviewsList.jsx';
import SortingDropdown from './SortingDropdown.jsx';

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [sortedBy, setSortedBy] = useState('relevance');

  useEffect(() => {
    if (!props.reviewData) {
      setReviews([]);
      setStarRating('0');
    } else {
      setReviews(props.reviewData);
    }
  });

  const setDropdownValue = (filter) => {
    setSortedBy(filter);
  };

  return (
    <div className="mt-2 pl-4">
      <ThemeProvider theme={theme}>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {reviews.count}
              {' '}
              reviews sorted by
              <SortingDropdown setDropdownValue={setDropdownValue} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className="my-4">
              <ReviewsList reviewData={reviews} />
            </div>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Button variant="outlined" color="primary">More Reviews</Button>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Button variant="outlined" color="primary" oncl>Add review +</Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Reviews;
