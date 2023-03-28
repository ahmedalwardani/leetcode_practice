// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

const repeatedNTimes = (nums) => {
  const counterObject = {};
  for (const num of nums) {
    if (num in counterObject) {
      return num;
    } else {
      counterObject[num] = 0;
    }
  }
  return 0;
};
