import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CharacteristicSlider from './CharacteristicSlider.jsx';

const CharacteristicsTable = (props) => {
  if (props.ratingsData.ratings !== undefined) {
    const characteristicsData = Object.entries(props.ratingsData.characteristics);
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
