export const formatNumber = (index: number) => {
  const number = index + 1;
  return number > 9 ? String(number) : `0${number}`;
};