const colorByUser = (value) => {
  if (value === 1) return '#FFD700';
  else if (value === 2) return '#DF2035';
  return 'transparent';
};

const colorClass = (value) => {
  if (value === 1) return 'red';
  else if (value === 2) return 'yellow';
  return 'white';
};

export { colorByUser, colorClass };
