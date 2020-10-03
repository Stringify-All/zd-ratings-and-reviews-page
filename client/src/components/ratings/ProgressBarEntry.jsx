/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';
import styled from 'styled-components';
import theme from '../theme';

const HelperButton = styled.button`
cursor: pointer;
padding: 0px 0px;
color: #5eaaa8;
background: transparent;
border: 0px;
font-size: 12px;
border-radius: 0px;
outline: none !important;

&:hover {
  background-color: transparent;
  border: 0px;
  textDecoration: none;
  color: black;
  box-shadow: 0 0px;
`;

const ProgressBarEntry = ({ rating, totalRatings, handleClickedStar }) => {
  if (rating !== undefined) {
    const value = ((rating[1] / totalRatings) * 100);
    const handleClicked = () => {
      const clickedStar = rating[0];
      handleClickedStar(clickedStar);
    };
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <HelperButton onClick={handleClicked}>
                {rating[0]}
                {' '}
                Star
              </HelperButton>
            </Grid>
            <Grid item xs={10}>
              <LinearProgress color="secondary" variant="determinate" value={value} />
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    );
  }
  return (
    <div>One sec</div>
  );
};

export default ProgressBarEntry;
