import getSortedReviews from '../API/GetSortedReviews';

const sortByFilter = (filter, id) => {
  getSortedReviews(filter, id)
    .then((data) => (data));
};

export default sortByFilter;
