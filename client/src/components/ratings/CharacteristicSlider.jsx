import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const ratings = [
  {
    value: 10,
    label: 'Too snug',
  },
  {
    value: 50,
    label: 'Just right',
  },
  {
    value: 90,
    label: 'Too big',
  },
];

const CharacteristicSlider = (props) => (
  <div className="mt-4">
    <Typography id="discrete-slider" gutterBottom>
      Fit
    </Typography>
    <Slider
      defaultValue={30}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={10}
      marks={ratings}
      min={0}
      max={100}
      disabled
    />
  </div>
);

export default CharacteristicSlider;
