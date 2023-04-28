// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

const mergeAlternately = (word1, word2) => {
  let mergedWord = "";
  let loopStop = Math.max(word1.length, word2.length);
  for (let i = 0; i < loopStop; i++) {
    mergedWord += word1[i] || "";
    mergedWord += word2[i] || "";
  }
  return mergedWord;
};
