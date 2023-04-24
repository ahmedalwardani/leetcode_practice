// Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

const maxProduct = (nums) => {
  sortedNums = nums.sort((a, b) => b - a);
  return (sortedNums[0] - 1) * (sortedNums[1] - 1);
};
