// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

const isMonotonic = (nums) => {
  const monotonicIncreasing = [...nums].sort((a, b) => a - b);
  const monotonicDecreasing = [...nums].sort((a, b) => b - a);
  return (
    JSON.stringify(nums) === JSON.stringify(monotonicIncreasing) ||
    JSON.stringify(nums) === JSON.stringify(monotonicDecreasing)
  );
};

const isMonotonic2 = (nums) => {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      isIncreasing = false;
    }
    if (nums[i] < nums[i + 1]) {
      isDecreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
};
