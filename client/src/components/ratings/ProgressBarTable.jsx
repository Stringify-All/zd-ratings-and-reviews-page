import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import getRatingsTotals from '../../Helpers/GetRatingTotals';
import ProgressBarEntry from './ProgressBarEntry.jsx';

const ProgressBarTable = (props) => {
  if (props.ratingsData.ratings !== undefined) {
    const totalRatings = getRatingsTotals(props.ratingsData.ratings);
    const ratingsData = Object.entries(props.ratingsData.ratings);
    return (
      <Grid>
        {ratingsData.map((rating) => (
          <ProgressBarEntry rating={rating} totalRatings={totalRatings} />
        ))}
      </Grid>
    );
  }
  return (
    <div>Loading...</div>
  );
};

export default ProgressBarTable;
