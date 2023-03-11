//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

var twoSumEfficient = (nums, target) => {
  let object = {};
  for (let i = 0; i < nums.length; i++) {
    let elementFound = target - nums[i];
    if (object[elementFound] != null) {
      return [i, object[elementFound]];
    } else {
      object[nums[i]] = i;
    }
  }
};

// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSumEfficient([2, 7, 11, 15], 9));
