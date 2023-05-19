// You are given a 0-indexed array of string words and two integers left and right.

// A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

const vowels = ["a", "e", "i", "o", "u"];

const vowelStrings = (words, left, right) => {
  let vowelStringsCounter = 0;
  for (let i = left; i <= right; i++) {
    if (
      vowels.includes(words[i][0]) &&
      vowels.includes(words[i][words[i].length - 1])
    ) {
      vowelStringsCounter += 1;
    }
  }
  return vowelStringsCounter;
};
