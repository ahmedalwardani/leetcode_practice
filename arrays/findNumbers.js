// Given an array nums of integers, return how many of them contain an even number of digits.

const findNumbers = (nums) => {
  const numsAsString = nums.map(String);
  return numsAsString.filter((numAsString) => numAsString.length % 2 === 0)
    .length;
};

