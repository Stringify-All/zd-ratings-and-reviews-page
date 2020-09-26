import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { LinearProgress } from '@material-ui/core';

const ProgressBarEntry = (props) => {
  console.log('props for progress entry', props);
  if (props.rating !== undefined) {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Typography variant="caption">
              {props.rating[0]}
              {' '}
              Star
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <LinearProgress variant="determinate" value={props.rating[1] / props.totalRatings} />
          </Grid>
        </Grid>
      </div>
    );
  }
  return (
    <div>One sec</div>
  );
};

export default ProgressBarEntry;
