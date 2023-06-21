// Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.

// Return the selected integer.

const findNonMinOrMax = (nums) => {
  if (nums.length < 3) return -1;
  return nums.sort((a, b) => a - b)[1];
};
