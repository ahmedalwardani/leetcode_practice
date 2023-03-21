// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

const checkIfPangram = (sentence) => {
  const containsLetter = {};
  for (const letter of sentence) {
    if (!containsLetter[letter]) {
      containsLetter[letter] = true;
    }
  }
  return Object.keys(containsLetter).length === 26;
};

const checkIfPangramWithSet = (sentence) => {
  return new Set(sentence.split("")).size === 26;
};
