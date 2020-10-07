/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import theme from '../theme';

const ProgressBarEntry = ({ rating, totalRatings, handleClickedStar }) => {
  if (rating !== undefined) {
    const value = ((rating[1] / totalRatings) * 100);
    const handleClicked = () => {
      const clickedStar = rating[0];
      handleClickedStar(clickedStar);
    };
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <button className="zd-helper-button" type="button" onClick={handleClicked}>
                {rating[0]}
                {' '}
                Star
              </button>
            </Grid>
            <Grid item xs={10}>
              <LinearProgress color="secondary" variant="determinate" value={value} />
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
  return (
    <div>One sec</div>
  );
};

export default ProgressBarEntry;
