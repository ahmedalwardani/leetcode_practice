// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

const restoreString = (s, indices) => {
  let locationsArray = [];
  for (let i = 0; i < s.length; i++) {
    locationsArray.push([s[i], indices[i]]);
  }
  let returnArray = [];
  locationsArray.forEach((location) => {
    returnArray[location[1]] = location[0];
  });
  return returnArray.join("");
};
