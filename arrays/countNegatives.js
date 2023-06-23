// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

const countNegatives = (grid) => {
  let negativeNumbersCount = 0;
  let gridOfNegarives = grid.map((row) => row.filter((number) => number < 0));
  gridOfNegarives.forEach((row) => {
    negativeNumbersCount += row.length;
  });
  return negativeNumbersCount;
};
