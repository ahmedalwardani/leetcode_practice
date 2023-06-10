// Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

// An English letter b is greater than another letter a if b appears after a in the English alphabet.

const greatestLetter = (s) => {
  const existsInLowerAndUpperCase = {};
  for (const letter of s) {
    if (letter === letter.toUpperCase()) {
      if (s.includes(letter.toLowerCase())) {
        existsInLowerAndUpperCase[letter.toUpperCase()] = true;
      }
    }
    if (letter === letter.toLowerCase()) {
      if (s.includes(letter.toUpperCase())) {
        existsInLowerAndUpperCase[letter.toUpperCase()] = true;
      }
    }
  }
  return Object.keys(existsInLowerAndUpperCase).sort().reverse()[0] || "";
};
