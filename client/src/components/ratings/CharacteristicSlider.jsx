import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const ratings = [
  {
    value: 0.5,
    label: 'Too snug',
  },
  {
    value: 2.5,
    label: 'Just right',
  },
  {
    value: 4.5,
    label: 'Too big',
  },
];

const CharacteristicSlider = (props) => {
  console.log(props);
  const value = Number(props.characteristic[1].value);
  return (
    <div className="mt-4">
      <Typography id="discrete-slider-always" gutterBottom>
        {props.characteristic[0]}
      </Typography>
      <Slider
        defaultValue={value}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={ratings}
        min={0}
        max={5}
        disabled
      />
    </div>
  );
};

export default CharacteristicSlider;
