const filterReviewsByInput = (reviewObj, text) => {
  const newReviewObject = reviewObj;
  const array = reviewObj.results;
  const resultArray = [];
  array.map((review) => {
    const lowerCaseSum = review.summary.toLowerCase();
    const lowerCaseBody = review.body.toLowerCase();
    if (lowerCaseSum.includes(text) || lowerCaseBody.includes(text)) {
      resultArray.push(review);
    }
    return resultArray;
  });
  newReviewObject.results = resultArray;
  return newReviewObject;
};

export default filterReviewsByInput;
