const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const dateConverter = (date) => {
  const id = new Date(date);
  const day = `${id.getDate()}th`;
  const month = months[(id.getMonth()) - 1];
  const year = id.getFullYear();

  return (`${month} ${day}, ${year}`);
};

export default dateConverter;
