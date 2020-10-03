/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const CharacteristicSlider = ({ characteristic }) => {
  const value = Number(characteristic[1].value);
  const type = characteristic[0];
  const [labels, setLabels] = useState(['Too snug', 'Just right', 'Too big']);

  useEffect(() => {
    if (type === 'Length') {
      setLabels(['Too short', 'Perfect', 'Too long']);
    } else if (type === 'Comfort' || type === 'Quality') {
      setLabels(['Eh...', '', 'Amazing']);
    } else {
      setLabels(['Too snug', 'Just right', 'Too big']);
    }
  }, []);

  const ratings = [
    {
      value: 0.5,
      label: labels[0],
    },
    {
      value: 2.5,
      label: labels[1],
    },
    {
      value: 4.5,
      label: labels[2],
    },
  ];

  return (
    <div className="mt-4">
      <Typography id="discrete-slider-always" gutterBottom>
        {type}
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
