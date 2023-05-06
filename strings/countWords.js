// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

const countWords = (words1, words2) => {
  const words1Map = new Map();
  const words2Map = new Map();
  let count = 0;

  for (const word of words1) {
    words1Map.set(word, words1Map.get(word) + 1 || 1);
  }
  for (const word of words2) {
    words2Map.set(word, words2Map.get(word) + 1 || 1);
  }
  for (const word of words1) {
    if (words1Map.get(word) === 1 && words2Map.get(word) === 1) count++;
  }

  return count;
};
