// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

const findDifference = (nums1, nums2) => {
  let ans1 = new Set(nums1);
  nums2.forEach((num2) => {
    ans1.delete(num2);
  });
  let ans2 = new Set(nums2);
  nums1.forEach((num1) => {
    ans2.delete(num1);
  });
  return [[...ans1], [...ans2]];
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
