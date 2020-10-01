import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import theme from '../theme';

const ProgressBarEntry = (props) => {
  if (props.rating !== undefined) {
    const value = ((props.rating[1] / props.totalRatings) * 100);
    const handleClickedStar = (event) => {
      const clickedStar = props.rating[0];
      props.handleClickedStar(clickedStar);
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
            <Grid item xs={4}>
              <Typography variant="caption" onClick={handleClickedStar}>
                {props.rating[0]}
                {' '}
                Star
              </Typography>
            </Grid>
            <Grid item xs={8}>
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
