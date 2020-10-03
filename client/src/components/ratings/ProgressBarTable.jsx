/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import getRatingsTotals from '../../Helpers/GetRatingTotals';
import ProgressBarEntry from './ProgressBarEntry.jsx';

const ProgressBarTable = ({ ratingsData, handleClickedStar }) => {
  if (ratingsData.ratings !== undefined) {
    const totalRatings = getRatingsTotals(ratingsData.ratings);
    const ratingsEntries = Object.entries(ratingsData.ratings);
    return (
      <Grid>
        {ratingsEntries.map((rating) => (
          <ProgressBarEntry
            handleClickedStar={handleClickedStar}
            key={rating}
            rating={rating}
            totalRatings={totalRatings}
          />
        ))}
      </Grid>
    );
  }
  return (
    <div>Loading...</div>
  );
};

export default ProgressBarTable;
