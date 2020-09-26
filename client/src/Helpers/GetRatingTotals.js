const getRatingsTotals = (recObj) => {
  const total = recObj[1] + recObj[2] + recObj[3] + recObj[4] + recObj[5];
  return total;
};

export default getRatingsTotals;
