//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//Note that you must do this in-place without making a copy of the array.

const moveZeroes = (nums) => {
  if (!nums.includes(0)) {
    return nums;
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(0);
      nums.splice(i, 1);
    }
  }
  return nums;
};

console.log(moveZeroes([0, 0, 5, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0, 0, 1]));
