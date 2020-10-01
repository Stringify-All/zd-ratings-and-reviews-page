import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import theme from '../theme';
import ReviewsList from './ReviewsList.jsx';
import SortingDropdown from './SortingDropdown.jsx';
import sortByFilter from '../../Helpers/SortByFilter';
import NewReviewModal from './ReviewModal/NewReviewModal.jsx';
import getSortedReviews from '../../API/GetSortedReviews';
import filterReviewsByStar from '../../Helpers/FilterReviewsByStar';

const ListDiv = styled.div`
  height: 600px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
`;

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [sortedBy, setSortedBy] = useState('relevance');
  const [reviewsOnPage, setReviewsOnPage] = useState(2);
  const [filtered, setFiltered] = useState(null);

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

  return (
    <div className="mt-2 pl-md-4">
      <ThemeProvider theme={theme}>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {reviews.count}
              {' '}
              reviews sorted by
              <SortingDropdown setDropdownValue={setDropdownValue} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ListDiv onScroll={handleScroll}>
              <div className="my-4">
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
