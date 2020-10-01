const filterReviewsByStar = (reviewObj, starRating) => {
  const newReviewObject = reviewObj;
  const array = reviewObj.results;
  const resultArray = [];
  array.map((review) => {
    if (review.rating === Number(starRating)) {
      resultArray.push(review);
    }
    return resultArray;
  });
  newReviewObject.results = resultArray;
  return newReviewObject;
};

export default filterReviewsByStar;
