// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = (nums) => {
  const squaredNums = nums.map((num) => num * num);
  return squaredNums.sort((a, b) => a - b);
};
