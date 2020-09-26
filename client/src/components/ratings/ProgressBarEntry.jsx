import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { LinearProgress } from '@material-ui/core';

const ProgressBarEntry = () => (
  <div>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={4}>
        <Typography variant="caption">5 Star</Typography>
      </Grid>
      <Grid item xs={8}>
        <LinearProgress variant="determinate" value={60} />
      </Grid>
    </Grid>
  </div>
);

export default ProgressBarEntry;
