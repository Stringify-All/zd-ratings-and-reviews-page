const sortByFilter = (filter, array) => {
  if (filter === 'helpfulness') {
    array.sort((a, b) => b.helpfulness - a.helpfulness);
  } else if (filter === 'relevance') {
    array.sort((a, b) => b.rating - a.rating);
  } else if (filter === 'newest') {
    array.sort((a, b) => b.date - a.date);
  }
  return array;
};

export default sortByFilter;
