/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
// eslint-disable-next-line import/extensions
import ReviewEntry from './ReviewEntry.jsx';

const ReviewsList = ({ reviewsOnPage, reviewData }) => {
  if (reviewData.results !== undefined) {
    const filteredReviewData = reviewData.results.slice(0, reviewsOnPage);
    return (
      <Grid>
        {filteredReviewData.map((review) => (
          <ReviewEntry key={review.review_id} review={review} />
        ))}
      </Grid>
    );
  }
  return (
    <div>Loading...</div>
  );
};

export default ReviewsList;
