// You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:

// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.

const divideArray = (nums) => {
  if (nums.length % 2 !== 0) return false;
  const seenObject = {};
  for (const num of nums) {
    if (seenObject[num]) {
      seenObject[num] += 1;
    } else {
      seenObject[num] = 1;
    }
  }
  return Object.values(seenObject).every((num) => num % 2 === 0);
};
