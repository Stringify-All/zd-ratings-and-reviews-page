const getAverages = (recObj) => {
  const sum = recObj[1];
  const total = recObj[0] + recObj[1];
  return (Math.floor((sum / total) * 100));
};

export default getAverages;
