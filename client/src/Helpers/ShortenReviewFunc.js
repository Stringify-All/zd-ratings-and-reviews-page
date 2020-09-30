const shortenReviewFunc = (reviewBody) => {
  const bodyArray = reviewBody.split('').splice(0, 250);
  const first250 = bodyArray.join('');
  return first250;
};

export default shortenReviewFunc;
