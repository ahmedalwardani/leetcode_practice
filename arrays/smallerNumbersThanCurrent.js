// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

const smallerNumbersThanCurrent = (nums) => {
  let sortedNums = nums.slice().sort((a, b) => a - b);
  let resultsArray = [];
  for (let i = 0; i < nums.length; i++) {
    resultsArray.push(sortedNums.indexOf(nums[i]));
  }
  return resultsArray;
};
