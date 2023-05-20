// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

const secondHighest = (s) => {
  let set = new Set();
  for (const char of s) {
    if (!isNaN(char)) {
      set.add(parseInt(char));
    }
  }
  let sortedArray = Array.from(set).sort((a, b) => b - a);
  return sortedArray.length <= 1 ? -1 : sortedArray[1];
};
