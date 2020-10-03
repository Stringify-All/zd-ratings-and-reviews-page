/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CharacteristicSlider from './CharacteristicSlider.jsx';

const CharacteristicsTable = ({ ratingsData }) => {
  if (ratingsData.ratings !== undefined) {
    const characteristicsData = Object.entries(ratingsData.characteristics);
    return (
      <Grid>
        {characteristicsData.map((characteristic) => (
          <CharacteristicSlider key={characteristic} characteristic={characteristic} />
        ))}
      </Grid>
    );
  }
  return (
    <div> </div>
  );
};

export default CharacteristicsTable;
