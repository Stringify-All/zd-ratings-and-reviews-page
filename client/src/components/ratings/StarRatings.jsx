import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function SimpleRating() {
  const [value, setValue] = React.useState(3.5);

  return (
    <div>
      <Grid container>
        <Grid item xs={3} lg={2}>
          <Typography variant="h1" component="h2" gutterBottom>3.5</Typography>
        </Grid>
        <div style={{ padding: 30 }}>
          <Grid item xs={3} lg={2}>
            <Rating name="read-only" value={value} readOnly />
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
