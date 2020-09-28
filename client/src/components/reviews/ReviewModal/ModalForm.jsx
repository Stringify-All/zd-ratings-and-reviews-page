import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

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

const ModalForm = () => {
  const [rating, setRating] = useState(2);
  const [hover, setHover] = useState(-1);

  return (
    <form noValidate>
      <div>
        <FormControl fullWidth>
          <InputLabel htmlFor="review-title">Title</InputLabel>
          <Input
            id="review-title"
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="review-body">Write your review!</InputLabel>
          <Input
            id="review-body"
            multiline
          />
        </FormControl>
        <div className="mt-5">
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
      </div>
    </form>
  );
};

export default ModalForm;
