import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import AddReview from '../../../API/AddReview';
import theme from '../../theme';

const labels = {
  0.5: 'Utterly Useless',
  1: 'Useless',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Most Excellent',
};

const ModalForm = (props) => {
  const [username, setUsername] = useState('username');
  const [email, setEmail] = useState('email');
  const [title, setTitle] = useState('title');
  const [review, setReview] = useState('review');
  const [recommendation, setRecommendation] = useState(0);
  const [rating, setRating] = useState(4.5);
  const [hover, setHover] = useState(-1);

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === 'title') {
      setTitle(value);
    } else if (id === 'review') {
      setReview(value);
    } else if (id === 'username') {
      setUsername(value);
    } else if (id === 'email') {
      setEmail(value);
    }
  };

  const handleRecChange = (event) => {
    setRecommendation(event.target.value);
  };

  const onFormSubmit = (event) => {
    //event.preventDefault();
    const id = props.product;
    const params = {
      username,
      email,
      title,
      review,
      recommendation,
      rating,
    };
    AddReview(id, params);
  };

  return (
    <ThemeProvider theme={theme}>

      <form noValidate>
        <div>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={6}>
              <FormControl>
                <InputLabel htmlFor="username">Name</InputLabel>
                <Input
                  id="username"
                  onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <div className="mt-3">
                <Rating
                  name="hover-feedback"
                  value={rating}
                  precision={0.5}
                  onChange={(event, newRating) => {
                    setRating(newRating);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>}
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>
                <FormControl>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input
                    id="email"
                    onChange={handleChange}
                  />
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="mb-3">
                <FormControl fullWidth>
                  <InputLabel htmlFor="title">Review title</InputLabel>
                  <Input
                    id="title"
                    onChange={handleChange}
                  />
                </FormControl>
              </div>
            </Grid>
            <FormControl fullWidth>
              <InputLabel htmlFor="review">Write your review!</InputLabel>
              <Input
                id="review"
                onChange={handleChange}
                multiline
              />
            </FormControl>
            <div className="mt-5">
              <FormControl component="fieldset">
                <FormLabel component="legend">Would you recommend this product?</FormLabel>
                <RadioGroup aria-label="recommendation" name="recommendation1" value={recommendation} onChange={handleRecChange}>
                  <FormControlLabel value="1" control={<Radio />} label="Yes!" />
                  <FormControlLabel value="0" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
          </Grid>
        </div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2}>
            <div className="align-items-center mt-3">
              <Button type="submit" variant="contained" color="primary" onClick={onFormSubmit}>Submit</Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default ModalForm;
