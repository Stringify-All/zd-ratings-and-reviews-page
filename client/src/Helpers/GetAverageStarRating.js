const getAverageStarRating = (ratingsObj) => {
  const weightedSum = ((1 * ratingsObj[1]) + (2 * ratingsObj[2])
  + (3 * ratingsObj[3]) + (4 * ratingsObj[4]) + (5 * ratingsObj[5]));
  const total = ratingsObj[1] + ratingsObj[2] + ratingsObj[3] + ratingsObj[4] + ratingsObj[5];
  const avgStarVal = (weightedSum / total);
  return avgStarVal.toFixed(1);
};

export default getAverageStarRating;
