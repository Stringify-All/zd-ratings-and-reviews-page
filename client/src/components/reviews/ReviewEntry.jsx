import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';

const ReviewEntry = (props) => (
  <>
    <Grid container direction="row">
      <Grid item xs={6} lg={3}>
        <Rating name="half-rating-read" precision={0.25} value={5} readOnly size="small" />
      </Grid>
      <Grid item xs={6} lg={9}>
        <Typography variant="caption">KYLE, January 1, 2020</Typography>
      </Grid>
      <div className="mt-3">
        <Grid item xs={12}>
          <Typography variant="h6">This Onsie was so soft that I literally shit my pants</Typography>
        </Grid>
      </div>
      <div className="mt-3">
        <Grid item xs={12}>
          <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</Typography>
        </Grid>
      </div>
      <div className="mt-5">
        <Grid item xs={12} lg={12}>
          <Typography variant="overline">Helpful? --</Typography>
          <Typography variant="button"> Yes -- </Typography>
          <Typography variant="button"> No </Typography>
        </Grid>
      </div>
    </Grid>
    <div className="mt-3">
      <Divider />
    </div>
  </>
);

export default ReviewEntry;
