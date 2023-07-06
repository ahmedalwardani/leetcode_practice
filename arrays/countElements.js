// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

const countElements = (nums) => {
  let count = 0;
  const maxElement = Math.max(...nums);
  const minElement = Math.min(...nums);
  nums.forEach((num) => {
    if (num < maxElement && num > minElement) count += 1;
  });
  return count;
};
