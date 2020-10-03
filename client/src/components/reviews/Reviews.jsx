import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
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
import SearchBar from './SearchBar.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 700,
    position: 'left',
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
}));

const ListDiv = styled.div`
  height: 600px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
`;

const SearchButton = styled.button`
cursor: pointer;
padding: 0px 0px;
color: #5eaaa8;
background: transparent;
border: 0px;
font-size: 16px;
border-radius: 0px;
outline: none !important;
transition-timing-function: ease-in;
transition: .3s;

&:hover {
  background-color: transparent;
  border: 0px;
  textDecoration: none;
  color: black;
  box-shadow: 0 0px;
`;

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [sortedBy, setSortedBy] = useState('relevance');
  const [reviewsOnPage, setReviewsOnPage] = useState(2);
  const [filtered, setFiltered] = useState(null);
  const [searchBar, setSearchBar] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (!props.reviewData) {
      setReviews([]);
      setStarRating('0');
    } else if (props.clickedStar === null && filtered === null) {
      setReviews(props.reviewData);
      localStorage.setItem('document', JSON.stringify(props.reviewData));
    } else if (props.clickedStar !== null) {
      const defaultReviews = (JSON.parse(localStorage.getItem('document')));
      setFiltered(true);
      setReviews(filterReviewsByStar(defaultReviews, props.clickedStar));
    }
  }, [props.reviewData, props.clickedStar]);

  const setDropdownValue = (filter) => {
    setSortedBy(filter);
    getSortedReviews(filter, props.product)
      .then((data) => {
        props.productSort(data);
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
                        <SearchBar />
                      </Paper>
                    </Grow>
                  </Grid>
                  <Grid item xs={2}>
                    <SearchButton onClick={handleSearchRender}>
                      <CloseIcon />
                    </SearchButton>
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
                    <SearchButton onClick={handleSearchRender}>
                      <SearchIcon />
                    </SearchButton>
                  </Grid>
                </>
              )}
          </Grid>
          <Grid item xs={12}>
            <ListDiv onScroll={handleScroll}>
              <div className="my-5">
                <ReviewsList
                  reviewData={reviews}
                  reviewsOnPage={reviewsOnPage}
                />
              </div>
            </ListDiv>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <NewReviewModal product={props.product} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Reviews;
