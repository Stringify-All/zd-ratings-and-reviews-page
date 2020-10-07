/* eslint-disable react/prop-types */
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
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Most Excellent',
};

const ModalForm = ({ product }) => {
  const [username, setUsername] = useState('');
  const [nameError, setNameError] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(true);
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(true);
  const [review, setReview] = useState('');
  const [reviewError, setReviewError] = useState(true);
  const [recommendation, setRecommendation] = useState(0);
  const [recommendatitonError, setRecommendationError] = useState(true);
  const [rating, setRating] = useState(NaN);
  const [ratingError, setRatingError] = useState(true);
  const [hover, setHover] = useState(-1);
  /* const [images, setImages] = useState('https://rb.gy/2ek2it'); */
  const [isError, setIsError] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (
      !nameError
      && !emailError
      && !titleError
      && !reviewError
      && !recommendatitonError
      && !ratingError
    ) {
      setIsError(false);
    }
  }, [nameError,
    emailError,
    titleError,
    reviewError,
    recommendatitonError,
    ratingError]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === 'title') {
      setTitle(value);
      setTitleError(false);
    } else if (id === 'review') {
      setReview(value);
    } else if (id === 'username') {
      setUsername(value);
      setNameError(false);
    } else if (id === 'email') {
      setEmail(value);
      setEmailError(false);
    }
    if (review.length >= 50) {
      setReviewError(false);
    }
  };

  const handleRecChange = (event) => {
    setRecommendation(event.target.value);
    setRecommendationError(false);
  };

  const onFormSubmit = (event) => {
    if (isError) {
      event.preventDefault();
      setSubmitted(true);
    } else {
      const id = product;
      const params = {
        username,
        email,
        title,
        review,
        recommendation: Number(recommendation),
        rating,
      };
      AddReview(id, params);
    }
  };
  return (
    <ThemeProvider theme={theme}>

      <form noValidate>
        <div>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl>
                <InputLabel htmlFor="username">Name *</InputLabel>
                { nameError && submitted
                  ? <Input error id="username" onChange={handleChange} />
                  : <Input id="username" onChange={handleChange} /> }
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="mt-3">
                {ratingError && submitted
                  ? <FormLabel error>What would you rate this product? *</FormLabel>
                  : <FormLabel>What would you rate this product? *</FormLabel>}
                <br />
                <Rating
                  name="hover-feedback"
                  value={rating}
                  precision={1}
                  onChange={(event, newRating) => {
                    setRating(newRating);
                    setRatingError(false);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />
                {rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>}
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="mb-3">
                <FormControl>
                  <InputLabel htmlFor="email">Email *</InputLabel>
                  { emailError && submitted
                    ? <Input error id="email" onChange={handleChange} />
                    : <Input id="email" onChange={handleChange} /> }
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="mb-3">
                <FormControl fullWidth>
                  <InputLabel htmlFor="title">Review title *</InputLabel>
                  { titleError && submitted
                    ? <Input error id="title" onChange={handleChange} />
                    : <Input id="title" onChange={handleChange} /> }
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="my-4">
                <FormControl fullWidth>
                  <InputLabel htmlFor="review">Write your review! *</InputLabel>
                  { reviewError && submitted
                    ? <Input error id="review" onChange={handleChange} />
                    : <Input id="review" onChange={handleChange} /> }
                </FormControl>
              </div>
            </Grid>
            <div className="mt-5">
              <FormControl component="fieldset">
                { recommendatitonError && submitted
                  ? <FormLabel error component="legend">Would you recommend this product? *</FormLabel>
                  : <FormLabel component="legend">Would you recommend this product? *</FormLabel> }
                <RadioGroup aria-label="recommendation" name="recommendation1" value={recommendation} onChange={handleRecChange}>
                  <FormControlLabel value="1" control={<Radio />} label="Yes!" />
                  <FormControlLabel value="0" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
            {/* <ImageUploader setImages={setImages} /> */}
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
