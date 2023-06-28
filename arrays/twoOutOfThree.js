// Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

const twoOutOfThree = (nums1, nums2, nums3) => {
  let ans = new Set();

  let set1 = new Set();
  for (const num1 of nums1) {
    set1.add(num1);
  }

  let set2 = new Set();
  for (const num2 of nums2) {
    set2.add(num2);
    if (set1.has(num2)) {
      ans.add(num2);
    }
  }
  for (const num3 of nums3)
    if (set1.has(num3) || set2.has(num3)) {
      ans.add(num3);
    }

  return [...ans];
};
