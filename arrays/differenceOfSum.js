// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

const differenceOfSum = (nums) => {
  const digitSum = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  let elementsum = nums
    .join("")
    .split("")
    .reduce(
      (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
      0
    );
  return Math.abs(digitSum - elementsum);
};
