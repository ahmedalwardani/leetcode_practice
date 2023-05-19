// You are given a 0-indexed array of string words and two integers left and right.

// A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].


const vowelStrings = (words, left, right) => {
  const vowelRegex = /[aeiou]/;
  let vowelStringsCounter = 0;
  for (let i = left; i <= right; i++) {
    if (words[i][0].match(vowelRegex) && words[i].at(-1).match(vowelRegex)) {
      vowelStringsCounter += 1;
    }
  }
  return vowelStringsCounter;
};
