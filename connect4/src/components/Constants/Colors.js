/**
 * Return color based on board cell value.
 * @param {string} value
 * @returns
 */
const colorByUser = (value) => {
  if (value === 1) return '#FFD700';
  else if (value === 2) return '#DF2035';
  return 'transparent';
};

export default colorByUser;
