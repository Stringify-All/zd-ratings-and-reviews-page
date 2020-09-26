const getAverageStarRating = (recObj) => {
  const weightedSum = ((1 * recObj[1]) + (2 * recObj[2]) + (3 * recObj[3]) + (4 * recObj[4]) + (5 * recObj[5]));
  const total = recObj[1] + recObj[2] + recObj[3] + recObj[4] + recObj[5];
  const avgStarVal = (weightedSum / total);
  return avgStarVal.toFixed(1);
};

export default getAverageStarRating;
