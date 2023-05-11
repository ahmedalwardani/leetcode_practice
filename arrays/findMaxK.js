// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

// Return the positive integer k. If there is no such integer, return -1.

const findMaxK = (nums) => {
  let sortedNums = [...nums].sort((a, b) => b - a);
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums.includes(sortedNums[i] * -1)) return sortedNums[i];
  }
  return -1;
};
