// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

const runningSum = (nums) => {
  nums.reduce((accumulator, currentValue, currentIndex, array) => {
    return (array[currentIndex] += accumulator);
  });
  return nums;
};