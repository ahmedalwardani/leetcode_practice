//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
let containsDuplicate = (nums) => {
  let containsDuplicate = false;
  let containsObject = {};
  for (const num of nums) {
    if (containsObject[num]) {
      containsDuplicate = true;
    } else {
      containsObject[num] = true;
    }
  }
  return containsDuplicate;
};

console.log(containsDuplicate([0, 1, 0, 3, 12]));
console.log(containsDuplicate([1, 2, 3]));
