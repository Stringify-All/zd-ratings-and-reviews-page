/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import theme from '../theme';
import ReviewsList from './ReviewsList.jsx';
import SortingDropdown from './SortingDropdown.jsx';
import NewReviewModal from './ReviewModal/NewReviewModal.jsx';
import getSortedReviews from '../../API/GetSortedReviews';
import filterReviewsByStar from '../../Helpers/FilterReviewsByStar';
import filterReviewsByInput from '../../Helpers/FilterReviewsByInput';
import SearchBar from './SearchBar.jsx';

const useStyles = makeStyles((reviewTheme) => ({
  root: {
    width: 700,
    position: 'left',
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: reviewTheme.spacing(1),
  },
}));

const Reviews = ({
  reviewData, clickedStar, product, productSort,
}) => {
  const [reviews, setReviews] = useState([]);
  const [sortedBy, setSortedBy] = useState('relevance');
  const [reviewsOnPage, setReviewsOnPage] = useState(2);
  const [filtered, setFiltered] = useState(null);
  const [searchBar, setSearchBar] = useState(false);
  const [input, setInput] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    if (!reviewData) {
      setReviews([]);
    } else if (clickedStar === null && filtered === null) {
      setReviews(reviewData);
      localStorage.setItem('document', JSON.stringify(reviewData));
    }
  }, [reviewData]);

  useEffect(() => {
    if (clickedStar !== null) {
      const defaultReviews = (JSON.parse(localStorage.getItem('document')));
      setFiltered(true);
      setReviews(filterReviewsByStar(defaultReviews, clickedStar));
    }
  }, [clickedStar]);

  const setDropdownValue = (filter) => {
    setSortedBy(filter);
    getSortedReviews(filter, product)
      .then((data) => {
        productSort(data);
      });
  };

  const addReviews = () => {
    setReviewsOnPage(reviewsOnPage + 2);
  };

  const handleScroll = (event) => {
    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (bottom && reviewsOnPage !== reviews.length) {
      addReviews();
    }
  };

  const handleSearchRender = (event) => {
    setSearchBar(!searchBar);
  };

  const handleClose = (event) => {
    setSearchBar(!searchBar);
    setReviews(JSON.parse(localStorage.getItem('document')));
  };

  const handleSearchInput = (text) => {
    const defaultReviews = (JSON.parse(localStorage.getItem('document')));
    if (text !== null) {
      setReviews(filterReviewsByInput(defaultReviews, text));
      setInput(text);
    } else {
      setReviews(defaultReviews);
      setInput(text);
    }
  };

  return (
    <div className="pl-md-4">
      <ThemeProvider theme={theme}>
        <Grid container direction="row" spacing={1}>
          <Grid container direction="row" spacing={0}>
            { searchBar
              ? (
                <>
                  <Grid item xs={10}>
                    <Grow in={searchBar}>
                      <Paper elevation={4} className={classes.paper}>
                        <SearchBar handleSearchInput={handleSearchInput} />
                      </Paper>
                    </Grow>
                  </Grid>
                  <Grid item xs={2}>
                    <button className="zd-search-button" type="button" onClick={handleClose}>
                      <CloseIcon />
                    </button>
                  </Grid>
                </>
              )
              : (
                <>
                  <Grid item xs={10} className="mb-2">
                    <Typography variant="subtitle1">
                      {reviews.count}
                      {' '}
                      reviews sorted by
                      {' '}
                      <SortingDropdown setDropdownValue={setDropdownValue} />
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <button className="zd-search-button" type="button" onClick={handleSearchRender}>
                      <SearchIcon />
                    </button>
                  </Grid>
                </>
              )}
          </Grid>
          <Grid item xs={12}>
            <div className="zd-review-list" onScroll={handleScroll}>
              <div className="my-5">
                <ReviewsList
                  reviewData={reviews}
                  reviewsOnPage={reviewsOnPage}
                  input={input}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <NewReviewModal product={product} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Reviews;
