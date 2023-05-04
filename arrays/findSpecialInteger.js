// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

const findSpecialInteger = (arr) => {
  const countObject = {};
  for (const num of arr) {
    countObject[num] = countObject[num] + 1 || 1;
  }
  for (const num in countObject) {
    if (countObject[num] / arr.length > 0.25) {
      return num;
    }
  }
};
