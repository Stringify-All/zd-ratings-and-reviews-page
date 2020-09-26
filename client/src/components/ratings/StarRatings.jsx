import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

export default function SimpleRating() {
  const [value, setValue] = React.useState(3.5);

  return (
    <div>
      <Grid container />
      <div style={{ padding: 15 }}>
        <Grid item xs={3} lg={2}>
          <Rating name="read-only" value={value} readOnly />
        </Grid>
      </div>
    </div>
  );
}
