const getAverageStarRating = (recObj) => {
  const sum = recObj[1];
  const total = recObj[1] + recObj[2] + recObj[3] + recObj[4] + recObj[5];
  return (Math.floor((sum / total) * 100));
};

export default getAverageStarRating;
