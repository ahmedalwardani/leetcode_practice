// You are given an array of strings words and a string pref.

// Return the number of strings in words that contain pref as a prefix.

// A prefix of a string s is any leading contiguous substring of s.

const prefixCount = (words, pref) => {
  let counter = 0;
  for (const word of words) {
    if (word.startsWith(pref)) {
      counter += 1;
    }
  }
  return counter;
};

var prefixCountWitnIndexOf = function (words, pref) {
  let count = 0;
  for (let word of words) {
    if (word.indexOf(pref) == 0) count++;
  }
  return count;
};
