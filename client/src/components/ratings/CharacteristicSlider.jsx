import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const CharacteristicSlider = (props) => {
  const value = Number(props.characteristic[1].value);
  const characteristic = props.characteristic[0];
  const [labels, setLabels] = useState(['Too snug', 'Just right', 'Too big']);

  useEffect(() => {
    if (characteristic === 'Length') {
      setLabels(['Too short', 'Perfect', 'Too long']);
    } else if (characteristic === 'Comfort' || characteristic === 'Quality') {
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
        {characteristic}
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
