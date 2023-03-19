// You are given a string allowed consisting of distinct characters and an array of strings words.

//A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

const countConsistentStrings = (allowed, words) => {
  let allowedSet = new Set(allowed);
  return words.reduce((accumulator, currentWord) => {
    return currentWord.split("").every((letter) => allowedSet.has(letter))
      ? (accumulator += 1)
      : accumulator;
  }, 0);
};
